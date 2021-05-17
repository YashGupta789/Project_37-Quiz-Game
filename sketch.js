var canvas, backgroundImage;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var question, contestant, quiz;
var bg,apple,appleImage;

function preload(){
  bg = loadImage("bg.jpg");
  appleImage = loadImage("apple.png");
}

function setup(){
  canvas = createCanvas(950,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  apple = createSprite(720,230,20,20);
  apple.addImage(appleImage);
  apple.scale=0.3;
}


function draw(){
  background(bg);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  drawSprites();
}
