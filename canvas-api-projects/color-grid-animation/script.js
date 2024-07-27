let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let lastTime = 0; // Time of the last update
let delay = 500; // Delay in milliseconds

function colorGridRandomly(timestamp) {
  if (timestamp - lastTime >= delay) {
    lastTime = timestamp;
    for (i = 0; i <= 200; i++) {
      for (x = 0; x <= 200; x++) {
        context.fillStyle = `rgb(${Math.random() * 255},${
          Math.random() * 255
        },${Math.random() * 255}`;
        context.fillRect(i, x, 25, 25);
        x += 24;
      }
      i += 24;
    }
  }
  requestAnimationFrame(colorGridRandomly);
}
requestAnimationFrame(colorGridRandomly);
