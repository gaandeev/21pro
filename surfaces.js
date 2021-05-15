var surface1,surface2,surface3,surface4;



function setup() {
surface1 = createSprite(200,300,30,10);
surface1.shapeColor("red");
surface2 = createSprite(200,350,20,30);
surface2.shapeCloor("orange");
surface3 = createSprite(200,300,30,30);
surface3.shapeColor("blue");
surface4 = createSprite(200,200,20,20);
surface4.shapeColor("green");

}



function draw(){
    if (surface1.isTouching(box) && box.bounceOff (surface1));{
    music.playSound();
    }


if (surface2.isTouching(box)){
    ball.shapeColor=rbg(255,128,0);
    ball.velocityX = 0;
    music.stop();
    music.playSound();
}

if (surface3.isTouching(box) && box.bounceOff (surface3));{
music.playSound();
}

if (surface4.isTouching(box) && box.bounceOff (surface4));{
music.playSound();
}

 drawSprites();
}

