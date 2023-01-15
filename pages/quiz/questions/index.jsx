import { prisma } from "@/server/db/client";
import { useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import questions from "../../../mock-data/questions";
import QuestionCount from "pages/quiz/questions/QuestionCount";
import QuestionText from "./QuestionText";
import AnswerSection from "./AnswerSection";
import Score from "./Score";

export async function getServerSideProps() {
  const q = await prisma.quizQuestion.findMany({
    include: { quizAnswer: true },
  });
  return {
    props: {
      q: JSON.parse(JSON.stringify(q)),
    },
  };
}

export default function QuizQuestions({ q }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // console.log(q);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < q.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <DefaultLayout>
      {showScore ? (
        <Score score={score} length={q.length} />
      ) : (
        <>
          <div className="question-section">
            <QuestionCount current={currentQuestion} length={q.length} />
            <QuestionText text={q[currentQuestion].questionText} />
          </div>
          <AnswerSection
            options={q[currentQuestion].quizAnswer}
            handle={handleAnswerClick}
          />
        </>
      )}
    </DefaultLayout>
  );
}
