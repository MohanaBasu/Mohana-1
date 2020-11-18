function setup() {
  createCanvas(800,400);
 recta =  createSprite(400, 200, 50, 50);
 recta.shapecolor = "pink"
 rectb = createSprite(600,350,50,50);
 rectb.shapecolor = "pink";

 
}

function draw() {
  background(255,255,255); 
  
  if(rectb.x - recta.x<recta.width/2+rectb.width/2 &&
    recta.x - rectb.x<recta.width/2+rectb.width/2 &&
    
    rectb.y - recta.y<recta.height/2+rectb.height/2 &&
    recta.y - rectb.y<recta.height/2+rectb.height/2){

      recta.shapecolor = "red";
      rectb.shapecolor = "red";
    }
    else{ recta.shapecolor = "pink";
  rectb.shapecolor = "pink"}
  rectb.x = World.mouseX;
  rectb.y = World.mouseY;
  drawSprites();
}