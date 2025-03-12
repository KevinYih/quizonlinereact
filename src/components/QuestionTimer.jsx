import { useState, useEffect } from "react";

export default function QuestionTimer({ timeOut, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);
  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeOut, timeOut);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut, timeOut]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timeOut} id="question-time" className={mode} />;
}
