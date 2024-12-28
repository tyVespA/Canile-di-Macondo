import styles from "./PreviewCard.module.css";

export default function PreviewCard({ item }) {
  return (
    <div className={styles.previewCardContainer}>
      <div>
        <p>nome: {item.nome}</p>
        <p>taglia: {item.taglia}</p>
        <p>anno di nascita: {item.anno_di_nascita}</p>
        <p>sesso: {item.sesso}</p>
      </div>
    </div>
  );
}
