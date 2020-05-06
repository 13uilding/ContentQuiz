# ContentQuiz
I want to create a quiz with questions that cover all of the material from the previous week to help prepare users for the quiz on Monday. 

I don't want to write all of the questions, so I would like to create a way to have users send me those questions. I'm thinking I could then compile all of that information in a single location and output a new test every Friday.

# Building blocks: 
1. Questions
  a. Should be 1 minute per question
  b. Flavors: Multiple choice / matching / true or false / short answer
    i. Added Multiple Choice Class
    ii. Added True False Class
    iii. TO DO: matching
    iv. TO DO: short answer
  c. Should have a correct answer
    i. LATER: I'm not positive how I want to implement correct answers with an array
2. Tests
  a. Comprised of questions
  b. Landing page
  c. Score page
  d. Timer
  e. Submit page
  f. Question page (navigation between them)
3. Input questions
  a. I want to store all of the questions in a relational database
  b. I want the following fields/properties
    i. Question
    ii. Answers
    iii. Solution

# Mode of attack:
1. Create a dumby question
  a. Configure the webpage for the question
  b. Add the click functionality and selected value
2. Create the other pages
  a. Landing page
  b. Score page
  c. Submit page
  d. Timer 
3. Accepting questions and creating a database
