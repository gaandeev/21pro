var ball;

function setup(){
    ball = createSprite(10,10,10,10);
    ball.shapeColor("black");
    ball.velocityX=4;
    ball.velocityY=4;
}



function draw(){
    drawSprites();
}