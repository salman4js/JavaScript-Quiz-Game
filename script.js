var startbutton = document.getElementById('startbtn');

var nextbutton = document.getElementById('nextbtn');

var questionContainers = document.getElementById('question-container');

var questiontoshow = document.getElementById('question');

var answerbtns = document.getElementById('answer-button');

var score = document.getElementById('score');

var scorescored = document.getElementById("scoreresult");

var blah = document.getElementById('controls');

let shuffle, currrentindex;

let selectedButton;

var overallScore = 0;

function findanswer(){
  document.body.style.backgroundColor = "navy";
  currrentindex++
  setQuestions();
};


startbutton.addEventListener("click", startGame);

function startGame() {
    questionContainers.classList.remove('hide');
    startbutton.classList.add("hide");
    scorescored.classList.add("hide");
    overallScore = 0;
    shuffle = questions.sort(() => Math.random() - .5)
    currrentindex = 0;
    console.log(shuffle, currrentindex);
    setQuestions();
};

function setQuestions() {
    resetGame();
    showQuestions(shuffle[currrentindex]);
};

function resetGame(){
    while(answerbtns.firstChild){
        answerbtns.removeChild(answerbtns.firstChild);
      }
}

function showQuestions(ques) {
    questiontoshow.innerText = ques.question
    console.log(shuffle.length, currrentindex);
    if(shuffle.length <= currrentindex + 1){
      startbutton.classList.remove('hide');
      startbutton.innerText = "Restart Quiz";
      questionContainers.classList.add('hide');
      scorescored.classList.remove("hide");
      scorescored.innerText = "Score Scored : " +overallScore;
    } else {
    ques.answers.forEach(element => {
        const button = document.createElement('button');
        button.innerText = element.text;
        button.classList.add("btn");
        answerbtns.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
  }  
};

function selectAnswer(e){
    const selectedButton = e.target.textContent;
    checkAnswer(shuffle[currrentindex], selectedButton);
};

function checkAnswer(ques, selectedButton){
    correctone = ques.correctAns;
    console.log(correctone);
    console.log(selectedButton);
    if (selectedButton === correctone){
        overallScore ++;
        console.log(overallScore);
        document.body.style.backgroundColor = "green";
        nextbutton.disabled = false;
    } else {
        document.body.style.backgroundColor = "rgb(202,0,52)";
    }
    findanswer();

};

const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4'},
        { text: '22' }
      ],
      correctAns : '4'
    },
    {
      question: 'Who is the best YouTuber?',
      answers: [
        { text: 'Web Dev Simplified' },
        { text: 'Traversy Media' },
        { text: 'Dev Ed' },
        { text: 'Fun Fun Function' }
      ],
      correctAns : 'Dev Ed'
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda' },
        { text: 'YES!!!'},
        { text: 'Um no' },
        { text: 'IDK'}
      ],
      correctAns : 'YES!!!'
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6'},
        { text: '8'}
      ],
      correctAns : '8'
    }
  ]
  
  
