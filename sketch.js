var bow ,bowImage; 

var balloonP,balloonR,balloonG,balloonB,pinkBalloon,redBalloon,greenBalloon,blueBalloon;

var redsgroup,bluesGroup,greenGroup,pinkGroup;

var background,backgroundImage;

var  arrowImage,arrow;

var rand;

var score;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  redBalloon = loadImage("red_balloon0.png");
  greenBalloon = loadImage("green_balloon0.png");
  pinkBalloon = loadImage("pink_balloon0.png");
  blueBalloon = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 500);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,300,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0;
 
  pinksGroup = new Group();
  redsGroup = new Group();
  greensGroup = new Group();
  bluesGroup = new Group();  
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY 
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  spawnballoonPink();
  spawnballoonRed();
  spawnballoonBlue();
  spawnballoonGreen();
 
  drawSprites();
  
  text("Score: "+ score, 500,50);
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}

function spawnballoonRed(){

  if(frameCount % 60 === 0){
     balloonR = createSprite(0,160,30,35);
    balloonR.addImage(redBalloon);
    balloonR.velocityX = 4;
    balloonR.scale = 0.115;
    balloonR.y = Math.round(random(100,450))
    balloonR.lifetime = 150;   
    redsGroup.add(balloonR);
}
}

function spawnballoonPink() {
  //write code here to spawn the clouds
  if(frameCount % 107 === 0){
     balloonP = createSprite(0,160,30,35);
    balloonP.addImage(pinkBalloon);
    balloonP.velocityX = 4;
    balloonP.scale = 1.5;
    balloonP.y = Math.round(random(100,450))
    balloonP.lifetime = 150;   
    pinksGroup.add(balloonP);
  }
}

function spawnballoonGreen() {
  //write code here to spawn the clouds
  if(frameCount % 179 === 0){
     balloonG = createSprite(0,160,30,35);
    balloonG.addImage(greenBalloon);
    balloonG.velocityX = 4;
    balloonG.scale = 0.115;
    balloonG.y = Math.round(random(100,450))
    balloonG.lifetime = 150; 
    greensGroup.add(balloonG);
  }
}

function spawnballoonBlue() {
  //write code here to spawn the clouds
  if(frameCount % 223 === 0){
     balloonB = createSprite(0,160,30,35);
    balloonB.addImage(blueBalloon);
    balloonB.velocityX = 4;
    balloonB.scale = 0.115;
    balloonB.y = Math.round(random(100,450))
    balloonB.lifetime = 150; 
    bluesGroup.add(balloonB);
  }
}