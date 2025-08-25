import { useState } from "react";
import Answers from "./Answers";
import QuizTimer from "./QuizTimer";
import QUESTIONS from "../questions";

export default function Question({ index, onSelectedAnswer }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });
    let timer = 10000;
    if(answer.selectedAnswer) {
        timer= 1000;
    }
    if(answer.isCorrect !== null) {
        timer= 2000;
    }

    function handleSelectAnswer (answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: answer === QUESTIONS[index].answers[0]
            });

            setTimeout(() => {
                onSelectedAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = '';
    
    if(answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'selected';
    }

    return (
        <div id="question">
            <QuizTimer 
                key={timer}
                timer={timer} 
                mode={answerState !== '' ? 'answered' : ''}
                onTimeout={answer.selectedAnswer === '' ? onSelectedAnswer : null} 
                />
            <h2>{index +1 + '.) ' + QUESTIONS[index].text}</h2>
            <Answers 
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                checkAnswer={handleSelectAnswer}
                />
        </div>
    );

}