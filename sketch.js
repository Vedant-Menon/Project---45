
var bg,bgimg,start,startimg
var gameState=0
var boy, playerimg,ground,groundimg,mainimg,mainbg;
function preload(){
bgimg=loadImage("images/bg1.jpg")
startimg = loadImage("images/text0.png")
playicon=loadAnimation("images/frame0.gif","images/frame1.gif","images/frame2.gif","images/frame3.gif")
playerimg=loadAnimation("images/r1.png","images/r2.png","images/r3.png","images/r4.png","images/r5.png","images/r6.png","images/r7.png","images/r8.png")
mainimg=loadImage("images/bg.png")
groundimg = loadImage("images/race.png")
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
}

function draw() {
  background(255,255,255); 
 
  
  if(gameState===1){
   bg.visible=false;
   start.visible=false;
   play.visible=false;
  
   
   if(keyDown("space")&&gameState===1){
     gameState=2
   }

 }

 if(gameState===2){
   createCanvas(600,200)
   mainbg = createSprite(300,130,600,200)
 
   
   boy=createSprite(50,160,20,50)
   boy.addAnimation("running",playerimg)
   mainbg.addImage(mainimg)
   mainbg.scale = 0.7;
   boy.scale=0.2
      
   ground = createSprite(200,300,400,20);
  ground.addImage(groundimg);
  ground.velocityX = -4;
  ground.x = ground.width /2;

  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false
 
  if (ground.x < 0){
    ground.x = ground.width/2;

  };
  boy.collide(invisibleGround)
 }
 
 
   if(mousePressedOver(play)&&gameState===0){
     gameState=1
   
      }
 
  
 
   drawSprites();
   
 
   if(gameState===0){
     bg.visible=true
     start.visible =true;
     play.visible=true;
     textSize(15)
   textStyle(BOLDITALIC)
   textFont("Algerian")
   fill("black")
   text("OBSTACLES COURSE RACE",200,100)

 
   }
 
   
  
 
 }
 
