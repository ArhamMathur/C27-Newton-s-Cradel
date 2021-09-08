const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Defining variables
var engine, world;
var bob1, roof;
var rope1;
var bobDiameter = 70;

//Setting function setup to create a body in funtion 
function setup() 
{
	//Creating canvas
	createCanvas(1200, 1100);

	//Creating engine and world
	engine = Engine.create();
	world = engine.world;

	//Creating roof
	roof = new Roof(450, 150, 400, 20, {isStatic : true});

	//Creating bobs and attaching rope from bob and roof
	bob1 = new Bob(410, 450, 30);
	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*1.7, 0);
	bob2 = new Bob(430, 450, 30);
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*0.8, 0);
	bob3 = new Bob(450, 450, 30);
	rope3 = new Rope(bob3.body, roof.body, bobDiameter*0, 0);
	bob4 = new Bob(470, 450, 30);
	rope4 = new Rope(bob4.body, roof.body, bobDiameter*0.8, 0);
	bob5 = new Bob(490, 450, 30);
	rope5 = new Rope(bob5.body, roof.body, bobDiameter*1.7, 0);

	//Making engine run
	Engine.run(engine);
  
}

//Setting funtion draw to call the funtion
function draw() 
{
	//Setting rectMode to center and giving colour to the background
	rectMode(CENTER);
	background(5000, 5000, 200);
  
	//Making roof display on the canvas
	roof.display();

	//making bobs and ropes display on the canvas			
	bob1.display();
	rope1.display();
	bob2.display();
	rope2.display();
	bob3.display();
	rope3.display();
	bob4.display();
	rope4.display();
	bob5.display();
	rope5.display();

	//Setting the function drawSprites
	drawSprites();
 
}

//Setting function for Up arrow key
function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-500,y:-500})
	}
}