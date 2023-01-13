import Link from "next/link";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function QuizSignUp() {
  return (
    <DefaultLayout>
      <div>
        <div>
          <input type="text" />
        </div>
        <Link href={"/quiz/questions"}>Start</Link>
      </div>
    </DefaultLayout>
  );
}
