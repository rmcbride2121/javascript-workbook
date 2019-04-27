'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let stacks = {
a: [4, 3, 2, 1],
b: [],
c: []
};

function printStacks() {
console.log("a: " + stacks.a);
console.log("b: " + stacks.b);
console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
// Moves the pieces from one stack to another
stacks[endStack].push(stacks[startStack].splice(-1,1));

}

function isLegal() {
// Legal moves
  for (let i = 0; stacks.length < i; i++){
    
  }
}

function checkForWin() {
// Checks for a win
  if (stacks == {
    a: [],
    b: [4, 3, 2, 1],
    c: []
    } || stacks == {
      a: [],
      b: [],
      c: [4, 3, 2, 1]
      } ){
        console.log("You win!");
        return "You win!";
      }
}

function towersOfHanoi(startStack, endStack) {
movePiece(startStack, endStack);

}

function getPrompt() {
printStacks();
rl.question('start stack: ', (startStack) => {
rl.question('end stack: ', (endStack) => {
towersOfHanoi(startStack, endStack);
getPrompt();
});
});
}

// Tests

if (typeof describe === 'function') {

describe('#towersOfHanoi()', () => {
it('should be able to move a block', () => {
towersOfHanoi('a', 'b');
assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
});
});

describe('#isLegal()', () => {
it('should not allow an illegal move', () => {
stacks = {
a: [4, 3, 2],
b: [1],
c: []
};
assert.equal(isLegal('a', 'b'), false);
});
it('should allow a legal move', () => {
stacks = {
a: [4, 3, 2, 1],
b: [],
c: []
};
assert.equal(isLegal('a', 'c'), true);
});
});
describe('#checkForWin()', () => {
it('should detect a win', () => {
stacks = { a: [], b: [4, 3, 2, 1], c: [] };
assert.equal(checkForWin(), true);
stacks = { a: [1], b: [4, 3, 2], c: [] };
assert.equal(checkForWin(), false);
});
});

} else {

getPrompt();

}