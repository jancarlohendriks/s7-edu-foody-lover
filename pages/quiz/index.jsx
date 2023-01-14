import Link from "next/link";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Quiz() {
  return (
    <DefaultLayout>
      <div>
        <h1>Rules</h1>
        <Link href={"/quiz/questions"}>Continue</Link>
      </div>
    </DefaultLayout>
  );
}
