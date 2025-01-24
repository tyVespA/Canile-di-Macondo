import styles from "./InfoCard.module.css";

export default function InfoCard({ title, text, icon, children }) {
  return (
    <div className={styles.infoCard}>
      <h4>{title}</h4>
      {icon}
      <p>{text}</p>
      {children}
    </div>
  );
}
