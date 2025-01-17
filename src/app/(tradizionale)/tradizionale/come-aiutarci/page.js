import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import TitleBanner from "@shared-components/TitleBanner";
import DonateCard from "@shared-components/DonateCard";
import PaypalCampagna from "@/src/app/shared-components/PaypalCampagna";
import PaypalButton from "@/src/app/shared-components/PaypalButton";
import Button from "@shared-components/Button";

import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";

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
      <section className={styles.donaOnline}>
        <h2>Dona online</h2>
        <p>
          Le donazioni ci permettono di garantire cibo, cure veterinarie e tutto
          il necessario per il benessere dei nostri ospiti. Ogni contributo,
          grande o piccolo, fa la differenza
        </p>
        <div className={styles.paypalButtonContainer}>
          <PaypalButton width="200px" />
        </div>
        <p>
          Se sei da pc e vuoi donare dal cellulare inquadra il QR con la
          fotocamera attiva:
        </p>
        <div className={styles.qrCodeContainer}>
          <Image src={qrCode} alt="codice QR"></Image>
        </div>
      </section>
      <section className={styles.altriMetodi}>
        <h2>Altri metodi</h2>
        <p>
          Se preferisci un metodo di donazione diverso da PayPal, puoi scegliere
          uno dei seguenti modi per aiutarci
        </p>
        <DonateCard />
      </section>
      <section className={styles.cinquePerMille}>
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
      </section>
      <div className={styles.campagnaContainer}>
        <PaypalCampagna />
      </div>
      <section className={styles.volontariato}>
        <h2>Volontariato</h2>
        <p>
          Dedica un po' del tuo tempo per accudire i nostri amici pelosi,
          portarli a passeggio, o aiutarci nelle attività quotidiane del
          rifugio. Ogni gesto è prezioso!
        </p>
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
      </section>
      <section className={styles.donazioniMateriali}>
        <h2>Donazioni materiali</h2>
        <p>
          Servono sempre coperte, guinzagli, cibo per cani e articoli per la
          pulizia. Ogni donazione materiale è un aiuto concreto per migliorare
          la vita nel canile.
        </p>
        <Button theme="white">Scopri cosa ci serve</Button>
      </section>
      <section className={styles.passaparola}>
        <h2>Passaparola!</h2>
        <p>
          Puoi aiutarci semplicemente condividendo la nostra missione con amici
          e familiari. Più persone ci conoscono, più cani possono trovare casa.
          Seguici sui social!
        </p>
        <div className={styles.socialsContainer}>
          <Link href="/">
            <FacebookLogo size={32} />
          </Link>
          <Link href="/">
            <InstagramLogo size={32} />
          </Link>
          <Link href="/">
            <YoutubeLogo size={32} />
          </Link>
          <Link href="/">
            <TiktokLogo size={32} />
          </Link>
        </div>
      </section>
    </div>
  );
}
