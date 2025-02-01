import styles from "./FullWidthBg.module.css";

// add these stlyes to wrapped component

// max-width: var(--max-width);
// padding-inline: var(--padding-inline-max-width);
// margin-inline: auto;

export default function FullWidthBg({ children, backgroundColor, color }) {
  return (
    <div
      className={styles.fullWidthBg}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {children}
    </div>
  );
}
