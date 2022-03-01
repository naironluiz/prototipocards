import styles from "./Developer.module.css";

const developer = (props) => {
  return <p className={styles.developer}>{props.developer}</p>;
};

export default developer;
