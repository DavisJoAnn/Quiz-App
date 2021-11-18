var quizData = [{
  question: 'How old is JoAnn?',
  a: '21',
  b: '27',
  c: '32',
  d: '19',
  correct: 'b'
}, {
  question: 'Where was I born?',
  a: 'New York',
  b: 'Arizona',
  c: 'Georgia',
  d: 'Jamaica',
  correct: 'a'
}, {
  question: 'What is my favorite genre of music?',
  a: 'Kpop',
  b: 'Country',
  c: 'Hip-Hop/Rap',
  d: 'R&B',
  correct: 'd'
}, {
  question: 'What is the name of my podcast?',
  a: 'JoAnn\'s After Show',
  b: 'My After Show',
  c: 'Jojo\'s Perspective',
  d: 'Tea with Jojo',
  correct: 'c'
}, {
  question: 'Which State did I NOT visit in 2021?',
  a: 'New York',
  b: 'California',
  c: 'Georgia',
  d: 'Nevada',
  correct: 'a'
}];
var quiz = document.getElementById("quiz");
var answersEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitBtn = document.getElementById('submit');


var currentQuiz = 0;
var score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  var currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

}

function getSelected() {


  var answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //Check to see the answer
  var answer = getSelected();

  if (answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // Show results
      quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2>`;
    }


  }


});

//From project https://www.youtube.com/watch?v=dtKciwk_si4
