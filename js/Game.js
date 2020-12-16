class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200)
    car1.addImage("car1",c1)
    car2=createSprite(300,200)
    car2.addImage("car2",c2)
    car3=createSprite(500,200)
    car3.addImage("car3",c3)
    car4=createSprite(700,200)
    car4.addImage("car4",c4)
    cars=[car1,car2,car3,car4]
    
  }

  play(){
    form.hideForm();
    //textSize(30);
   // text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.getcarsatend()

    if(allPlayers !== undefined){
      background(ground)
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
      var index=0
      var x=170
      var y
      
      //var display_position = 130;
      for(var plr in allPlayers){
        index=index+1
        x=x+200
        y=displayHeight-allPlayers[plr].distance
        cars[index-1].x=x
        cars[index-1].y=y
        if (index===player.index){
          stroke(10)
          fill("red")
          ellipse(x,y,60,60)
        cars[index-1].shapeColor="red"
        camera.position.x=displayWidth/2
        camera.position.y=cars[index-1].y
        }

        //textAllign(CENTER)
       // textSize(20)
        //text(allPlayers[plr].name,cars[index-1].x-20,cars[index-1].y+75)

       // display_position+=20;
        //textSize(15);
       // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=100
      player.update();
    }
    if(player.distance>3500){
      gameState=2
      player.rank = carsatend;
      player.update()
      Player.updatecarsatend()
    }
    drawSprites()
  }
  end(){
    console.log("game ended")
    console.log(player.rank)
  }

  displayranks(){
    background("lightblue")
    camera.position.x=0
    camera.position.y=0

    Player.getPlayerInfo()
    imageMode(CENTER)


    image(bronze3,displayWidth/-4,displayHeight/9-100,200,240)
    image(silver2,displayWidth/4,displayHeight/10-100,225,270)
    image(gold1,0,-100,250,300)
    textSize(50);
    fill("black")
    for(var plr in allPlayers){
    /*  if(player.rank === 1){
        text("1st :  "+allPlayers[plr].name,displayWidth/2,0 + 85);
      }
      else if(player.rank === 2){
        text("2nd: " + allPlayers[plr].name, displayWidth/4, displayHeight/9 + 73);
      }else*/ if(player.rank === 3){
        text("3rd: " + allPlayers[plr].name, displayWidth/-4, displayHeight/10 + 76);
      }

      
    }

  }
  
}
