import { prisma } from "@/server/db/client";
import axios from "axios";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function AdminEditQuestion({ question }) {
  console.log(question);
  const [questionText, setQuestionText] = useState(question.questionText);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>{questionText}</p>
        <button>Update</button>
        <button>Delete</button>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const question = await prisma.quizQuestion.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return {
    props: {
      question: JSON.parse(JSON.stringify(question)),
    },
  };
}
