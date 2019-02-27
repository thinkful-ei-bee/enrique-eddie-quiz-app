'use strict';

const STORE = {
  questionCounter: null,
  userAnswers: [],
  currentView: 'start', 
  score: 0,
};

const QUESTIONS = [
  {
    question: 'What does FPS stand for?',// turn answers into an array and then use for loop to render ... the correct answer will be array index
    answer1: 'flag per shot',
    answer2: 'funky penguin singing',
    answer3: 'first person shooter',
    answer4: 'first player shooter',
    correctAnswer: 'first person shooter',
  },
  {
    question: 'What is the name of Link\'s horse in The Legend of Zelda Ocarina of Time?',
    answer1: 'Percy',
    answer2: 'Epona',
    answer3: 'Navi',
    answer4: 'Fred',
    correctAnswer: 'Epona',
  },{
    question: 'What are the ghosts\' name in Pac-Man?',
    answer1: 'Blinky, Pinky, Inky, and Clyde',
    answer2: 'Blinky, Pinky, Winky, and Steve',
    answer3: 'Blinky, Winky, Timmy, and Bob',
    answer4: 'Blinky, Winky, Clyde, and Steve',
    correctAnswer: 'Blinky, Pinky, Inky, and Clyde',
  },
  {question: 'Should you ever attack a chicken in a Zelda game?',
    answer1: 'Yes',
    answer2: 'You can’t',
    answer3: 'Only if you have a death wish!',
    answer4: 'There are no chickens is these games',
    correctAnswer: 'Only if you have a death wish!',},
  {
    question: 'Which Zelda game allows you to make your own food (and eat it, too!)?',
    answer1: 'Ocarina of Time',
    answer2: 'Majora’s Mask',
    answer3: 'Skyward Sword',
    answer4: 'Breath of the Wild',
    correctAnswer: 'Breath of the Wild',
  },
];

// function generateAnswerList(){

// }

// function renderQuestionText(){

// }

/********************* Generate Functions *********************/
// These functions generate html elements for the views

function generateStatus(){
  // this function generates the status of the game including the user's total score and what question they are on
  return `
  <ul>
    <li class="score">Total Score: ${STORE.score}</li>
    <li class="question-count">Question ${STORE.questionCounter === null ? 0 : STORE.questionCounter + 1} of ${QUESTIONS.length}</li>
  </ul>
  `;
}

function generateIntro(){
  // this function generates our landing view asking if you want to start the quiz
  return `
  <h1>Do you want to take this quiz?</h1>
  <button type="button" class="startButton">Start the Quiz</button>
  `;
}

function generateQuiz(index){
  // this function generates the actual quiz including the question, answers, and the submit button
  const question = QUESTIONS[index];
  return `
  <p class="question-text">
      ${question.question}
    </p>
    <form class="question-form"> 
      <input class="question-1" type="radio" value="${question.answer1}" name ="answer" required><span>${question.answer1}</span>
      <input class="question-2" type="radio" value="${question.answer2}" name ="answer" required><span>${question.answer2}</span>
      <input class="question-3" type="radio" value="${question.answer3}" name ="answer" required><span>${question.answer3}</span>
      <input class="question-4" type="radio" value="${question.answer4}" name ="answer" required><span>${question.answer4}</span>
      <button class="question-submit" id="submit-button" type="submit">Submit</button>
    </form>`;
}// for loop will go on line 72 and the value will be the index .... 
// possibly put this logic in another function, possibly generateQuestion

function generateFeedback(){
  /// this function generates the html elements for the feedback view
  const correct = verifyAnswer();
  return `<p>${correct ? 'You got it right!' : 'You got it wrong!'}</p><button id="next-question-button">Next Question</button>`;
}

function generateEnd(){
  //this function will show the end of the quiz and allow user to restart
  console.log('End Page...');
  return `<p> CONGRATULATIONS! YOUR FINAL SCORE IS ${STORE.score} out of ${QUESTIONS.length}!</p><button type="button" class="startButton">Restart the Quiz</button>`
}

/********************* Render Function *********************/
// This functions render the html elements from our generate functions to the DOM

function renderHtml(){
  // this function renders the html elements inside of our main element which includes the intro, the quiz, 
  // feedback, and the end. 
  // this function also renders the status of the game including a user's score and current question number
  if (STORE.currentView === 'start'){
    $('.intro').html(generateIntro());
    $('.quiz').empty();
    $('.feedback').empty();
    $('.end').empty();
  } else if (STORE.currentView === 'quiz'){
    $('.intro').empty();
    $('.quiz').html(generateQuiz(STORE.questionCounter));
    $('.feedback').empty();
    $('.end').empty();
  } else if (STORE.currentView === 'feedback'){
    $('.intro').empty();
    $('.quiz').empty();
    $('.feedback').html(generateFeedback());
    $('.end').empty();
  } else if (STORE.currentView === 'end'){
    $('.intro').empty();
    $('.quiz').empty();
    $('.feedback').empty();
    $('.end').html(generateEnd());
  }
  $('.status').html(generateStatus());
}

/********************* Other Helpful Function *********************/
// These functions help compute other tasks used by the other functions

function scoreKeeper(){
// this function will add +1 to score
  STORE.score++;
}

function questionCounter(){
// this function will add +1 to questionCounter
  STORE.questionCounter++;
}

function verifyAnswer(){
  // this function will check the submitted answer to see if it is correct
  const questionNumber = STORE.questionCounter;
  const answer = STORE.userAnswers[STORE.userAnswers.length - 1];
  if (answer === QUESTIONS[questionNumber].correctAnswer){
    scoreKeeper();
    return true;
  }
  return false;
}

/********************* Handle Functions *********************/
// These functions will handle 

function handleAnswerSubmited(){
// this function will listen to when a user submits an answer
  $('.quiz').on('submit','.question-form',function(event){
    event.preventDefault();
    STORE.userAnswers.push($('input[name=answer]:checked').val());
    STORE.currentView = 'feedback';
    renderHtml();
  });

}

function handleNextQuestion(){
// this function will exit the feedback screen and go to next question
  $('.feedback').on('click', '#next-question-button', function(event){
    console.log('handling ....');
    // add logic to check if on last question; if on the last question set currentView to end
    if (STORE.questionCounter === QUESTIONS.length -1){
      STORE.currentView = 'end';
    } else {
    STORE.currentView = 'quiz';
    questionCounter();
    }
    renderHtml();
  });
}

function startQuiz(){
// this function starts a new quiz
  $('.intro').on('click','.startButton',function(){
    STORE.questionCounter = 0;
    STORE.currentView = 'quiz';
    renderHtml();
  });
}
function restartQuiz(){
  // this function starts a new quiz
    $('.end').on('click','.startButton',function(){
      console.log('restarting');
      STORE.questionCounter = 0;
      STORE.currentView = 'quiz';
      STORE.userAnswers = [];
      STORE.score = 0;
      renderHtml();
      // if we want to get fancy, we can dump userAnswers array into a userHistory array before setting it 0;
    });
  }


/********************* Main Function *********************/
// This function brings together all the functions and runs them on page load

function main(){
  handleNextQuestion();
  handleAnswerSubmited();
  renderHtml();
  startQuiz();
  restartQuiz()
}

$(main);