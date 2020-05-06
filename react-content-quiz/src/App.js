import React from 'react';
import QuestionPage from './pages/question';
import './App.css';


function App() {
  let question = 0
  return (
    <div className="App">
      <QuestionPage question={{number: 0}}></QuestionPage>
    </div>
  );
}

export default App;
