import styles from "./PreviewCard.module.css";
import Image from "next/image";

export default function PreviewCard({ item }) {
  return (
    <div className={styles.previewCardContainer}>
      <div>
        <p>nome: {item.nome}</p>
        <div className={styles.imageContainer}>
          <Image src={item.img1} width={3142} height={3927} alt="" />
        </div>
        <p>taglia: {item.taglia}</p>
        <p>anno di nascita: {item.anno_di_nascita}</p>
        <p>sesso: {item.sesso}</p>
      </div>
    </div>
  );
}
