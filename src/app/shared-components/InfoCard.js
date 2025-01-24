import styles from "./InfoCard.module.css";
import { Heart } from "@phosphor-icons/react/dist/ssr";

export default function InfoCard({ title, text, icon, children }) {
  return (
    <div className={styles.infoCard}>
      <h4>{title}</h4>
      <span>{children}</span>
      <p>{text}</p>
    </div>
  );
}
