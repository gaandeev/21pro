var canvas;
var music;
var block1,block2,block3,block4,ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1=createSprite(200,580,360,30);
    block1.shapeColor="red";
    block2=createSprite(400,580,360,30);
    block2.shapeColor="blue";
    block3=createSprite(600,580,360,30);
    block3.shapeColor="green";
    block4=createSprite(800,580,360,30);
    block4.shapeColor="yellow";

    ball = createSprite(random(20,750),100, 40,40);
     ball.shapeColor = "rgb";
      ball.velocityX = 4; 
      ball.velocityY = 5;
}

function draw() {
    background(180);
     //create edgeSprite
  edges=createEdgeSprites();
  ball.bounceOff(edges);

  if(block1.isTouching(ball) && ball.bounceOff(block1)) {
    ball.shapeColor = "red";
    music.play(); }

  if(block2.isTouching(ball) && ball.bounceOff(block2)) {
    ball.shapeColor = "blue";
    music.play(); }

  if(block3.isTouching(ball)) {
    ball.shapeColor ="green";
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop(); }

  if(block4.isTouching(ball) && ball.bounceOff(block4)) {
    ball.shapeColor = "yellow";
    music.play(); }
   
   

      drawSprites();

}
