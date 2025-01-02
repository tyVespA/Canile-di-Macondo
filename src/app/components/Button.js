import styles from "./Button.module.css";
export default function Button({ theme, children }) {
  return (
    <button className={`${styles.button} ${styles[theme]}`}>{children}</button>
  );
}
