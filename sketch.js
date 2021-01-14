var canvas;
var music;
var blueBox,orangeBox,redBox,greenBox;
var ball;
var edge;
var canvas;
var invisibleBlock1,invisibleBlock2,invisibleBlock3;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600); 

    //create 4 different surfaces
    blueBox = createSprite(100,585,198,10);
    blueBox.shapeColor="blue";
    
    orangeBox = createSprite(300,585,198,10);
    orangeBox.shapeColor="orange";

    redBox = createSprite(500,585,198,10);
    redBox.shapeColor="red";

    greenBox = createSprite(700,585,198,10);
    greenBox.shapeColor="green";

    //create box sprite and give velocity
    ball = createSprite(400,300,10,10);
    ball.shapeColor="white";
    
    invisibleBlock1 = createSprite(0,300,5,600)
    invisibleBlock1.visible=false;

    invisibleBlock2 = createSprite(800,300,5,600)
    invisibleBlock2.visible=false;

    invisibleBlock3 = createSprite(400,0,600,5)
    invisibleBlock3.visible=false;
}

function draw() {
    background(rgb(169,169,169));
    
    if(keyDown("space")){
        ball.velocityY=5;
        ball.velocityX=-4;
    }

    //create edgeSprite

    edge=createEdgeSprites();

    //add condition to check if box touching surface and make it box
    

    if(ball.y-greenBox.y<15
        && greenBox.y-ball.y<15
        && ball.x-greenBox.x<greenBox.width/2+ball.width/2
        && greenBox.x-ball.x<ball.width/2+greenBox.width/2){
        ball.shapeColor="green";
        ball.velocityY=-5;
        ball.velocityX=-3;
    }
    if(ball.y-blueBox.y<15
        && blueBox.y-ball.y<15
        && ball.x-blueBox.x<blueBox.width/2+ball.width/2
        && blueBox.x-ball.x<ball.width/2+blueBox.width/2){
        ball.shapeColor="blue";
        ball.velocityY=-5;
        ball.velocityX=-3;
    }
    if(ball.y-redBox.y<15
        && redBox.y-ball.y<15
        && ball.x-redBox.x<redBox.width/2+ball.width/2
        && redBox.x-ball.x<ball.width/2+ball.width/2){
        ball.shapeColor="red";
        ball.velocityY=-5;
        ball.velocityX=-3;
        
    }
    if(ball.y-orangeBox.y<15
        && orangeBox.y-ball.y<15
        && ball.x-orangeBox.x<orangeBox.width/2+ball.width/2
        && orangeBox.x-ball.x<ball.width/2+orangeBox.width/2){
        ball.shapeColor="orange";
        ball.velocityX=0;
        ball.velocityY=0;
    }
    if(ball.y-invisibleBlock3.y<invisibleBlock3.height/2+ball.height/2
        && invisibleBlock3.y-ball.y<ball.height/2+invisibleBlock3.height/2){
            ball.velocityY=5;
        }
    if(ball.x-invisibleBlock1.x<invisibleBlock1.width/2+ball.width/2
        && invisibleBlock1.x-ball.x<ball.width/2+invisibleBlock1.width/2){
            ball.velocityX=3;
        }
    if(ball.x-invisibleBlock2.x<invisibleBlock2.width/2+ball.width/2
        && invisibleBlock2.x-ball.x<ball.width/2+invisibleBlock2.width/2){
            ball.velocityX=-3;
        }

    drawSprites();

    fill("grey");
    textSize(50)
    text("press Space",100,100)
}
