import { useCallback, useState } from "react"
import QUESTIONS from '../questions';
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    
    const activeQuestionIndex = userAnswers.length;
    const isQuizComplete = QUESTIONS.length === userAnswers.length;
    
    const handleSelectedAnswers = useCallback(function checkAnswer (answer) {
        setUserAnswers(prevUserAnswer => [...prevUserAnswer, answer]);
    }, []);

    return (
        isQuizComplete ? 
            <Summary userAnswers={userAnswers} /> :
            (
                <div id="quiz">
                    <Question 
                        key={activeQuestionIndex}
                        index={activeQuestionIndex}
                        onSelectedAnswer={handleSelectedAnswers}
                        />
                </div>
            )
        )
}