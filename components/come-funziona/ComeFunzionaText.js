import styles from "./ComeFunzionaText.module.css";

export default function ComeFunzionaText({
  title,
  children,
  number,
  border = "noBorder",
}) {
  const borderClass = {
    top: styles.borderTop,
    bottom: styles.borderBottom,
    noBorder: "",
  };

  return (
    <div
      className={`${styles.container} ${borderClass[border]} ${
        number === "1" ? styles.firstChild : ""
      }`}
    >
      <h3>{title}</h3>
      <p>{children}</p>
      <p className={styles.decorativeNumber}>{number}</p>
    </div>
  );
}
