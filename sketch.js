function setup() {
  createCanvas(800, 500);
  background("#1E2CE9");
}

function draw() {
  
  fill ("#03A9F4");
  stroke ("lightblue");
  if (mouseIsPressed)
  rect(mouseX,mouseY,60,100);
  
}