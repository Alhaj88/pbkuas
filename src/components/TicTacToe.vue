<template>
  <div class="game-widget">
    <h2>Try Your Luck</h2>
    <div v-if="!isGameEnded">
      <p>Guess the word:</p>
      <p>{{ hiddenWord }}</p>
      <p v-if="misses.length > 0">Misses: {{ misses.join(', ') }}</p>
      <input type="text" v-model="guess" />
      <button @click="checkGuess">Check</button>
    </div>
    <div v-if="isGameEnded">
      <p v-if="isWin">Congratulations! You guessed the word correctly: {{ secretWord }}</p>
      <p v-else>Game Over! The word was: {{ secretWord }}</p>
      <button @click="resetGame">Play Again</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secretWord: 'hangman',
      hiddenWord: '',
      guess: '',
      misses: [],
      isGameEnded: false
    };
  },
  methods: {
    checkGuess() {
      if (this.guess === this.secretWord) {
        this.hiddenWord = this.secretWord;
        this.isGameEnded = true;
      } else {
        const guessedLetter = this.guess.toLowerCase();
        if (this.secretWord.includes(guessedLetter)) {
          this.updateHiddenWord(guessedLetter);
        } else {
          this.misses.push(guessedLetter);
          if (this.misses.length >= 6) {
            this.isGameEnded = true;
          }
        }
      }
      this.guess = '';
    },
    updateHiddenWord(guessedLetter) {
      let updatedWord = '';
      for (const char of this.secretWord) {
        if (char.toLowerCase() === guessedLetter) {
          updatedWord += char;
        } else {
          updatedWord += '_';
        }
      }
      this.hiddenWord = updatedWord;
      if (!this.hiddenWord.includes('_')) {
        this.isGameEnded = true;
      }
    },
    resetGame() {
      this.hiddenWord = '';
      this.guess = '';
      this.misses = [];
      this.isGameEnded = false;
      this.generateRandomWord();
    },
    generateRandomWord() {
      // Generate a random word from a list of words
      const words = ['hangman', 'javascript', 'programming', 'openai'];
      this.secretWord = words[Math.floor(Math.random() * words.length)];
      this.hiddenWord = '_'.repeat(this.secretWord.length);
    }
  },
  created() {
    this.generateRandomWord();
  }
};
</script>

<style scoped>
/* Gaya untuk Hangman Game */
.game-widget {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 15px;
  background-color: #f5f5f5;
}

h2 {
  margin-top: 0;
  color: #333;
}

button {
  border-radius: 5px;
}
input {
  border-radius: 5px;
}

</style>
