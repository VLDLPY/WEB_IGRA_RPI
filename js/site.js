const words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let word;
let guessedWord;
let attempts;

function newGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guessedWord = '_'.repeat(word.length);
    attempts = 5;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('wordDisplay').textContent = guessedWord;
    document.getElementById('attemptCount').textContent = attempts;
}

function checkLetter() {
    const guessInput = document.getElementById('guessInput');
    const letter = guessInput.value.toLowerCase();
    guessInput.value = '';

    if (!letter || !/[a-z]/.test(letter)) {
        alert('Пожалуйста, введите букву.');
        return;
    }

    if (word.includes(letter)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                guessedWord = guessedWord.substring(0, i) + letter + guessedWord.substring(i + 1);
            }
        }
    } else {
        attempts--;
        if (attempts === 0) {
            alert('Вы проиграли. Загаданное слово: ' + word);
            newGame();
            return;
        }
    }

    if (guessedWord === word) {
        alert('Вы выиграли!');
        newGame();
    } else {
        updateDisplay();
    }
}

window.onload = newGame;
