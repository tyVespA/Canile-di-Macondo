import styles from "./Button.module.css";
export default function Button({
  backgroundColor,
  color,
  paddingInline = 24,
  fontSize = 16,
  theme,
  children,
}) {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: color,
        paddingInline: paddingInline,
        fontSize: fontSize,
      }}
      className={`${styles.button} ${styles[theme]}`}
    >
      {children}
    </button>
  );
}
