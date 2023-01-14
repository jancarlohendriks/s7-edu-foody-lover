import { prisma } from "@/server/db/client";
import styles from "@/styles/Home.module.css";

export default function Admin({ users }) {
  console.log(users);
  return <div className={styles.container}></div>;
}

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
