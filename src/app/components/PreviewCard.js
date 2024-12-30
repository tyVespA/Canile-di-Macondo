import styles from "./PreviewCard.module.css";
import Image from "next/image";
import { calculateAge } from "../../../utils/calculateAge";
import { GenderMale, GenderFemale, Cake, Ruler } from "@phosphor-icons/react";

export default function PreviewCard({ item }) {
  const anno_di_nascita = item.anno_di_nascita;
  const mese_di_nascita = item.mese_di_nascita;

  const età = calculateAge(anno_di_nascita, mese_di_nascita);

  return (
    <div className={styles.previewCardContainer}>
      <div>
        <div className={styles.imageContainer}>
          <Image src={item.img1} width={3142 / 10} height={3927 / 10} alt="" />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.nome}>{item.nome}</p>
          <div className={styles.stats}>
            <p className={styles.sesso}>
              {item.sesso.toLowerCase() === "maschio" ? (
                <GenderMale size={18} />
              ) : (
                <GenderFemale size={18} />
              )}
              {item.sesso}
            </p>
            <p className={styles.età}>
              {" "}
              <Cake size={18} />
              {età}
            </p>
            <p className={styles.taglia}>
              <Ruler size={18} /> Taglia {item.taglia}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
