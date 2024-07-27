let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let drawing = false;
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  context.beginPath();
  context.moveTo(e.offsetX, e.offsetY);
});
canvas.addEventListener("mousemove", (e) => {
  if (drawing == true) {
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
  }
});
canvas.addEventListener("mouseup" , (e) => {
  drawing = false;
  context.closePath();
});

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    context.strokeStyle = e.target.id;
  });
});
document.getElementById("clear").addEventListener("click", () => {
  context.clearRect(0, 0, 500, 300);
});
