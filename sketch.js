const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, gImg;
var backgroundImg, bg;
var ice = [];
var maxSnow = 100;

function preload(){
  getBackgroundImg();
  groundImg = loadImage("sprites/sGround.png");
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  ground = createSprite(450, 370);
  ground.addImage(groundImg);

  if(frameCount%275 === 0){
    for(var i=0; i<maxSnow; i++){
      ice.push(new Snow(random))
    }
  }
  //createSprite(400, 200, 50, 50);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
  for(var i=0; i<maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
  }
  ground.display();
  drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var rjson = await response.json();
  var date = rjson.datetime;
  var hour = date.slice(11, 13);
  console.log(hour);
  if(hour>=06 && hour<=17){
    bg = "sprites/snow1.jpg";
  }else{
    bg = "sprites/snow2.jpg";
  }
  backgroundImg = loadImage(bg);
}