let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    document.getElementById('attempts').textContent = attempts;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage('Please enter a valid number between 1 and 100.');
    } else if (guess === targetNumber) {
        setMessage(`Congratulations! You guessed the number in ${attempts} attempts!`);
        document.querySelector('button').disabled = true;
    } else if (guess < targetNumber) {
        setMessage('Too low! Try a higher number.');
    } else {
        setMessage('Too high! Try a lower number.');
    }
}

function setMessage(msg) {
    document.getElementById('message').textContent = msg;
}