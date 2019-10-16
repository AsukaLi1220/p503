var circle = 300;
var rot;
var col;
var cont = 0;
var r;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  translate(500, 500);

 ellipseMode(RADIUS);
  for (var i=0; i<500; i ++) {
    circle= 200 + 80*sin(millis()*0.000005*i);
    col=map(circle,10,250,255,60);
    r=map(circle,10,250,50,2);
    fill(random(120,235),random(120,235),random(200,225));
    noStroke();
    ellipse(circle*cos(i), circle*sin(i),r*mouseX/500,r*mouseX/500);    
  
  }
}