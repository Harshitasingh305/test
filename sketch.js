
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ground,bas1,bas2,bas3;


function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
   ball1=new Ball(60,610,20)
   ground=new Ground(0,660,800,10)
   bas1=new Basket(580,600,30,115)
    bas2=new Basket(650,641,115,30)
     bas3=new Basket(720,600,30,115)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display()
  ground.display()
  bas1.display()
  bas2.display()
  bas3.display()
  keyPressed()
  drawSprites();
 
}



function keyPressed(){
if(keyDown===UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})



}



}