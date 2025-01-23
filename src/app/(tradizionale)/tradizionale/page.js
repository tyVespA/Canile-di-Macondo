import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import FullWidthBg from "@shared-components/FullWidthBg";
import Button from "@shared-components/Button";
import Counter from "@shared-components/Counter";

export const metadata = {
  title: "Home | Canile di Macondo",
  description: "Benvenuti!" /* change */,
};

export default function Home() {
  return (
    <div>
      <section className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1>Benvenuti al Canile di Macondo</h1>
          <p style={{ marginBottom: "10px" }}>
            Ispirato alla città incantata di Cent’anni di solitudine, il nostro
            rifugio è il luogo dove la magia delle seconde possibilità prende
            vita. <br />{" "}
          </p>
          <p style={{ marginBottom: "20px" }}>
            Un rifugio fatto di amore, dedizione e speranza per i nostri amici a
            quattro zampe.
          </p>

          <div className={styles.heroButtonsContainer}>
            <div className={styles.firstLink}>
              <Link href="/tradizionale/adozioni/i-nostri-ospiti">
                <Button theme="light" paddingInline="37.5px">
                  Incontra i nostri ospiti
                </Button>
              </Link>
            </div>
            <Link href="/tradizionale/come-aiutarci">
              <Button theme="dark">Scopri come puoi aiutare</Button>{" "}
            </Link>
          </div>
        </div>
        <div></div>
        <div className={styles.heroImage}>
          {/* <Image src={cane_hero_1} alt="" /> */}
        </div>
      </section>
      {/* <FullWidthBg bgColor="var(--accent-one)"> */}
      <section className={styles.section2}>
        <h2>La nostra missione</h2>
        <p>
          Il nostro obiettivo principale è quello di creare un legame unico tra
          gli animali e le persone. Non si tratta solo di trovare una casa per i
          nostri ospiti, ma di costruire relazioni basate sulla fiducia, sul
          rispetto e sull’amore reciproco. Ogni cane che accogliamo ha una
          storia, a volte segnata da difficoltà, ma anche un cuore pieno di
          affetto da donare.
        </p>
        <h3>Cosa facciamo</h3>
        <ul>
          <li>
            <strong>Accoglienza e cura:</strong> Forniamo un ambiente sicuro e
            confortevole per i nostri cani, assicurandoci che ricevano tutte le
            cure mediche, l’alimentazione e l’amore di cui hanno bisogno.
          </li>
          <li>
            <strong>Percorso di adozione:</strong> Accompagniamo le famiglie
            attraverso un processo attento e personalizzato, per garantire
            un’adozione felice e duratura.
          </li>
          <li>
            <strong>Educazione e sensibilizzazione:</strong> Organizziamo eventi
            e campagne per promuovere l’adozione responsabile e diffondere la
            cultura del rispetto verso gli animali
          </li>
        </ul>
      </section>
      <section>
        <h2>section3</h2>

        <Counter target="200" duration="1000" fontSize="35px" afterNumber="+" />
      </section>
    </div>
  );
}
