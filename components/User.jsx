import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function User({ handleRefresh }) {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const { data } = await axios.post("/api/user", {
      name,
    });
    handleRefresh();
    // console.log(data);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Create a Snippet</title>
      </Head>
      <div>
        <h1>Create a Snippet</h1>
        <div>
          <input type="text" onChange={handleChange} />
          <div onClick={handleSubmit}>CLICK</div>
        </div>
      </div>
    </>
  );
}
