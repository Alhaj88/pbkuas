<template>
  <div class="stopwatch-widget">
    <h2>Stopwatch</h2>
    <p>{{ formatTime }}</p>
    <div>
      <button @click="handleButtonAction" :enabled="isButtonDisabled">{{ buttonText }}</button>
      <button @click="resetStopwatch" v-if="isResetButtonVisible">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      startTime: null,
      elapsedTime: 0,
      isResetButtonVisible: false,
      isStarted: false,
    };
  },
  computed: {
    formatTime() {
      const milliseconds = this.elapsedTime % 1000;
      const seconds = Math.floor((this.elapsedTime / 1000) % 60);
      const minutes = Math.floor((this.elapsedTime / 60000) % 60);
      const hours = Math.floor(this.elapsedTime / 3600000);

      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    },
    buttonText() {
      if (!this.isStarted) {
        return 'Start';
      } else if (this.isRunning) {
        return 'Stop';
      } else {
        return 'Resume';
      }
    },
    isButtonDisabled() {
      return this.isRunning || (this.elapsedTime === 0 && !this.isResetButtonVisible);
    },
  },
  methods: {
    handleButtonAction() {
      if (!this.isStarted) {
        this.startStopwatch();
      } else if (this.isRunning) {
        this.stopStopwatch();
      } else {
        this.resumeStopwatch();
      }
    },
    startStopwatch() {
      this.isRunning = true;
      this.isStarted = true;
      this.startTime = Date.now();

      this.timerInterval = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
      }, 10);
    },
    stopStopwatch() {
      this.isRunning = false;
      clearInterval(this.timerInterval);
      this.isResetButtonVisible = true;
    },
    resumeStopwatch() {
      this.isRunning = true;
      this.startTime = Date.now() - this.elapsedTime;

      this.timerInterval = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
      }, 10);
    },
    resetStopwatch() {
      this.isRunning = false;
      this.isStarted = false;
      clearInterval(this.timerInterval);
      this.elapsedTime = 0;
      this.isResetButtonVisible = false;
    },
  },
};
</script>

<style scoped>
.stopwatch-widget {
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 15px;
}

.stopwatch-widget h2 {
  color: #333;
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
}

.stopwatch-widget p {
  color: #666;
  font-size: 18px;
  margin-bottom: 10px;
}

.stopwatch-widget button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.stopwatch-widget button:hover {
  background-color: #45a049;
}

.stopwatch-widget button:disabled {
  background-color: #ccc;
  color: #999;
  cursor: not-allowed;
}
</style>
