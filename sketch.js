// Ma'am the classes are not working. I dont know what are the problems behind them.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 350, 500, 150);
	bob1 = new Bob(100, 200, 40);
	bob2 = new Bob(200, 200, 40);
	bob3 = new Bob(300, 200, 40);
	bob4 = new Bob(400, 200, 40);
	bob5 = new Bob(500, 200, 40);
	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*2, 0);
	rope3 = new Rope(bob3.body, roof.body, -bobDiameter*2, 0);
	rope4 = new Rope(bob4.body, roof.body, -bobDiameter*2, 0);
	rope5 = new Rope(bob5.body, roof.body, -bobDiameter*2, 0);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



