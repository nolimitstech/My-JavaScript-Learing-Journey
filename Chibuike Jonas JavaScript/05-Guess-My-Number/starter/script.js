'use strict';
/*
console.log(document.querySelector('.message').textContent);  // .textcontent helps get the text of the class selectd
document.querySelector('.message').textContent = '🎉 Correct Number!';  // used to change txt content

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // .value is used for input fields
console.log(document.querySelector('.guess').value);
*/

//EXPERIMENT
// document.querySelector('.check').addEventListener('click', function () {  //click is an event dt happens on mouseclick
//   console.log(document.querySelector('.guess').value);
// });



// BUILDING GUESS MY NUMBER

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) { // u can use dis function to keep the code DRYER
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // 'Number converts to number
  console.log(guess, typeof guess);

  //// // GAME CONDITIONS

  if (!guess) {  // means if not true OR  When there is no input
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

  } else if (guess === secretNumber) {  // When player wins
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) { // CODING UP HIGH SCORE SECTION 
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // SEE DRY CODE BELOW N/B u can use anyone!
    // } else if (guess > secretNumber) {

    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '🤡 Too High!';
    //     // score = score - 1; //OR
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '😴 You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }

    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '🤡 Too low!';
    //     // score = score - 1; //OR
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '😴 You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }


    // REFACTORING THE CODE/ DRY PRINCIPLE .....DRY CODE HERE

  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';  // OR
      // displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!'); // dryer methd
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!'; // OR
      // displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

});

//  TO CODE THE 'AGAIN' SECTION
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  // displayMessage('Start guessing...');
  document.querySelector('.message').textContent = 'Start guessing...!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});



