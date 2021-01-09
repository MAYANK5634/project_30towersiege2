const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var engine,world;
var ball;
var spring;
var ground;
var groudhovering;
var polygonimg;

function preload(){
polygonimg = loadImage("polygon.png");
}

function setup (){
createCanvas(1200,500);

engine = Engine.create();
world = engine.world;

box1 = new BLUEBOX (1000,390,20,30);
box2 = new BLUEBOX (980,390,20,30);
box3 = new BLUEBOX (960,390,20,30);
box4 = new BLUEBOX (940,390,20,30);
box5 = new BLUEBOX (920,390,20,30);
box6 = new BLUEBOX (900,390,20,30);
box7 = new BLUEBOX (880,390,20,30);

box8 = new PINKBOX (980,360,20,30);
box9 = new PINKBOX (960,360,20,30);
box10 = new PINKBOX (940,360,20,30);
box11 = new PINKBOX (920,360,20,30);
box12 = new PINKBOX (900,360,20,30);

box13 = new REDBOX (960,330,50,50);
box14 = new REDBOX (940,330,50,50);
box15 = new REDBOX (920,330,50,50);

box16 = new YELLOWBOX (940,300,20,30);

ball = Bodies.circle(700,200,20);
World.add(world,ball)

spring = new PROJECTILE (this.ball,{x:400,y:200});

ground = new PLATFORM (0,495,5000,20);

groundhovering = new PLATFORM (940,415,200,20);

}
 function draw (){
 background("orange");
 Engine.update(engine);
 ground.display();
 groundhovering.display();

 
 debug:true;
  fill ("red");
  box1.display();  
  box2.display();  
  box3.display();
  box4.display();  
  box5.display();  
  box6.display();  
  box6.display();
  box7.display(); 
  fill ("blue");
  box8.display();  
  box9.display();  
  box10.display();
  box11.display();  
  box12.display();  
  fill ("green");
  box13.display();  
  box14.display();  
  box15.display();  
 fill ("pink");
  box16.display();  

  imageMode(CENTER);
  image(polygonimg,ball.position.x,ball.position.y,40,40);


  spring.display();
}

function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased (){
spring.release();

}
function keyPressed(){
if(keyCode === SPACE){
spring.attach(ball.body);

}


}