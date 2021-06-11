const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;;

function preload(){
  polygonImg=loadImage("polygon.png");

}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  b1=new Box(480,275);
  b2=new Box(510,275);
  b3=new Box(540,275);
  b4=new Box(570,275);
  b5=new Box(600,275);
  b6=new Box(450,275);
  b7=new Box(630,275);
  b8=new Box(480,235);
  b9=new Box(510,235);
  b10=new Box(540,235);
  b11=new Box(570,235);
  b12=new Box(600,235);
  b13=new Box(510,195);
  b14=new Box(530,195);
  b15=new Box(560,195);
  b16=new Box(530,155);
  b17=new Box(800,100);
  b18=new Box(800,140);
  b19=new Box(830,140);
  b20=new Box(770,140);
  b21=new Box(800,180);
  b22=new Box(830,180);
  b23=new Box(860,180);
  b24=new Box(770,180);
  b25=new Box(740,180);
 
  b26=new Box(410,200);
  b27=new Box(400,200)
  b28=new Box(390,200)
  b29=new Box(380,160)
  b30 =new Box(380,160)
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(550,305,250,20);
  ground3=new Ground(800,205,250,20);
  ground4=new Ground(400,205,100,20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  sling1=new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {
  background("black"); 
  Engine.update(engine);
  fill("cyan");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("crimson");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("lime");
  b13.display();
  b14.display();
  b15.display();
  fill("teal");
  b16.display();
  fill("yellow");
  b17.display();
  fill("green");
  b18.display();
  b19.display();
  b20.display();
  fill("purple");
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  fill("charcoal")
  b26.display();
  b27.display();
  b28.display();
  fill("orchid")
  b29.display();
  sling1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);

  strokeWeight(2)
  stroke("white")
  fill(183,132,167)
  textFont("algerian")
  textSize(25)
  text ("Press Space for a Second Chance", 35,100)
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
 
}
function mouseReleased(){
  sling1.fly();
  
}

function keyPressed(){
  if(keyCode === 32){
  
   b1=new Box(480,275);
   b2=new Box(510,275);
   b3=new Box(540,275);
   b4=new Box(570,275);
   b5=new Box(600,275);
   b6=new Box(450,275);
   b7=new Box(630,275);
   b8=new Box(480,235);
   b9=new Box(510,235);
   b10=new Box(540,235);
   b11=new Box(570,235);
   b12=new Box(600,235);
   b13=new Box(510,195);
   b14=new Box(530,195);
   b15=new Box(560,195);
   b16=new Box(530,155);
   b17=new Box(800,100);
   b18=new Box(800,140);
   b19=new Box(830,140);
   b20=new Box(770,140);
   b21=new Box(800,180);
   b22=new Box(830,180);
   b23=new Box(860,180);
   b24=new Box(770,180);
   b25=new Box(740,180);
  
   b26=new Box(410,200);
   b27=new Box(400,200)
   b28=new Box(390,200)
   b29=new Box(380,160)
   b30 =new Box(380,160)

  
   sling1.attach(polygon);
   Matter.Body.setPosition(this.polygon, {x: 159, y: 200});
  }
}
