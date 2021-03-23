var soldireimg,backgroundimg;



var zombiegroup;
var zombieL;
   var zombieR;
   var zombieD;
   var zombieU;
   
   function preload(){
     soldireimg = loadImage("soldire 10.png");
     /*soldire2 = loadImage("soldire up r.png");
     soldire3 = loadImage("soldire down r.png");
     soldire4 = loadImage("soldire up l.png");
     soldire5 = loadImage("soldire down l.png");*/


     backgroundimg= loadImage("green wall.jpg")
   }

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-20);

    soldire = createSprite(displayWidth/2,displayHeight/2,10,10);
    soldire.addImage(soldireimg);
    soldire.scale=0.5;

    fountain1= createSprite(30,30,20,20);
    fountain2= createSprite(displayWidth-30,30,20,20);
    fountain3= createSprite(30,displayHeight-30,20,20);
  fountain4= createSprite(displayWidth-30,displayHeight-30,20,20);


   // zombiegroup=createGroup();
    zombieL=createGroup();
   zombieR=createGroup();
  // zombieD=createGroup();
  // zombieU=createGroup();
  
  
   
}

function draw(){
    background(backgroundimg);

    var bulletgroup=createGroup();

  
    var rand=Math.round(random(1,4));
if (World.frameCount%20===0) {
  if(rand===1){
    ZombieLeft();
  }
    else if(rand===2){
    ZombieRight();
    }
   
   // else if(rand===3){
   //   ZombieDown();
    //}
    //else
   // ZombieUp();
  }
  
  
    if(keyDown("space") ){
        bullet1();
    }

  
    
    if(keyDown(LEFT_ARROW)){
        changePosition(-2,0);

    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(2,0);
        
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-2);
        
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+2);
    }

  

    
   /* zombie.display();
    zombie2.display();
    zombie3.display();
    zombie4.display();
    zombie5.display();
    zombie6.display();
    zombie7.display();
    zombie8.display();
    zombie9.display();
    zombie10.display();*/
    

    


function changePosition(x,y){
    soldire.x = soldire.x + x;
    soldire.y = soldire.y + y;
  }

  function ZombieRight(){
      
          var Zombie = new zombie(displayWidth,Math.round(random(50,displayHeight-50)));
          Zombie.display();
          
      
      
  }

  function ZombieLeft(){
     
          var Zombie = new zombieRight(0,Math.round(random(50,displayHeight-50)));
         Zombie.display();
         console.log(zombieL);
        
          
      }
  

  /*function ZombieUp(){
   
        var Zombie = new zombieUp(Math.round(random(50,displayWidth-50)),0);
        Zombie.display();
       
  
  }


  function ZombieDown(){
   
        var Zombie = new zombieDown(Math.round(random(50,displayWidth-50)),displayHeight);
        Zombie.display();
       
    
  
  }*/



  function bullet1(){
      var bullet = createSprite (displayWidth/2,displayHeight/2,10,10);
      bullet.y=soldire.y;
      bullet.x=soldire.x;
      if(keyDown("UP_ARROW"))
      bullet.velocityY = -4;
      

     else if(keyDown("DOWN_ARROW"))
      bullet.velocityY= 4;


      else if(keyDown("LEFT_ARROW"))
      bullet.velocityX= -4;


      else if(keyDown("RIGHT_ARROW"))
      bullet.velocityX= +4;
      
      
      bullet.lifetime=160;

      bulletgroup.add(bullet);

     
  }
  console.log(bulletgroup);
  if(bulletgroup.collide(zombieL)){
    zombieL.destroyEach();
    bulletgroup.destroyEach();
    console.log("touched");
}
 
drawSprites();
}