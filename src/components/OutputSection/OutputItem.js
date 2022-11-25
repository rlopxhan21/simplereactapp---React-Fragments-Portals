import styles from "./OutputItem.module.css";

const OutputItem = (props) => {
  return (
    <p className={styles.outputitem__p}>
      {props.item.username} ({props.item.age} years old)
    </p>
  );
};

export default OutputItem;
