import { useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import questions from "./questions";
import QuestionCount from "pages/quiz/questions/QuestionCount";
import QuestionText from "./QuestionText";
import AnswerSection from "./AnswerSection";
import Score from "./Score";

export default function QuizQuestions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <DefaultLayout>
      {showScore ? (
        <Score score={score} length={questions.length} />
      ) : (
        <>
          <div className="question-section">
            <QuestionCount
              current={currentQuestion}
              length={questions.length}
            />
            <QuestionText text={questions[currentQuestion].questionText} />
          </div>
          <AnswerSection
            options={questions[currentQuestion].answerOptions}
            handle={handleAnswerClick}
          />
        </>
      )}
    </DefaultLayout>
  );
}
