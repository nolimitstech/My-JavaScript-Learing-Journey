'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); //used for selecting Id too
const score1El = document.getElementById('score--1'); // used for selecting ID too
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


let scores, currentScore, activePlayer, playing;

// starting conditions

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden'); // created hidden class and added it

// const scores = [0, 0];
// let currentScore = 0; // this writen outide the btnRoll functn so it wont reset whwneva the rollDice btn is clicked
// let activePlayer = 0; // this will hold 0 if curent player is player0, and 1 if activ player is player1.
// let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // means if actv player is 0, let new activ player be 1, else it shld be 0
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};


// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {

    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;  // this functn is wirtten here cos it happens only when dice is rolled

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;  //'${dice}' is used to call the diff images of dice numbers. numbers re genertd frm the random dice funtn

    // 3. Check for rolled 1, if yes switch player, else add to current score
    if (dice !== 1) {
      // add dice to current score
      // currentScore = currentScore + dice;
      // OR
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;  // code used to store score of current player
    } else {
      // switch to another player
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0; // means if activePlayer is equal to 0, then the new active player will be 1. else, it shld be zero
      // player0El.classList.toggle('player--active');  // alows the 'player-active' class to be on one player at a time.
      // player1El.classList.toggle('player--active');
      // OR
      switchPlayer();
    }
  }
});


// verify issue, nt working from here.

btnHold.addEventListener('click', function () {
  if (playing) {


    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      // 3. Switch to the next player
      switchPlayer();
    }
  }
});


btnNew.addEventListener('click', init);


