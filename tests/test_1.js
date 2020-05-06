var {MultipleChoice, TrueFalse} = require('./Question');

// Multiple Choice
let answer = '';
let number = 1;
let question = 'Which datatype is not a primitive datatype?'
let solution = 'array'; //['array', 'object', 'function'];
let wrongChoices = ['boolean', 'null', 'undefined', 'number', 'string', 'symbol'];

let q1 = new MultipleChoice(answer, number, question, solution, wrongChoices);

console.log(q1.type);
q1.setAnswer('array');
console.log(q1.checkAnswer());
q1.setAnswer('boolean');
console.log(q1.checkAnswer());

// True False
answer = '';
number = 2;
question = 'Is null is an object?'
solution = 'true'; //['array', 'object', 'function'];

q1 = new TrueFalse(answer, number, question, solution, wrongChoices);
console.log(q1.type);
q1.setAnswer('false');
console.log(q1.checkAnswer());
q1.setAnswer('true');
console.log(q1.checkAnswer());


var q0 = new MultipleChoice('', 0, 'Is this a generic question?', 'No solution', 'none');

class Quiz {
  constructor(questions = [], currentQuestion = 1) {
    this.questions = questions;
    this.currentQuestion = currentQuestion;
  }

  setCurrentQuestion(number) {
    this.currentQuestion = number;
  }

  addQuestion(question) {
    this.questions.push(question);
  }
}

var quiz_1 = new Quiz([q1], 0);
console.log(quiz_1);
