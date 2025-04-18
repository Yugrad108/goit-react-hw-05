import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return <p className={styles.error}>{error}</p>;
};

export default ErrorMessage;
