import './App.css';

import React, { useState } from 'react';

import QuestionCard from './components/QuestionCard';

import questions from './data/questions';

function App() {

  const[currentIndex, setCurrentIndex] = useState(0);
  const[score, setScore] = useState(0);
  const[hasStarted, setHasStarted] = useState(false);
  const[hasFinished, setHasFinished] = useState(false);

  const handleAnswer = (selected_option) => {
    if(selected_option == questions[currentIndex].answer) {
      setScore(score+1);
    }

    const NextIndex = currentIndex + 1;

    if (NextIndex < questions.length){
      setCurrentIndex(NextIndex);
    }
    else {
      setHasFinished(true);
    }
  };


  return(
    <div>
      {
        !hasFinished ? (
          <QuestionCard question = {questions[currentIndex].question}
          options = {questions[currentIndex].options}
          onSelect = {handleAnswer} />
        ):(
          <div>
            <h2> Quiz Finished </h2>
            <p>Your score is {score} / {questions.length} </p>
          </div>
        );
      }
    </div>
  )
};


export default App;