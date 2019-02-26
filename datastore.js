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
  {question: 'Should you ever attack a chicken in a Zelda game?',
    answer1: 'Yes',
    answer2: 'You can’t',
    answer3: 'Only if you have a death wish!',
    answer4: 'There are no chickens is these games',
    correctAnswer: 'answer3',},
  {
    question: 'Which Zelda game allows you to make your own food (and eat it, too!)?',
    answer1: 'Ocarina of Time',
    answer2: 'Majora’s Mask',
    answer3: 'Skyward Sword',
    answer4: 'Breath of the Wild',
    correctAnswer: 'answer4',
  },
];

// function generateAnswerList(){

// }

// function renderQuestionText(){

// }

function generateIntro(){
  return `
  <h1>Do you want to take this quiz?</h1>
  <button type="button" class="startButton">Start the Quiz</button>
  `;
}

function generateQuiz(index){
  const question = QUESTIONS[index];
  return `
  <p class="question-text">
      ${question.question}
    </p>
    <form class="question-form">
<<<<<<< HEAD
      <input class="question-1" type="radio">${question.answer1}>
      <input class="question-1" type="radio">${question.answer2}>
      <input class="question-2" type="radio">${question.answer3}>
      <input class="question-3" type="radio">${question.answer4}>
      <button class="question-4" type="submit">Submit</button>
=======
      <input class="question-1" type="radio" value="${question.answer1}" name ="answer" required><span>${question.answer1}</span>
      <input class="question-2" type="radio" value="${question.answer2}" name ="answer" required><span>${question.answer2}</span>
      <input class="question-3" type="radio" value="${question.answer3}" name ="answer" required><span>${question.answer3}</span>
      <input class="question-4" type="radio" value="${question.answer4}" name ="answer" required><span>${question.answer4}</span>
      <button class="question-submit" type="submit">Submit</button>
>>>>>>> ab388a6e466bd05ccc10ecf82387b82cbd3afff1
    </form>`;
}

function renderHtml(){
  if (STORE.currentView === 'start'){
    $('.intro').html(generateIntro());
    $('.quiz').empty();
  } else if (STORE.currentView === 'quiz'){
    $('.intro').empty();
    $('.quiz').html(generateQuiz(STORE.questionCounter));
  }
}
function scoreKeeper(){
// this function will add +1 to score if questions is correct
}
function questionCounter(){
// this function keeps track of the current question viewer is on
  STORE.questionCounter++;
}

function giveFeedback(){
  //this function will let viewer know if they got the question right
}

function handleAnswerSubmited(){
// this function will listen submit
  $('.quiz').on('submit','.question-submit',function(event){
    event.preventDefault();
    console.log('Submit...');
  });

}

function verifyAnswer(){
// this function will check the submitted answer to see if it is correct
}

function handleNextQuestion(){
// this function will exit the feedback screen and go to next question
}

function startQuiz(){
// this function starts a new quiz
  $('.intro').on('click','.startButton',function(){
    STORE.questionCounter = 0;
    STORE.currentView = 'quiz';
    renderHtml();
  });
}

function main(){
  handleNextQuestion();
  // handleSubmit();
  renderHtml();
  startQuiz();
}

$(main);