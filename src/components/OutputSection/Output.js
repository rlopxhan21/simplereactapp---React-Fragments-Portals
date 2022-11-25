import styles from "./Output.module.css";

import Card from "../UI/Card";
import OutputItem from "./OutputItem";

const Output = (props) => {
  return (
    <Card className={styles.card__output}>
      {props.items.map((item) => (
        <OutputItem item={item} key={item.id} />
      ))}
    </Card>
  );
};

export default Output;
