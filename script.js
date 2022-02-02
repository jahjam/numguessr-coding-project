'use strict';

// Selectors
// Page Text Elements
const randomNumber = document.querySelector('.random-number');
const statusText = document.querySelector('.status-text');
const scoreText = document.querySelector('.score-text');
const highscoreText = document.querySelector('.highscore-text');

// Inputs
const input = document.querySelector('.guess-input');

// Buttons
const checkButton = document.querySelector('.check-btn');
const playAgainButton = document.querySelector('.play-again-btn');
const rulesButton = document.querySelector('.rules-btn');
const closeModal = document.querySelector('.modal-close');

// Modal
const rulesModal = document.querySelector('.modal');

// Global Number values
let randomNumberGen;
let curScore = 10;
let highscore = 0;

// Functions
// Initialize Values
const init = function () {
  // init check button & input activation
  input.disabled = false;
  checkButton.disabled = false;

  // init input style
  input.style.backgroundColor = 'transparent';

  // init focus
  input.focus();

  // init values
  scoreText.textContent = 10;
  statusText.textContent = 'Start guessing...';
  input.value = '';
  randomNumber.textContent = '?';

  // Reset Score
  curScore = 10;

  // New Number
  randomNumberGen = generateRandomNumber();
};

// Function to generate random number between 1 and 20
const generateRandomNumber = function () {
  const num = Math.ceil(Math.random() * 20);
  console.log(num);
  return num;
};

// Function to lower score
const lowerScore = function () {
  curScore--;
  return curScore;
};

// Function to update highscore
const highscoreUpdate = function (curScore) {
  if (curScore > highscore) {
    highscore = curScore;
    highscoreText.textContent = curScore;
  }
};

// Function to calculate outcome of check
const calculateOutcome = function () {
  if (input.value === '' || +input.value === 0 || +input.value > 20) {
    statusText.textContent = `Please input a number between 0 and 20`;
    input.focus();
    input.value = '';
    return;
  }

  if (+input.value === randomNumberGen) {
    checkButton.disabled = true;
    randomNumber.textContent = randomNumberGen;
    statusText.innerHTML = `Yipee! <br/> ${input.value} is right!`;
    highscoreUpdate(curScore);
    input.value = '';
    return;
  }

  if (+input.value < randomNumberGen || +input.value > randomNumberGen) {
    console.log(input.value);
    lowerScore();
    scoreText.textContent = curScore;
    statusText.innerHTML = `Oops! <br/> ${input.value} is too ${
      +input.value < randomNumberGen ? 'low' : 'high'
    }...`;
    input.focus();
    input.value = '';
  }

  if (curScore === 0) {
    console.log(curScore);
    checkButton.disabled = true;
    statusText.innerHTML = `Oh no! <br/> You lost!`;
    input.disabled = true;
    input.style.backgroundColor = '#333';
    input.value = '';
  }
  return;
};

// Function to toggle modal
const toggleModal = function () {
  rulesModal.classList.contains('hidden')
    ? rulesModal.classList.remove('hidden')
    : rulesModal.classList.add('hidden');
};

// Event listeners
window.addEventListener('load', init);
checkButton.addEventListener('click', calculateOutcome);
playAgainButton.addEventListener('click', init);
rulesButton.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);
