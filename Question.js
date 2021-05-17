class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here...");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question1 = createElement('h2');
    this.question2 = createElement('h2');
    this.option1 = createElement('h2');
    this.option2 = createElement('h2');
    this.option3 = createElement('h2');
    this.option4 = createElement('h2');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(640, 80);

    this.question1.html("Question:- There are 45 apples in your basket. You take three apples out of the basket" );
    this.question1.position(300, 170);
    this.question2.html(" How many apples are left?");
    this.question2.position(415,195);

    this.option1.html("1. 3 " );
    this.option1.position(400, 245);
    this.option2.html("2. 42" );
    this.option2.position(400, 280);
    this.option3.html("3. 45 " );
    this.option3.position(400, 315);
    this.option4.html("4. I do not eat apple!" );
    this.option4.position(400, 350);

    this.input1.position(500, 430);
    this.input2.position(800, 430);
    this.button.position(700, 480);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
