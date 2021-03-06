const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var mainground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var polygon,polygonImage;
var sling;
           
function preload(){

   polygonImage = loadImage("polygon.png")

}
function setup(){


    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

   ground1 = new GROUND(900,450,180,10);
   ground2 = new GROUND(500,600,250,15);
   mainground = new GROUND(600,680,1200,10)
//right sided temple
//layer1
   box1 = new Box(900,420,50,60);
   box2 = new Box(930,420,50,60);
   box3 = new Box(870,420,50,60);
//layer2
   box4 = new Box(915,390,50,60);
   box5 = new Box(885,390,50,60);
//layer3
   box6 = new Box(900,360,50,60);
//left sided temple
//layer1
   box7 = new Box(500,570,60,70);
   box8 = new Box(530,570,60,70);
   box9 = new Box(470,570,60,70);
//layer2
   box10 = new Box(515,540,60,70);
   box11 = new Box(485,540,60,70);
// layer3
   box12 = new Box(500,410,60,70)

   var options = {
      isStatic: false,
      'restitution':0.3,
      'friction':2.0,
      'density':4.0
   }


   polygon = Bodies.circle(50,200,20,options);
   World.add(world,polygon);

   sling = new SlingSHot(this.polygon,{x:200,y:300})

}

function draw(){
background("purple")
Engine.update(engine)

ground1.display();
ground2.display();
mainground.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

sling.display();

imageMode(CENTER);
image(polygonImage,polygon.position.x,polygon.position.y,70,70);

}

function mouseDragged(){
   Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   sling.fly();
}
function keyPressed(){
   if(keyCode === 32){
       sling.attach(polygon)
   }
}
   
   