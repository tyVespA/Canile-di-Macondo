import styles from "./Button.module.css";
export default function Button({
  backgroundColor,
  color,
  paddingInline = 24,
  fontSize = 16,
  theme,
  children,
  type = "",
  disabled = "no",
}) {
  return (
    <button
      type={type}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        paddingInline: paddingInline,
        fontSize: fontSize,
      }}
      className={`${styles.button} ${styles[theme]} ${
        disabled === "yes" ? styles.disabled : ""
      }`}
      disabled={disabled === "yes"}
    >
      {children}
    </button>
  );
}
