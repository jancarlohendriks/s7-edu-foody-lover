import DefaultLayout from "@/layouts/DefaultLayout";

export default function History() {
  const moments = [
    {
      title: "title 1",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,expedita",
    },
    {
      title: "title 2",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,expedita",
    },
    {
      title: "title 3",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,expedita",
    },
  ];

  return (
    <DefaultLayout>
      {moments.map((moment, i) => (
        <article key={i}>
          <h2>{moment.title}</h2>
          <p>{moment.paragraph}</p>
        </article>
      ))}
    </DefaultLayout>
  );
}

// import axios from "axios";
// import { prisma } from "@/server/db/client";
// import { useState } from "react";

// import DefaultLayout from "@/layouts/DefaultLayout";
// import User from "@/components/User";

// export default function Home({ users }) {
//   const [usersList, setUsersList] = useState([...users]);

//   // const fetchData = async () => {
//   //   const { data } = await axios.get("/api/user");
//   //   setUsersList(data);
//   //   console.log(data);
//   // };

//   return (
//     <DefaultLayout>
//       <ul>
//         {usersList.map((user, i) => (
//           <li key={i}>{user.name}</li>
//         ))}
//       </ul>
//       {/* <User handleRefresh={fetchData}></User> */}
//     </DefaultLayout>
//   );
// }

// export async function getServerSideProps() {
//   const users = await prisma.user.findMany();
//   return {
//     props: {
//       users: JSON.parse(JSON.stringify(users)),
//     },
//   };
// }
