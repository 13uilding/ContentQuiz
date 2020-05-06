class Question {
  constructor(answer, number, question, solution,  type) {
    this.answer = answer;
    this.number = number;
    this.question = question;
    this.solution = solution;
    // Types: multiple, boolean, matching, short_answer
    this.type = type;
  }

  setAnswer(answer) {
    this.answer = answer;
  }

  checkAnswer() {
    if (this.type === "multiple" || this.type === "boolean" || this.type === "matching") {
      if (this.answer === this.solution) {
        return true;
      }
      return false;
    }
    // I don't know what to do if the answer is a short answer.
    return "short answer";
  }
}

class MultipleChoice extends Question {
  constructor(answer, number, question, solution, wrongChoices) {
    super(answer, number, question, solution, "multiple");
    this.wrongChoices = wrongChoices;
  }
}

class TrueFalse extends Question {
  constructor(answer, number, question, solution) {
    super(answer, number, question, solution, "boolean");
  }
}

module.exports = {
  MultipleChoice,
  Question,
  TrueFalse
}



// a. I want to store all of the questions in a relational database
// b. I want the following fields/properties
//   i. Question
//   ii. Answers
//   iii. Solution


//   a. Should be 1 minute per question
//   b. Flavors: 
//        Multiple choice
//        matching
//        true or false
//        short answer
//   c. Should have a correct answer