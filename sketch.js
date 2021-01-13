var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var loobyimg;
var sound1;
var ai;
var lo;
var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img,Desert,iceage,Nobita;

function preload(){
  track = loadImage("images/track.jpg");
  car2_img = loadImage("images/car1.png")
  Desert = loadImage("images/BG 6.jpg");
  iceage = loadImage("images/BG 4.jpg");
  Nobita = loadImage("images/Nobita.png");
  loobyimg = loadImage("images/BG 8.jpg");
  ai = loadImage("images/AI.png");
  startimg = loadImage("images/BG 12.png");
  sound1= loadSound("images/Doraemon Piano Song.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    
  }
  if(gameState === 2){
    game.playWithAI();
  }
  if(gameState === 3){
    //end
  }
}
