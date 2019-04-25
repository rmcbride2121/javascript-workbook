'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  // Create variables solutionArray and guessArray that each split up passed in arguments, .splitting on ''(empty string).
  let solutionArray = solution.split('');
  let guessArray = guess.split('');

  // Create a variable correctLetterLocations that will record how many correct "letter-locations" were guessed. 
  // Set correctLetterLocations equal to 0.
  // In a for loop, iterate over the solutionArray, comparing each index of solutionArray against the same index of guessArray.
  // If the item matches, increment correctLetterLocations, and set that index in solutionArray to null.
  let correctLetterLocations = 0;
  for (let i = 0; i < solutionArray.length; i++){
    if (solutionArray[i] == guessArray[i]){
      correctLetterLocations += 1;
      solutionArray[i] = null;
    }
  }

  // Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray.
  let correctLetters = 0;
  // Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray.
  // Save that index in a variable called targetIndex.
  // Now, if targetIndex is greater that -1, increment correctLetters and set the item in solutionArray at that index equal to null.
  for (let n = 0; solutionArray.length > n; n++){
    let targetIndex = guessArray.indexOf([solutionArray[n]]);
    if (targetIndex > -1) {
      correctLetters += 1;
      solutionArray[n] = null;
    }
  }

  // Return a string that prints out the hints you generated, with correctLetterLocations being red, correctLetters being white, and separated by a hyphen.
  let hint = correctLetterLocations + "-" + correctLetters;
  console.log(hint);
  return hint;
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // After 10 incorrect guesses, if the board length equals 10, return 'You ran out of turns! The solution was ' and the solution.
  // Otherwise, return 'Guess again.'.
  // Define a var called hint that collects the returned value of generateHint(solution, guess).
  // .push the guess and the hint (as a combined string) into the board.

  if (guess === solution) {
    console.log('You guessed it!');
  } else {
    generateHint(solution, guess);
    console.log('Guess again');
    board += 1;
  }
  if (board.length >= 10){
    console.log('You ran out of guesses! The solution was: ${solution}');
    return;
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint(solution, 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint(solution, 'aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
