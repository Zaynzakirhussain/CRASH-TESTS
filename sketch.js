var car1b,car1h,car1w,car1w2,car1l;
var car2b,car2h,car2w,car2w2,car2l;
var car3b,car3h,car3w,car3w2,car3l;
var bar1,bar2,bar3;
var line,line1;

function setup() {
  createCanvas(1350,800);
  car1b = createSprite(43, 400, 55, 15);
  car1b.shapeColor = "black";
  car1h = createSprite(43, 387, 30, 12);
  car1h.shapeColor = "black";
  car1w = createSprite(57,408,10,10);
  car1w2 = createSprite(31,408,10,10);
  car1l = createSprite(67, 397, 7, 7);
  car1l.shapeColor = "yellow";

  car2b = createSprite(43, 200, 55, 15);
  car2b.shapeColor = "red";
  car2h = createSprite(43, 187, 30, 12);
  car2h.shapeColor = "black";
  car2w = createSprite(57,208,10,10);
  car2w.shapeColor = "black";
  car2w2 = createSprite(31,208,10,10);
  car2w2.shapeColor = "black";
  car2l = createSprite(67, 197, 7, 7);
  car2l.shapeColor = "yellow";

  car3b = createSprite(43, 600, 55, 15);
  car3b.shapeColor = "green";
  car3h = createSprite(43, 587, 30, 12);
  car3h.shapeColor = "black";
  car3w = createSprite(57,608,10,10);
  car3w.shapeColor = "black";
  car3w2 = createSprite(31,608,10,10);
  car3w2.shapeColor = "black";
  car3l = createSprite(67, 597, 7, 7);
  car3l.shapeColor = "yellow";

  line = createSprite(400,300,1900,7);
  line.shapeColor = "black";
  line1 = createSprite(400,500,1900,7);
  line1.shapeColor = "black";

  bar1 = createSprite(1330,200,10,80);
  bar2 = createSprite(1330,400,10,80);
  bar3 = createSprite(1330,600,10,80);
}

function draw() {
  background(255);
  
  text("CHOOSE A CAR(in your mind)",590,100);
  text("press right arrow to move",650,80);
  text("SKYLINE",200,150);
  text("CIAZ",200,350);
  text("RETRO",200,550);
  car1h.velocityX = 0; 
  car1b.velocityX = 0;
  car1w.velocityX = 0;
  car1w2.velocityX = 0;
  car1l.velocityX = 0;

  car2h.velocityX = 0; 
  car2b.velocityX = 0;
  car2w.velocityX = 0;
  car2w2.velocityX = 0;
  car2l.velocityX = 0;

  car3h.velocityX = 0; 
  car3b.velocityX = 0;
  car3w.velocityX = 0;
  car3w2.velocityX = 0;
  car3l.velocityX = 0;

  if(keyDown(RIGHT_ARROW)){
    car3b.velocityX = car3b.velocityX + 11.25;
    car3h.velocityX = car3h.velocityX + 11.25;
    car3w.velocityX = car3w.velocityX + 11.25; 
    car3w2.velocityX = car3w2.velocityX + 11.25;
    car3l.velocityX = car3l.velocityX + 11.25; 
  }

  if(keyDown(RIGHT_ARROW)){
    car2b.velocityX = car2b.velocityX + 15;
    car2h.velocityX = car2h.velocityX + 15;
    car2w.velocityX = car2w.velocityX + 15; 
    car2w2.velocityX = car2w2.velocityX + 15;
    car2l.velocityX = car2l.velocityX + 15; 
  }
  
  if(keyDown(RIGHT_ARROW)){
    car1b.velocityX = car1b.velocityX + 12.5;
    car1h.velocityX = car1h.velocityX + 12.5;
    car1w.velocityX = car1w.velocityX + 12.5; 
    car1w2.velocityX = car1w2.velocityX + 12.5;
    car1l.velocityX = car1l.velocityX + 12.5; 
  }

  if((bar2.x - car1b.x) < (bar2.width/2 + car1b.width/2)){
    text("BEST at SAFETY!!",1070,370);
    car1h.velocityX = 0; 
    car1b.velocityX = 0;
    car1w.velocityX = 0;
    car1w2.velocityX = 0;
    car1l.velocityX = 0;
    car1w2.destroy();
    car1b.shapeColor = "green";
   } 
   if((bar1.x - car2b.x) < (bar1.width/2 + car2b.width/2)){
    text("Don't think about it, its destroyed",1070,170);
    car2h.velocityX = 0; 
    car2b.velocityX = 0;
    car2w.velocityX = 0;
    car2w2.velocityX = 0;
    car2l.velocityX = 0;
    car2w2.destroy();
    car2h.destroy();
    car2b.shapeColor = "red";
  } 
  if((bar3.x - car3b.x) < (bar3.width/2 + car3b.width/2)){
    text("You can expect average safety in the car",1070,570);
    car3h.velocityX = 0; 
    car3b.velocityX = 0;
    car3w.velocityX = 0;
    car3w2.velocityX = 0;
    car3l.velocityX = 0; 
    car3w.destroy();
    car3w2.destroy();
    car3h.destroy();
    car3l.destroy();
    car3b.shapeColor = "yellow";
  } 

  drawSprites();
}
