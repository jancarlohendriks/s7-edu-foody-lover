import axios from "axios";
import { prisma } from "@/server/db/client";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function AdminQuestions({ questions }) {
  const [quizList, setQuizList] = useState([...questions]);

  const fetchData = async () => {
    await axios.get("/api/quiz").then((response) => setQuizList(response.data));
  };

  const handleDelete = async (id) => {
    await axios
      .delete("/api/quiz", {
        data: { id },
      })
      .then(fetchData);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {quizList &&
          quizList?.map((question) => (
            <div key={question.id}>
              <p>{question.questionText}</p>
              <button onClick={() => handleDelete(question.id)}>Delete</button>
              {/* <Link href={`/admin/questions/${question.id}`}>Edit</Link> */}
            </div>
          ))}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const questions = await prisma.quizQuestion.findMany();
  return {
    props: {
      questions: JSON.parse(JSON.stringify(questions)),
    },
  };
}
