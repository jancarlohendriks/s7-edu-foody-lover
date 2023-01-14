import axios from "axios";
import { prisma } from "@/server/db/client";
import { useState } from "react";

import User from "@/components/User";
import styles from "@/styles/Home.module.css";

export default function Admin({ users }) {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/api/moment", {
      date: new Date(),
      title,
      paragraph,
    });
    // console.log(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <form onSubmit={handleSubmit} method="POST">
          <div>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <textarea
              onChange={(e) => setParagraph(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit">Upload</button>
        </form>
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
