/*
* GAME FUNCTIONS:
* - Player must guess a number between a min and a max
* - Player gets a certain amount of guesses
* - Notify player of guesses remaining
* - Notify the player of the correct answer if loose
* - Let player choose to play again
* */

// Game values

let min = 1,
    max = 10,
    // randomize the winning number from 1 to 10
    winningNum = getWinningNumb(min, max),
    guessesLeft = 3;

const colorWinning = 'green';
const errorMessageColor = 'red';
const winMessage = 'Congratulation! You won! The correct number is ' + winningNum;
const gameOverMessage = 'Game Over, you lost! The correct number was ' + winningNum;
const playAgain = 'Play Again?';
const continueMessage = 'Guess was not correct. You have ';

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (evt) {
    if(evt.target.className === 'play-again') {
        // reload the page
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
   let guess = parseInt(guessInput.value);

   // Validate
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage('Please enter a number between ' + min + ' and ' + max + '!', errorMessageColor);
    }

    // Check if win
    if(guess === winningNum) {
        // Game over - won

        gameOver(true, winMessage);

    } else {
        // Lose case

        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0) {
            // Game over - lost
            gameOver(false, gameOverMessage);

        } else {

            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = errorMessageColor;

            // Clear input
            guessInput.value = '';

            // Tell user it's the wrong number
            setMessage(guess + ' ' + continueMessage + ': ' + guessesLeft, errorMessageColor);

        }
    }

});

// Game over
function gameOver(won, msg) {

    let color;
    won === true ? color = colorWinning : errorMessageColor;
    // Disable Input
    guessInput.disabled = true;

    // Change border color to green (for winning)
    guessInput.style.borderColor = color;

    message.style.color = color;
    // Set message (you won)
    setMessage(msg);

    // Play again?
    guessBtn.value = playAgain;
    guessBtn.className += 'play-again';
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

// Random winning number
function getWinningNumb() {
    return Math.floor(Math.random() * (max - min + 1) + min);
}