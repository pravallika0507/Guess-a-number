'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
    //document.querySelector('.message').textContent = 'Correct number';

// when there is no input
    if(!guess) {
        displayMessage('⛔ No Number');
        // when player wins
    } else if (guess === SecretNumber) {
        displayMessage('🎉 Correct Number');
        document.querySelector('.number').textContent = SecretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //when guess is wrong
    } else if (guess !== SecretNumber) {
        if (score >= 0) {
            displayMessage(guess > SecretNumber ? '📈 Too High!' : '📉 Too Low!');
            //score = score - 1;
            score--;
            document.querySelector('.score').textContent = score;
            } else {
            displayMessage('🚫 You lost the game');
            document.querySelector('.score').textContent = 0;
            };
    } 
    //When guess is too high
    // else if (guess > SecretNumber) {
    //     if (score >= 0) {
    //     document.querySelector('.message').textContent = '📈 Too High!'
    //     //score = score - 1;
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //     document.querySelector('.message').textContent = '🚫 You lost the game';
    //      document.querySelector('.score').textContent = 0;
    //     }
    //     // when guess is too low
    // } else if (guess < SecretNumber) {
    //     if( score >= 0 ){
    //     document.querySelector('.message').textContent = '📉 Too Low!'
    //     //score = score - 1;
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '🚫 You lost the game';
    //      document.querySelector('.score').textContent = 0;
    //     }
    // }

});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    //document.querySelector('.message').textContent = 'Start guessing...';
});
