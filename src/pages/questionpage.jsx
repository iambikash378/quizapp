import React, { useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import Questions from '../data/questions_long'


function QuestionPage({category}){

    const [questionIndex, setQuestionIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [hasStarted, setHasStarted] = useState(true);
    const [hasFinished, setHasFinished] = useState(false);

    const currentQ = Questions[category][questionIndex];

    function handleAnswer(selection){

        if (currentQ.answer === selection){
            setCorrect(correct + 1);
        }

        const nextIndex = questionIndex + 1;

        if (nextIndex < Questions[category].length){
            setQuestionIndex(questionIndex + 1);
        }
        else{
            setHasFinished(true);
        }

    }

    return(
        <div>
            <h2>{category} Questions </h2>
            {!hasFinished ? (            <QuestionCard
            category = {category}
            question = {currentQ.question}
            options = {currentQ.options}
            answer = {currentQ.answer}
            onSelect = {handleAnswer}
            />) :
            (
            <div>
              <h2> Quiz Finished </h2>
              <p>Your score is {correct} / {Questions[category].length} </p>
            </div>
            )
            }
        </div>
    );

}

export default QuestionPage;