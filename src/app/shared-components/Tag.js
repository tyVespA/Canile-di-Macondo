import styles from "./Tag.module.css";
export default function Tag({ children }) {
  return (
    <div className={styles.tagContainer}>
      <p>{children}</p>
    </div>
  );
}
