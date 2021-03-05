
var bg,bgimg,start,startimg
var gameState=0
var boy, playerimg,ground,groundimg,mainimg,mainbg;
var obstacle1;

function preload(){
bgimg=loadImage("images/bg1.jpg")
startimg = loadImage("images/text0.png")
playicon=loadAnimation("images/frame0.gif","images/frame1.gif","images/frame2.gif","images/frame3.gif")
playerimg=loadAnimation("images/r1.png","images/r2.png","images/r3.png","images/r4.png","images/r5.png","images/r6.png","images/r7.png","images/r8.png")
mainimg=loadImage("images/bg.png")
groundimg = loadImage("images/race.png")
obstacle1 = loadImage("images/h1.png")
}



function setup() {
  createCanvas(800,400);
  bg=createSprite(200, 200,300,250);
  bg.addImage(bgimg)
  bg.scale=0.5

  start=createSprite(300,200,50,50)
  start.addImage(startimg)
  start.scale=0.5

  play=createSprite(250,300,10,10)
  play.addAnimation("playing",playicon)
  play.scale=0.1

  boy=createSprite(50,192,20,50)
  boy.addAnimation("playing",playerimg)
  boy.scale=0.2
  mainbg = createSprite(300,130,600,200)
  mainbg.addImage(mainimg)
  mainbg.scale = 0.7;
 // mainbg.velocityX=-3;
  boy.scale=0.2
     
  ground = createSprite(200,310,400,20);
 ground.addImage(groundimg);
 ground.velocityX = -4;
 ground.x = ground.width /2;
 boy.depth=mainbg.depth
 boy.depth=boy.depth+1
 
 invisibleGround = createSprite(200,220,400,10);
 invisibleGround.visible = false
}

function draw() {
  background(255,255,255); 
 
  
  if(gameState===1){
   bg.visible=false;
   start.visible=false;
   play.visible=false;
   mainbg.visible=false;
  ground.visible = false;
   boy.visible = false;
   if(keyDown("space")&&gameState===1){
     gameState=2
   }

 }

 if(gameState===2){
   createCanvas(600,200)
   mainbg.visible=true
  ground.visible=true
  boy.visible=true
   
  if(keyDown("up")){
    boy.velocityY=-10
  }
 boy.velocityY=boy.velocityY+0.5
  if (ground.x < 0){
    ground.x = ground.width/2;

  };

  boy.collide(invisibleGround)
  spawnObstacles()
 }
 
 
   if(mousePressedOver(play)&&gameState===0){
     gameState=1
   
      }
 
  
 
   drawSprites();
   
 
   if(gameState===0){
     bg.visible=true
     start.visible =true;
     play.visible=true;
     mainbg.visible=false;
  ground.visible = false;
   boy.visible = false;
     textSize(15)
   textStyle(BOLDITALIC)
   textFont("Algerian")
   fill("black")
   text("OBSTACLES COURSE RACE",200,100)

 
   }
 
   
  
 
 }
 function spawnObstacles(){
   if(frameCount%50===0){
     var obstacle = createSprite(600,170,10,40)
     obstacle.velocityX = -6;
   }
 }
