const duration = document.querySelector("#time");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("#circle");
const radius = circle.getAttribute("r");
const perimeter = 2 * Math.PI * radius;
let offset = circle.getAttribute("stroke-dashoffset");
circle.setAttribute("stroke-dasharray", perimeter);
let time;
const timer = new Timer(duration, startButton, pauseButton, {
  onStart(timeRemaining) {
    time = timeRemaining;
  },
  onPause() {
    console.log("Paused");
  },
  onTick() {
    offset = offset - perimeter / (time * 20);

    circle.setAttribute("stroke-dashoffset", offset);
  }
});
