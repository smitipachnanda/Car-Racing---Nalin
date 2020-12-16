var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4,cars
var c1,c2,c3,c4
var track
var ground
var gold1
var silver2
var bronze3
var carsatend=0

function preload(){
  c1=loadImage("images/car1.png")
  c2=loadImage("images/car2.png")
  c3=loadImage("images/car3.png")
  c4=loadImage("images/car4.png")
  track=loadImage("images/track.jpg")
  ground=loadImage("images/ground.png")
  gold1=loadImage("images/gold.png")
  silver2=loadImage("images/silver2.png")
  bronze3=loadImage("images/bronze.png")
}


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4 && carsatend ===0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
 // if(gameState===2){
 //   game.end()
 // }
  if(carsatend===4){
    game.update(2)
  }
  if(gameState===2 && carsatend===4){
  game.displayranks()


  }
}
