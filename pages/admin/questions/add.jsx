import axios from "axios";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function AdminAddQuestion() {
  const [questionText, setQuestionText] = useState("");
  const [formFields, setFormFields] = useState([{ answerText: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      answerText: "",
    };
    setFormFields([...formFields, object]);
  };

  const submit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/api/quiz", {
      questionText,
      formFields,
    });
    console.log(data);
    // console.log(formFields);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <form onSubmit={submit} method="POST">
          <input
            name="question"
            placeholder="Question"
            type="text"
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <div>
            {formFields.map((form, index) => {
              return (
                <div key={index}>
                  <input
                    name="answerText"
                    value={form.name}
                    placeholder="Answer"
                    onChange={(event) => handleFormChange(event, index)}
                  />
                  <button onClick={() => removeFields(index)}>Remove</button>
                </div>
              );
            })}
          </div>
        </form>
        <button onClick={addFields}>Add More..</button>
        <br />
        <button onClick={submit}>Submit</button>
      </main>
    </div>
  );
}
