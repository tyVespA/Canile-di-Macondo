import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import TitleBanner from "@shared-components/TitleBanner";
import DonateCard from "@shared-components/DonateCard";
import PaypalCampagna from "@/src/app/shared-components/PaypalCampagna";
import PaypalButton from "@/src/app/shared-components/PaypalButton";

import bannerImage from "@images/tradizionale/banner_images/cane_hero_4.jpg";
import qrCode from "@images/Codice_QR.png";

export default function page() {
  return (
    <div className={styles.comeAiutarciPage}>
      <TitleBanner imgSrc={bannerImage} objectPosition="right">
        Come aiutarci
      </TitleBanner>
      <p className="heading-p centered">
        Il Canile di Macondo vive grazie alla generosità di chi, come te, crede
        nell’importanza di dare una seconda possibilità. Scopri come puoi
        aiutarci, che sia adottando, facendo volontariato, o con una donazione.
      </p>
      <p className="heading-p centered">
        Le donazioni fatte al Canile di Macondo, essendo una Organizzazione Di
        Volontariato, sono fiscalmente deducibili o detraibili secondo i limiti
        stabiliti dalla normativa fiscale.
      </p>
      <h2>Dona online</h2>
      <div className={styles.buttonContainer}>
        <PaypalButton width="200px" />
      </div>
      <h2>Altre donazioni</h2>
      <DonateCard />
      <h2>5 x 1000</h2>
      <p>
        Grazie alla legge Finanziaria è possibile destinare il 5 x 1000 della
        tua imposta sul reddito al volontariato. Lo scorso anno, grazie al 5 x
        1000 destinato al canile, abbiamo potuto sostenere sempre di più tutte
        quelle opere e progetti relativi al benessere dei nostri ospiti cani e
        gatti.
      </p>
      <h3>Come destinare il 5 x 1000</h3>
      <p>Destinare il 5 x 1000 alla PAL è facilissimo </p>
      <p>
        Sui modelli per la dichiarazione dei redditi è predisposta una sezione
        nella quale il contribuente può inserire i dati dell’associazione di
        volontariato che ha scelto di sostenere.
      </p>
      <p>Codice fiscale del Canile di Macondo:</p>
      <p>XXXXXX</p>
      <div className={styles.campagnaContainer}>
        <PaypalCampagna />
      </div>
      <h2>Ci sono altri modi per sostenerci</h2>
      <Link
        href={{
          pathname: "/tradizionale/contatti",
          hash: "form",
          query: {
            subject: "volontariato",
          },
        }}
      >
        <p style={{ textDecoration: "underline" }}>Diventa volontario →</p>
      </Link>
      <div className={styles.qrCodeContainer}>
        <Image src={qrCode} alt="codice QR"></Image>
      </div>
    </div>
  );
}
