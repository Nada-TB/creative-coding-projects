let canvas = document.querySelector("canvas");
let colorPicker = canvas.getContext("2d");
let gradientColor = colorPicker.createLinearGradient(0, 0, 200, 0);
gradientColor.addColorStop(0, "rgb(255,0,0)");
gradientColor.addColorStop(0.5, "rgb(0,255,0)");
gradientColor.addColorStop(1, "rgb(0,0,255)");
colorPicker.fillStyle = gradientColor;
let rectangle = colorPicker.fillRect(0, 0, 200, 100);

canvas.addEventListener("click", (e) => {
  let imgData = colorPicker.getImageData(e.offsetX, e.offsetY, 1, 1);
  document.querySelector("h1").style.color = `rgb(${imgData.data})`;
});
