import Link from "next/link";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/history"}>Our History</Link>
      </li>
      <li>
        <Link href={"/dishes"}>Dishes</Link>
      </li>
      <li>
        <Link href={"/quiz"}>Quiz</Link>
      </li>
    </ul>
  );
};

export default Navigation;
