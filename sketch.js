var tom,jerry;
function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}
function setup(){
tom = createSprite(300,300,50,50);
tom.addAnimation("standing",tomImg1);
tom.scale = 0.1;

tom.setCollider("rectangle",0,0,30,tom.height);
jerry = createSprite(50,300,50,50);
jerry.addAnimation("standing",jerryImg1);
jerry.scale = 0.07;

}
function draw() {
    background(bg);
    
    if (tom.collide(jerry)){
        tom.addAnimation("teasing",tomImg3);
        tom.changeAnimation("teasing");
        jerry.addAnimation("teasing",jerryImg3);
        jerry.changeAnimation("teasing");
    }
    drawSprites();
}
function keyPressed(){
    if (keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("moving",tomImg2);
        tom.changeAnimation("moving");
        jerry.addAnimation("moving",jerryImg2);
        jerry.changeAnimation("moving");
    }
}