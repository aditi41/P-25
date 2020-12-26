const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, paper ,ground;
var world;


function setup() {
	createCanvas(1200, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin=new Dustbin(1050,450);
	paper=new Paper(50,450,40);
	ground=new Ground(width/2,470,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
 
  paper.display();
  dustbin.display();
  ground.display();
  keyPressed();
}

function keyPressed() {
  	if (keyDown("UP_ARROW")) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:24,y:-24});
    
  	}
}