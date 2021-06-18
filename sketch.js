var spacebackground,iss,issImg,spaceCraft,spaceCraftImg1,spaceCraftImg2,spaceCraftImg3,spaceCraftImg4;
var hasDocked = false;

function preload(){
  spacebackground = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");

  spaceCraftImg1 = loadAnimation("spacecraft1.png");
  spaceCraftImg2 = loadAnimation("spacecraft3.png");
  spaceCraftImg3 = loadAnimation("spacecraft4.png");
  spaceCraftImg4 = loadAnimation("spacecraft2.png");

}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.75;

  spaceCraft = createSprite(400,350,50,50);
  spaceCraft.addAnimation("space1",spaceCraftImg1);
  spaceCraft.addAnimation("space2",spaceCraftImg2);
  spaceCraft.addAnimation("space3",spaceCraftImg3);
  spaceCraft.addAnimation("space4",spaceCraftImg4);

  spaceCraft.scale = 0.2;
}

function draw() {
  background(spacebackground);  

  if(!hasDocked){
    spaceCraft.x = Math.round(random(340,350));

    if(keyCode === LEFT_ARROW){
      spaceCraft.changeAnimation("space2",spaceCraftImg2);
      spaceCraft.x = spaceCraft.x-20;
    }

    if(keyCode === RIGHT_ARROW){
      spaceCraft.changeAnimation("space3",spaceCraftImg3);
      spaceCraft.x = spaceCraft.x+20;
    }

    if(keyDown(UP_ARROW)){
      spaceCraft.changeAnimation("space4",spaceCraftImg4);
      spaceCraft.y = spaceCraft.y-20;
    }

    if(keyCode === DOWN_ARROW){
      spaceCraft.changeAnimation("space4",spaceCraftImg4);
      //spaceCraft.y = spaceCraft.y-20;
    }

    if(spaceCraft.y <= 300){
      hasDocked = true;
    }
  }

  drawSprites();
  if(hasDocked === true){
    textSize(40)
    fill("green");
    text("Docking Successfull!",200,200)
  }
}