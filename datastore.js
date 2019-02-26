'use strict';

const STORE = {
  questionCounter: null,
  usersAnswers: [],
  currentView: 'start', 
  score: 0,
};

const QUESTIONS = [
  {
    question: 'What does FPS stand for?',
    answer1: 'flag per shot',
    answer2: 'funky penguin singing',
    answer3: 'first person shooter',
    answer4: 'first player shooter',
    correctAnswer: 'answer3',
  },
  {
    question: 'What is the name of Link\'s horse in The Legend of Zelda Ocarina of Time?',
    answer1: 'Percy',
    answer2: 'Epona',
    answer3: 'Navi',
    answer4: 'Fred',
    correctAnswer: 'answer2',
  },{
    question: 'What are the ghosts\' name in Pac-Man?',
    answer1: 'Blinky, Pinky, Inky, and Clyde',
    answer2: 'Blinky, Pinky, Winky, and Steve',
    answer3: 'Blinky, Winky, Timmy, and Bob',
    answer4: 'Blinky, Winky, Clyde, and Steve',
    correctAnswer: 'answer1',
  },
];

// function generateAnswerList(){

// }

// function renderQuestionText(){

// }

// function renderHtml(){
// if (STORE.view === 'start'){

// } else if (STORE.view === 'quiz'){}
// // }
function scoreKeeper(){
// this function will add +1 to score if questions is correct
}
function questionCounter(){
// this function keeps track of the current question viewer is on
}

function giveFeedback(){
  //this function will let viewer know if they got the question right
}

function handleAnswerSubmited(){
// this function will listen submit
}

function verifyAnswer(){
// this function will check the submitted answer to see if it is correct
}

function handleNextQuestion(){
// this function will exit the feedback screen and go to next question
}

function startQuiz(){
// this function starts a new quiz
}

function main(){
  handleNextQuestion();
  handleSubmit();
  renderHtml();
  startQuiz();
}