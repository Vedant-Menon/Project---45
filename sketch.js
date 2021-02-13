
var bg,bgimg,start,startimg
var gameState=0
function preload(){
bgimg=loadImage("images/bg1.jpg")
startimg = loadImage("images/text0.png")

}



function setup() {
  createCanvas(800,400);
  bg=createSprite(200, 200,300,250);
  bg.addImage(bgimg)
  bg.scale=0.5

  start=createSprite(300,200,50,50)
  //start.addImage(startimg)
  start.scale=0.5
}

function draw() {
 // background(255,255,255); 

 
 if(gameState==1){
  bg.visible = false;
  start.visible = false;
}
 
 if(mousePressedOver(start)&&gameState===0){

 reset()
  }


  drawSprites();
  

  if(gameState===0){
    bg.visible=true
    start.visible = true;
    textSize(15)
  textStyle(BOLDITALIC)
  textFont("Algerian")
  fill("black")
  text("OBSTACLES COURSE RACE",200,100)

  }

  
 

}
function reset(){

 gameState=1



}
