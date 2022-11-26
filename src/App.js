import React, { useState } from "react";

import "./App.css";

import Input from "./components/InputSection/Input";
import Output from "./components/OutputSection/Output";

let INITIALIZATION_DATA = [
  {
    id: 1,
    username: "rlopxhan21",
    age: 55,
  },
  {
    id: 2,
    username: "neo",
    age: 100,
  },
  {
    id: 3,
    username: "ghost",
    age: 110,
  },
];

function App() {
  const [submitHandler, setSubmitHandler] = useState(INITIALIZATION_DATA);

  const onSubmition = (data) => {
    setSubmitHandler((prevState) => {
      const updateddata = [...prevState];
      updateddata.unshift(data);
      return updateddata;
    });
  };

  return (
    <div className="App">
      <Input onSubmition={onSubmition} />
      <Output items={submitHandler} />
    </div>
  );
}

export default App;
