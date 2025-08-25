import Complete_ICON from '../assets/quiz-complete.png';
import QUESTIONS from "../questions";

export default function Summary({userAnswers}) {
    const correctAnswers = userAnswers.filter((item, index) => item === QUESTIONS[index].answers[0])
    const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100)
    const wrongAnswers  = userAnswers.filter((item, index) => item !== null && item !== QUESTIONS[index].answers[0])
    const wrongAnswersShare = Math.round((wrongAnswers.length / userAnswers.length) * 100)
    const skippedAnswers = userAnswers.filter((item) => item === null)
    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100)
    
    return (
        <div id="summary"> 
            <img src={Complete_ICON} alt="quiz complete icon" />    
            <h2>Quiz Completed!</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedAnswersShare} %</span>
                    <span className='text'>SKIPPED</span>
                </p>
                <p>
                    <span className='number'>{correctAnswersShare} %</span>
                    <span className='text'>ANSWERED CORRECTLY</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswersShare} %</span>
                    <span className='text'>ANSWERED INCORRECTLY</span>
                </p>
            </div>
            <ol>
                {
                    userAnswers.map((answer, index) => {
                        const correctAnswer = QUESTIONS[index].answers[0];
                        let cssClass = "";
                        let result = "";
                        if(answer === null) {
                            cssClass = 'skipped';
                        } else if(answer === correctAnswer) {
                            cssClass = 'correct';
                        } else {
                            cssClass = 'wrong';
                        }

                        return (
                            <li key={index}>
                                <h3>{index+1}</h3>
                                <p className='question'>{QUESTIONS[index].text}</p>
                                <p className={`user-answer ${cssClass}`}>{answer ??  'Skipped'}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    );
}