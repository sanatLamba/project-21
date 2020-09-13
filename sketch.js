var bullet,wall;
var thickness,speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(800,200,50,50);
  bullet.debug = true;
  wall = createSprite(1800,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  bullet.velocityX = speed;
  weight = random(400,1500);
  thickness.random(30,52);
}

function draw() {
  background(255,255,255);
  
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2) {
    bullet.velocityX = 0;
    
    deformation = 0.5 * weight * speed * speed/22509;
    if(deformation > 180) {
      bullet.shapeColor = color(255,0,0);
    }
    if(deformation < 180  && deformation>100) {
      bullet.shapeColor = color(230,230,0);
    }
   if(deformation < 100) {
    bullet.shapeColor = color(0,255,0);
  }
}

if(hasCollided(bullet,wall)) {
  bullet.velocityX = 0;

  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10) {
    wall.shapeColor = color(255,0,0);
  }
  
  if(damage<10) {
    wall.shapeColor = color(0,255,0);
  }
}
  drawSprites();
}

function hasCollided(bullet,wall) {

bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge>=wallLeftEdge) {
  return true;
}
  return false;
}