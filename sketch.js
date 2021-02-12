const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var hammer;
var stone;
var rubber;
var iron;

function setup() {
	createCanvas(1200, 500);

	engine=Engine.create();
 	world=engine.world;

	ground=new Ground(600,height,1200,20);

	hammer=new Hammer(600,300,60,60);

  stone=new Stone(700,320,70,20);
  
  rubber=new Rubber(920,240);

  iron=new Iron(500,400);

  sand1=new Sand(770,300);
  sand2=new Sand(900,440);
  sand3=new Sand(650,260);
  sand4=new Sand(920,450);
  sand5=new Sand(760,444);
  sand6=new Sand(810,390);
  sand7=new Sand(600,500);
  sand8=new Sand(500,490);
  sand9=new Sand(100,300);
  sand10=new Sand(250,378);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);

  ground.display();

  hammer.display();

  stone.display();

  rubber.display();

  iron.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  
  drawSprites();
 
}



