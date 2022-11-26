import React, { useState, useRef } from "react";

import styles from "./Input.module.css";

import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";

const Input = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameref = useRef();
  const ageref = useRef();

  const [error, setError] = useState();

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (1 > +age || +age > 120) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const enteredData = {
      id: Math.random().toString(),
      username: username,
      age: age,
    };

    console.log(usernameref.current.value);
    console.log(ageref.current.value);

    props.onSubmition(enteredData);
    setUsername("");
    setAge("");
  };

  const revertHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
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
              ref={usernameref}
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
              ref={ageref}
            />
          </section>
          <input
            className={`${styles.btn} ${styles["btn-submit"]}`}
            type="submit"
            value="Add User"
          />
        </form>
      </Card>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onRevert={revertHandler}
        />
      )}
    </React.Fragment>
  );
};

export default Input;
