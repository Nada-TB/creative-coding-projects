function setup() {
    let img=createCanvas(300, 300);
    //saveFrames(img, "image", 2,22);
    background(255, 255, 0);
    fill(225);
    
  }
  
  function draw() {
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        circle(x, y, 10);
        y+=10;
      }
      x += 10;
    }
  }
  