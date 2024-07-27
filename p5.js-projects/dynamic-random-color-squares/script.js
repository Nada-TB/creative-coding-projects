function setup() {
    let img=createCanvas(200, 200);
    background(255, 255, 255);
    frameRate(200);
    //save(img, 'myImage.png');
  }
  
  function draw() {
    var x = random(0, width);
    var y = random(0, height);
    fill(random(0,255), random(0,255), random(0,255));
    rect(x, y,20,20);
    //text(frameCount, x, y);
    if (frameCount === 1000) {
      noLoop();
    }
  }
  