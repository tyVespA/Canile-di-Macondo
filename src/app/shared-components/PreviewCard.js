import styles from "./PreviewCard.module.css";
import Image from "next/image";
import { calculateAge } from "@/utils/calculateAge";
import { calculateAdoptionTime } from "@/utils/calulateAdoptionTime";
import {
  GenderMale,
  GenderFemale,
  Cake,
  Ruler,
  HouseLine,
} from "@phosphor-icons/react/dist/ssr";

export default function PreviewCard({ item, backgroundColor, color, sezione }) {
  const anno_di_nascita = item.anno_di_nascita;
  const mese_di_nascita = item.mese_di_nascita;

  const età = calculateAge(anno_di_nascita, mese_di_nascita, item.sesso);
  const adottatoDa = calculateAdoptionTime(
    item.adozione_anno,
    item.adozione_mese
  );

  return (
    <div className={styles.previewCardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={item.images[0]}
          width={3142 / 10}
          height={3927 / 10}
          alt=""
        />
        {/* <img src={item.images[0]} alt="" /> */}
      </div>
      <div
        className={styles.textContainer}
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        <p className={styles.nome}>{item.nome}</p>
        {sezione === "ospiti" ? (
          <div>
            <div className={styles.stats1}>
              <p className={styles.taglia}>
                <Ruler size={18} /> Taglia {item.taglia}
              </p>
              <p className={styles.sesso}>
                {item.sesso.toLowerCase() === "maschio" ? (
                  <GenderMale size={18} />
                ) : (
                  <GenderFemale size={18} />
                )}
                {item.sesso}
              </p>
            </div>
            <div className={styles.stats2}>
              <p className={styles.età}>
                {" "}
                <Cake size={18} />
                {età}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p className={styles.adottatoP}>
              {item.sesso.toLowerCase() === "maschio" ? "Adottato" : "Adottata"}{" "}
              da {adottatoDa}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
