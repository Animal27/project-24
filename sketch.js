
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,600,30);
	ground = new Ground(600,height,1200,20)

	rleg=createSprite(550,600,20,100);
	rleg.shapeColor="red"

	lleg=createSprite(750,600,20,100);
    lleg.shapeColor="red"

	bleg=createSprite(650,650,200,20);
	bleg.shapeColor="red"


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();


  paper1.display();
  ground.display();	
  drawSprites();	

}
function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:85});
	}

}