'use strict';

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

const init = function () {
  // init input
  input.style.backgroundColor = 'transparent';

  // init focus
  input.focus();

  // init Value
  highscoreText.textContent = 0;
  scoreText.textContent = 10;
  input.value = '';
  statusText.textContent = 'Start guessing...';

  // Functions
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

  // Values
  const randomNumberGen = generateRandomNumber();
  let curScore = 10;

  checkButton.addEventListener('click', function () {
    console.log(input.value);

    if (input.value === '' || input.value === 0) {
      statusText.textContent = `Please input a number between 0 and 20`;
      input.focus();
      return;
    }

    if (+input.value === randomNumberGen) {
      checkButton.disabled = true;
      randomNumber.textContent = randomNumberGen;
      statusText.innerHTML = `Yipee! <br/> ${input.value} is right!`;
      highscoreText.textContent = curScore;
      return;
    }

    if (+input.value < randomNumberGen) {
      lowerScore();
      scoreText.textContent = curScore;
      statusText.innerHTML = `Oops! <br/> ${input.value} is too low...`;
      input.value = '';
      input.focus();
    }

    if (+input.value > randomNumberGen) {
      lowerScore();
      scoreText.textContent = curScore;
      statusText.innerHTML = `Oops! <br/> ${input.value} is too high...`;
      input.value = '';
      input.focus();
    }

    if (curScore === 0) {
      checkButton.disabled = true;
      statusText.innerHTML = `Oh no! <br/> You lost!`;
      input.disabled = true;
      input.style.backgroundColor = '#333';
    }
  });
};
init();

playAgainButton.addEventListener('click', init);

rulesButton.addEventListener('click', function () {
  rulesModal.classList.remove('hidden');
});

closeModal.addEventListener('click', function () {
  rulesModal.classList.add('hidden');
});
