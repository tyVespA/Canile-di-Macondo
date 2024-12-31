import styles from "./FullWidthBg.module.css";

export default function FullWidthBg({ children, bgColor, color }) {
  return (
    <section
      className={styles.fullWidthBg}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {children}
    </section>
  );
}
