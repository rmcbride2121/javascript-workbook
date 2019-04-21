"use strict";

let board = [
    [" ", " ", " "], 
    [" ", " ", " "], 
    [" ", " ", " "]
];

let playerTurn = "X";

// Changes the variable value to X
function changeMarkerToX() {
  playerTurn = "X";
  console.log("The x button was clicked!");
}

// Changes the variable  value to O
function changeMarkerToO() {
  playerTurn = "O";
  console.log("The o button was clicked!");
}

// // Resets the the board
$("#button").click(function() {
  //clears the board of all innerHTML
  $(".box").empty();
  //clears any text between the buttons and the board
  $("#win-text").empty();
  //clears the values of the board
  board = [
    [" ", " ", " "], 
    [" ", " ", " "], 
    [" ", " ", " "]
  ];
});

function horizontalWin() {
  // Possible horizontal wins
  for (let i = 0; i < board.length; i++) {
    if (
      board[i][0] == board[i][1] &&
      board[i][0] == board[i][2] &&
      board[i][0] == playerTurn
    ) {
      return true;
    }
  }
  return false;
}

function verticalWin() {
  // Possible vertical wins
  for (let i = 0; i < board[0].length; i++) {
    if (
      board[0][i] == playerTurn &&
      board[0][i] == board[1][i] &&
      board[0][i] == board[2][i]
    ) {
      return true;
    }
  }
  return false;
}

function diagonalWin() {
  // Possible diagonal wins
  if (board[1][1] == playerTurn) {
    if (board[0][0] == playerTurn && board[2][2] == playerTurn) {
      return true;
    } else if (board[0][2] == playerTurn && board[2][0] == playerTurn) {
      return true;
    } else return false;
  } else return false;
}

function checkForWin() {
  // Check all possible win options
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    document.getElementById("win-text").innerHTML = "Player " + playerTurn + " Wins!";
    return true;
  } else return false;
}

function ticTacToe(row, column, event) {
    //places the value of playerTurn in the selected box on the board
    if (board[row][column] === " ") {
        board[row][column] = playerTurn;
    } else {
        //prevents users from selecting a box more than once
        document.getElementById("win-text").innerHTML = ("Invalid move. That box has already been taken.");
        return playerTurn;
    }
    checkForWin();

//   Update your board based on row and columns
    if (playerTurn == 'X'){
        //inserts the value of playerTurn onto the board
      document.getElementById(event.id).innerHTML = playerTurn;
      //switches to player O
      playerTurn = 'O';
    } else if (playerTurn == 'O') {
        //inserts the value of playerTurn onto the board
      document.getElementById(event.id).innerHTML = playerTurn;
      //switches to player X
      playerTurn = 'X';
    }
}
