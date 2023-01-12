import axios from "axios";
import { prisma } from "../server/db/client";
import { useState } from "react";

import User from "../components/User";
import styles from "../styles/Home.module.css";

export default function Home({ users }) {
  const [usersList, setUsersList] = useState([...users]);

  const fetchData = async () => {
    const { data } = await axios.get("/api/user");
    setUsersList(data);
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ul>
          {usersList.map((user, i) => (
            <li key={i}>{user.name}</li>
          ))}
        </ul>
        <User handleRefresh={fetchData}></User>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
