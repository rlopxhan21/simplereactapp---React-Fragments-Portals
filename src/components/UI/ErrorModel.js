import ReactDOM from "react-dom";

import styles from "./ErrorModel.module.css";

import Card from "./Card";
import React from "react";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onRevert}></div>;
};

const Overlay = (props) => {
  return (
    <Card className={styles.errormodel}>
      <header>
        <h1>{props.title}</h1>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <button type="submit" onClick={props.onRevert}>
          Okay
        </button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onRevert={props.onRevert} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onRevert={props.onRevert}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModel;
