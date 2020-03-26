class Timer {
  constructor(duration, startButton, pauseButton, callbacks) {
    this.duration = duration;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onPause = callbacks.onPause;
      this.onTick = callbacks.onTick;
    }
    this.startButton.addEventListener("click", this.start);
  }

  start = () => {
    this.onStart(this.timeRemaining);
    this.time = setInterval(this.Tick, 50);
  };

  Tick = () => {
    this.onTick(this.timeRemaining);

    this.timeRemaining = this.timeRemaining - 0.05;
    if (parseFloat(this.duration.value) <= 0) {
      this.pause();
    }
  };

  get timeRemaining() {
    return this.duration.value;
  }

  set timeRemaining(x) {
    this.duration.value = x.toFixed(2);
  }

  pause = () => {
    this.onPause();
    clearInterval(this.time);
  };
}
