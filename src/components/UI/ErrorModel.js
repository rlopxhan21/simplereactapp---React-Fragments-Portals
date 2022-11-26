import styles from "./ErrorModel.module.css";

import Card from "./Card";

const ErrorModel = (props) => {
  const rebortHandler = () => {
    props.onRevert();
  };

  return (
    <div>
      <div className={styles.backdrop} onClick={rebortHandler}></div>
      <Card className={styles.errormodel}>
        <header>
          <h1>{props.onError.title}</h1>
        </header>
        <div>
          <p>{props.onError.message}</p>
        </div>
        <footer>
          <button type="submit" onClick={rebortHandler}>
            Okay
          </button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
