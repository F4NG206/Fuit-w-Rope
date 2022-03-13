const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var fruit

var rope, fruitCon

let engine;
let world;
var ground;

function setup() 
{
  createCanvas(500,700);
  frameRate(20);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  var fruit_options
  fruit_options = {restitution: 0.8,density:0.5} 
  fruit = Bodies.circle(30,30,20, fruit_options)
  rope = new Rope(7,{x: 245,y: 30})
  Matter.Composite.add(rope.body,fruit);
  fruitCon = new Link(rope,fruit)
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  ellipse (fruit.position.x,fruit.position.y,30,30)
  rope.show()
   
}
