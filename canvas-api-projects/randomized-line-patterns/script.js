let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
for (i = 0; i <= 500; i++) {
  for (x = 0; x <= 500; x++) {
    context.beginPath();
    context.moveTo(i, x);
    context.lineTo(i + 1, x + 1);
    context.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    }, ${Math.random()})`;
    context.stroke();
    context.closePath();
  }
}
