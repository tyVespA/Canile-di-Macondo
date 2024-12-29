import styles from "./PreviewCard.module.css";
import Image from "next/image";
import { calculateAge } from "../../../utils/calculateAge";

export default function PreviewCard({ item }) {
  const anno_di_nascita = item.anno_di_nascita;
  const mese_di_nascita = item.mese_di_nascita;

  const età2 = calculateAge(anno_di_nascita, mese_di_nascita);

  return (
    <div className={styles.previewCardContainer}>
      <div>
        <div className={styles.imageContainer}>
          <Image src={item.img1} width={3142} height={3927} alt="" />
        </div>
        <div className={styles.textContainer}>
          <p>{item.nome}</p>
          <p>
            {item.sesso}, {età2}
          </p>
          <p>taglia: {item.taglia}</p>
          <p>sesso: </p>
        </div>
      </div>
    </div>
  );
}
