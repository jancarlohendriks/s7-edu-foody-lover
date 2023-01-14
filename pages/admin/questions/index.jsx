import axios from "axios";
import { prisma } from "@/server/db/client";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function AdminQuestions({ questions }) {
  const router = useRouter();
  console.log(questions);

  const handleDelete = async (id) => {
    const { data } = await axios.post(`/api/deleteQuestion`, {
      id: parseInt(id),
    });
    router.push("/admin/");
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {questions.map((question) => (
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
