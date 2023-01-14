import axios from "axios";
import { prisma } from "@/server/db/client";
import { useState } from "react";

import styles from "@/styles/Home.module.css";

export default function Admin({ moments }) {
  const [momentsList, setMomentsList] = useState([...moments]);
  // console.log(moments);

  const fetchData = async () => {
    const { data } = await axios.get("/api/moment");
    setMomentsList(data);
    // console.log(data);
  };

  // TODO:
  // build front-end first with links and routes, then apply prisma

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {momentsList.map((moment, i) => (
          <li key={i}>
            <p>{moment.date}</p>
            <p>{moment.title}</p>
            <p>{moment.paragraph}</p>
          </li>
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const moments = await prisma.moment.findMany();
  return {
    props: {
      moments: JSON.parse(JSON.stringify(moments)),
    },
  };
}
