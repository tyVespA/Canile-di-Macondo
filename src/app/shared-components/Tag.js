import styles from "./Tag.module.css";
export default function Tag({
  children,
  borderColor = "rgba(255, 255, 255, 0.75)",
  iconColor,
  backgroundColor,
}) {
  return (
    <div
      className={styles.tagContainer}
      style={{ border: `1px solid ${borderColor}` }}
    >
      <p className={styles[iconColor]}>{children}</p>
    </div>
  );
}
