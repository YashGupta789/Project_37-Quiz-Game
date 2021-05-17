class Quiz {
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background(255, 243, 0);

    fill("black")
    textSize(40);
    text("RESULT",400,80);
    text("_______",400,83);
    
    Contestant.getPlayerInfo();
    
    if(allContestants!==undefined){
      var display_position=350;
      
      for(var plr in allContestants){
        fill(255,0,0);
        //textSize(30);
        //text(allContestants[plr].name+" - Got The Answer Wrong",400,410);

        var correctAns = "3";
        if(correctAns === allContestants[plr].answer){
          fill(10, 195, 0);
          //textSize(30);
          //text(allContestants[plr].name+" - Got The Correct Answer",400,380);
        }
          display_position = display_position+30;
          textSize(30);
          text(allContestants[plr].name,250,display_position);
      }     
     fill("Blue");
     textSize(20);
     text("NOTE: Contestant who answered correct are highlighted in green color!",160,450);
    }
  }
}