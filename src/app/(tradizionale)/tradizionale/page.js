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
        <h2>section2</h2>

        <Counter target="200" duration="1000" fontSize="35px" afterNumber="+" />
      </section>
      {/* </FullWidthBg> */}
    </div>
  );
}
