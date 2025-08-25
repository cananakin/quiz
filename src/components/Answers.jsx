import { useRef } from "react";


export default function Answers({ answers, selectedAnswer, answerState, checkAnswer }) {
    const shuffledAnswers = useRef();
    
    if(!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer, a_i) => {
                const isSelected = selectedAnswer === answer;
                let cssClass = '';
                if(isSelected) {
                    cssClass = answerState;
                }
                return (
                    <li className="answer" key={a_i}>
                        <button className={cssClass} disabled={answerState !== ''} onClick={() => checkAnswer(answer)}> {answer}</button>
                    </li>
                )}
            )}
        </ul>
    );
}