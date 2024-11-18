function setup() {
  createCanvas(400, 400);
  frameRate(3);
}

function draw() {
  background(0, 255, 255);
  stroke(255, 255, 0);
  strokeWeight(3);
  fill(255, 255, 0);
  circle(200, 200, 150);
  translate(width / 2, height / 2);
  let position = PI / 24;
  let start = 0;
  let r1 = 75;
  let r2 = random(100, 250);
  for (let i = 0; i < 48; i++) {
    let x = r1 * cos(start);
    let y = r1 * sin(start);
    let x2 = r2 * cos(start);
    let y2 = r2 * sin(start);
    line(x, y, x2, y2);
    start += position;
  }
}
