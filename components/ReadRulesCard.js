import Image from "next/image";
import Link from "next/link";
import styles from "./ReadRules.module.css";
import Button from "./Button";
import cane_png from "@images/cane_png.png";

export default function ReadRulesCard() {
  return (
    <div className={styles.readRulesContainer}>
      <div className={styles.textSection}>
        <p>
          Prima di scegliere il tuo futuro amico a quattro zampe, assicurati di
          aver letto il nostro processo di adozione!
        </p>
        <Link href={`/adozioni/come-funziona`}>
          <Button theme="white">Il nostro percorso</Button>
        </Link>
      </div>
      <div className={styles.imageSection}>
        <Image src={cane_png} alt="Foto di un cane" />
      </div>
    </div>
  );
}
