const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var background;
var cr;
var engine;
var world;
var snow = [];


function preload(){
bg = loadImage("snow2.jpg");
crImg = loadImage("snowman.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cr = createSprite(400, 200, 50, 50);
  cr.addImage(crImg);
  cr.scale = 0.08; 

  engine = Engine.create();
  world = engine.world 

 // snow = new Snow(100, 100, 10);

}

function draw() {
  background(bg); 

  Engine.update(engine);

  cr.x = mouseX 
  cr.y = mouseY 

  if(frameCount%1 == 0){
    snow.push(new Snow(random(width/2 - 1000, width/2 + 1000), 10, 10));
  }
  for(var j = 0; j < snow.length; j++){
    snow[j].display();
  }
  
  drawSprites();
}