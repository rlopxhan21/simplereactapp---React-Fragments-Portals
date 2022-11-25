import { useState } from "react";

import styles from "./Input.module.css";

import Card from "../UI/Card";

const Input = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      id: Math.random().toString(),
      username: username,
      age: age,
    };
    props.onSubmition(enteredData);
    setUsername("");
    setAge("");
  };

  return (
    <Card className={styles.card__input}>
      <form action="" method="" onSubmit={submitHandler}>
        <section className={styles.inputfield}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            placeholder="Username..."
            onChange={usernameHandler}
          />
        </section>

        <section className={styles.inputfield}>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            placeholder="Age..."
            onChange={ageHandler}
          />
        </section>
        <input
          className={`${styles.btn} ${styles["btn-submit"]}`}
          type="submit"
          value="Add User"
        />
      </form>
    </Card>
  );
};

export default Input;
