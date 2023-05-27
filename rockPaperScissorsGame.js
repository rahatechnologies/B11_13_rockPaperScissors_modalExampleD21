const startGameBtn = document.getElementById('start_game_btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = 'DRAW';
const PLAYER_WINS = 'WINS';
const PLAYER_LOST = 'LOST';

let isGameRunning = false;
// function expression
const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();

  // User input validation
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    // negative case
    // alert(`Invalid Choice! We choose ${DEFAULT_USER_CHOICE} for you!`);
    alert(`Invalid Choice! `);
    // return DEFAULT_USER_CHOICE;
    return;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// const getWinner = (cChoice, pChoice) => {
//   pChoice = pChoice === undefined ? DEFAULT_USER_CHOICE : pChoice;

//   return cChoice === pChoice
//     ? RESULT_DRAW
//     : (cChoice === ROCK && pChoice === PAPER) ||
//       (cChoice === PAPER && pChoice === SCISSORS) ||
//       (cChoice === SCISSORS && pChoice === ROCK)
//     ? PLAYER_WINS
//     : PLAYER_LOST;
// };

// const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? PLAYER_WINS
    : PLAYER_LOST;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   // || logical or
//   // && logical and
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return PLAYER_WINS;
// } else {
//   return PLAYER_LOST;
// }
// };

startGameBtn.addEventListener('click', function () {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log('Game is starting .....');
  const playerChoice = getPlayerChoice(); // undefined
  const computerChoice = getComputerChoice();

  let winner;

  if (playerChoice) {
    // undefined
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice); // (computerChoice, undefined)
  }
  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you had`;
  console.log(winner);
  if (winner === RESULT_DRAW) {
    message = message + ` match draw`;
  } else if (winner === PLAYER_WINS) {
    message = message + ` won`;
  } else {
    message = message + ` lost`;
  }
  alert(message);
  isGameRunning = false;
});

// Example 1: bind
let nameObj = {
  name: 'Tony',
};

let PrintName = {
  name: 'steve',
  sayHi: function () {
    // Here "this" points to nameObj
    console.log(this.name);
  },
};

let HiFun = PrintName.sayHi.bind(nameObj);
HiFun();

// Example 2: bind
