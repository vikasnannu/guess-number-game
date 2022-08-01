'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = '❓';

//Main Logic of the game
document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '🔢 Enter a Number! 😉';
    } //when the players win the game
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number! 💯';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#2dd36f';
        document.querySelector('.number').style.width = '45rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } //when the number is high
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High 💹 ';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost 😞';
            document.querySelector('.score').textContent = 0;
        }
    } //when the number is low
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low 📉';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost 😞';
            document.querySelector('.score').textContent = 0;
        }
    }
});

//Working the Replay or Again Function
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'rgb(100, 83, 126)';
    document.querySelector('.number').textContent = '❓';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = '🔢 Start Guessing! 😉';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
});