const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(500,360,20,30);
  box2 = new Box(520,360,20,30);
  box3 = new Box(540,360,20,30);
  box4 = new Box(560,360,20,30);
  box5 = new Box(580,360,20,30);
  box6 = new Box(600,360,20,30);

  box7 = new Box(510,330,20,30);
  box8 = new Box(530,330,20,30);
  box9 = new Box(550,330,20,30);
  box10 = new Box(570,330,20,30);
  box11 = new Box(590,330,20,30);

  box12 = new Box(520,310,20,30);
  box13 = new Box(540,310,20,30);
  box14 = new Box(560,310,20,30);
  box15 = new Box(580,310,20,30);

  box16 = new Box(530,280,20,30);
  box17 = new Box(550,280,20,30);
  box18 = new Box(570,280,20,30);

  box22 = new Box(500,135,20,30);
  box23 = new Box(520,135,20,30);
  box24 = new Box(540,135,20,30);
  box25 = new Box(560,135,20,30);
  box26 = new Box(580,135,20,30);
  box27 = new Box(600,135,20,30);

  box28 = new Box(510,105,20,30);
  box29 = new Box(530,105,20,30);
  box30 = new Box(550,105,20,30);
  box31 = new Box(570,105,20,30);
  box32 = new Box(590,105,20,30);

  box33 = new Box(520,75,20,30);
  box34 = new Box(540,75,20,30);
  box35 = new Box(560,75,20,30);
  box36 = new Box(580,75,20,30);
  
  box37 = new Box(530,45,20,30);
  box38 = new Box(550,45,20,30);
  box39 = new Box(570,45,20,30);

  ball = new Polygon(0,0,50);

  spring = new Slingshot(ball.body,{x:200,y:200});

  ground = new Ground(400,390,800,20);

  platform = new Ground(550,160,200,20);
 
 Engine.run(engine);
}

function draw() {
  background(200); 

  fill ("black");
  text ("Something went, terrbily wrong and I can't figure out what",400,200);
  
  Engine.update(engine);

  ball.debug = true;

  box1.display();
  fill("grey");
  box2.display();
  fill("grey");
  box3.display();
  fill("grey");
  box4.display();
  fill("grey");
  box5.display();
  fill("grey");
  box6.display();
  fill("grey");

  box7.display();
  fill("grey");
  box8.display();
  fill("grey");
  box9.display();
  fill("grey");
  box10.display();
  fill("grey");
  box11.display();
  fill("grey");

  box12.display();
  fill("grey");
  box13.display();
  fill("grey");
  box14.display();
  fill("grey");
  box15.display();
  fill("grey");

  box16.display();
  fill("grey");
  box17.display();
  fill("grey");
  box18.display();
  fill("grey");

  box22.display();
  fill("grey");
  box23.display();
  fill("grey");
  box24.display();
  fill("grey");
  box25.display();
  fill("grey");
  box26.display();
  fill("grey");
  box27.display();
  fill("grey");

  box28.display();
  fill("grey");
  box29.display();
  fill("grey");
  box30.display();
  fill("grey");
  box31.display();
  fill("grey");
  box32.display();
  fill("grey");

  box33.display();
  fill("grey");
  box34.display();
  fill("grey");
  box35.display();
  fill("grey");
  box36.display();
  fill("grey");

  box37.display();
  fill("grey");
  box38.display();
  fill("grey");
  box39.display();
  fill("grey");

  ball.display(); 
  fill(6,255,1);
 
  spring.display();
  fill(6,255,1);


  ground.display();
  fill(6,255,1);
  platform.display();
  fill(6,255,1);

 // drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}


function keyPressed(){
  if(keyCode === 32){
      sling.attach(polygon.body);
  }
}