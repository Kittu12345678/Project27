
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(390, 350, 250, 20);
	bob1 = new Bob(300, 500, 20);
	rope1 = new Rope(bob1.body, roof.body, -45*2, 0);
	bob2 = new Bob(340, 500, 20);
	rope2 = new Rope(bob2.body, roof.body, -25*2, 0);
	bob3 = new Bob(380, 500, 20);
	rope3 = new Rope(bob3.body, roof.body, -5*2, 0);
	bob4 = new Bob(420, 500, 20);
	rope4 = new Rope(bob4.body, roof.body, 15*2, 0);
	bob5 = new Bob(460, 500, 20);
	rope5 = new Rope(bob5.body, roof.body, 35*2, 0);



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-70,y:0})
	}
}



