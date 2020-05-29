var car1,splitter,deformater,deformation;


function setup() {
  
  createCanvas(900,104);
   
  deformation = 0;
  car1 = createSprite(50,50,20,20);
  car1.shapeColor = "white";
  car1.velocityX = 3;
 
  deformater = createSprite(870,100,20,1200);

  splitter = createSprite(50,100,6000,5);
  splitter.shapeColor = "blue";
  
 
}


function draw() {
 
   
  if(car1.collide(deformater)){
    car1.velocityX = 0;
    car1.shapeColor = 'green';
  }
   /* if(deformation<100){
      car1.shapeColor = "green";
    }
    if(deformation>100 && deformation<180){
      car1.shapeColor = "yellow";
    }
    if(deformation>180){
      car1.shapeColor = "red";
    }
   }
 */
  background("black");  
  drawSprites();
}