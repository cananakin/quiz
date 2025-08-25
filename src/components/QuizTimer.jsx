import { useEffect, useState } from 'react'

export default function QuizTimer({timer, onTimeout, mode}) {
    const [isLoading, setIsLoading] = useState(timer);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log(timer);
            onTimeout(null);
        }, timer);

        return () => {
            clearTimeout(timeout);
        }
    },[timer, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(timer);
            setIsLoading(prev => prev - 100);
        },100);
        return () => {
            clearInterval(interval);
        }
    },[timer]);

    return (
        <progress id="question-time" max={timer} value={isLoading} className={mode} />
    );
}