import Link from "next/link";
import DefaultLayout from "layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <div>
        <h1>Welcome</h1>
        <Link href={"/history"}>Get started</Link>
      </div>
    </DefaultLayout>
  );
}
