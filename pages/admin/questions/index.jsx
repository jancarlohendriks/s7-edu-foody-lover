import axios from "axios";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function AdminQuestions() {
  const [questionText, setQuestionText] = useState("");
  const [formFields, setFormFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/api/quiz", {
      questionText,
    });
    console.log(data);
  };

  const addFields = () => {
    let object = {
      name: "",
      age: "",
    };
    setFormFields([...formFields, object]);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <form onSubmit={handleSubmit} method="POST">
          <div>
            {formFields.map((form, index) => {
              return (
                <div key={index}>
                  <input
                    name="name"
                    placeholder="Name"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.name}
                  />
                  <input
                    name="age"
                    placeholder="Age"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.age}
                  />
                  <button onClick={() => removeFields(index)}>Remove</button>
                </div>
              );
            })}
            {/* <input
              type="text"
              onChange={(e) => setQuestionText(e.target.value)}
            /> */}
          </div>
          {/* <button type="submit">Add Question</button> */}
        </form>
        <button onClick={addFields}>Add More..</button>
        <br />
        <button onClick={submit}>Submit</button>
      </main>
    </div>
  );
}
