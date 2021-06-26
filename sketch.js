var n1,n2;
var b1,b2,b3,b4;
var r=0
var g=0
var b=0
function setup() {
  
  createCanvas(400, 400);
  
  num1 = createInput();
  num1.position(5, 60);
  
  num2 = createInput();
  num2.position(200, 60);
  
  b1 = createButton("ADD");
  b1.position(10, 200);
  b1.mousePressed(add);
  
  b3 = createButton("Multiply");
  b3.position(100, 200);
  b3.mousePressed(mul);
  b3 = createButton("subtract");
  b3.position(240,211);
  b3.mousePressed(sub);

  
  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background(r,g,b)
  text(mouseX+","+mouseY,mouseX,mouseY)
  text("Number 1",70,50)
  text("Number 2",270,50)
  n1=parseInt(num1.value())
n2=parseInt(num2.value())
}
function add(){
console.log(n1+n2)
r=255
g=0
b=0
}
function mul(){
console.log(n1*n2)
r=0
g=255
b=0
}
function sub(){
console.log(n1-n2)
r=0
g=0
b=255
}