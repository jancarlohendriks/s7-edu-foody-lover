import Link from "next/link";

const Score = ({ score, length }) => {
  return (
    <div className="score-section">
      <p>
        You scored {score} out of {length}
      </p>
      <Link href={"/"}>Back to home</Link>
    </div>
  );
};

export default Score;
