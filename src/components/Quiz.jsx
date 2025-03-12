import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  console.log(activeQuestionIndex);

  function handleSelectAnswer(selectedAnswer) {
    // setUserAnswers((prevAnswers) => {
    //   return [...prevAnswers, e.target.textContent];
    // });

    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer.target.textContent]);
  }

  return (
    <div id="quiz">
      <div id="question">
        <p>Currently active Question</p>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
