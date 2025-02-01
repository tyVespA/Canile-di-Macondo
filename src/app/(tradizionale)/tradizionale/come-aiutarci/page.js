import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import TitleBanner from "@/src/app/components/TitleBanner";
import DonateCard from "@/src/app/components/DonateCard";
import PaypalCampagna from "@/src/app/components/PaypalCampagna";
import PaypalButton from "@/src/app/components/PaypalButton";
import Button from "@/src/app/components/Button";
import Spacer from "@/src/app/components/Spacer";
import AOSComponent from "@/src/app/components/AOSComponent";

import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  TiktokLogo,
  PawPrint,
} from "@phosphor-icons/react/dist/ssr";

import bannerImage from "@images/tradizionale/banner_images/cane_hero_4.jpg";

import spacer from "@images/tradizionale/spacer.svg";
import qrCode from "@images/Codice_QR.png";
import cinquePerMille from "@images/tradizionale/cinquePerMille.jpg";

export default function page() {
  return (
    <div className={styles.comeAiutarciPage}>
      <TitleBanner imgSrc={bannerImage} objectPosition="right">
        Come aiutarci
      </TitleBanner>
      <p className="heading-p centered">
        Il Canile di Macondo vive grazie alla generosità di chi, come te, crede
        nell’importanza di dare una seconda possibilità. Scopri come puoi
        aiutarci, che sia adottando, facendo volontariato, o con una donazione.{" "}
        <br />
        Le donazioni fatte al Canile di Macondo, essendo una Organizzazione Di
        Volontariato, sono fiscalmente deducibili o detraibili secondo i limiti
        stabiliti dalla normativa fiscale.
      </p>
      <section className={styles.donaOnline}>
        <h2>Dona online</h2>
        <p>
          Le donazioni ci permettono di garantire cibo, cure veterinarie e tutto
          il necessario per il benessere dei nostri ospiti. Ogni contributo,
          grande o piccolo, fa la differenza.
        </p>
        <AOSComponent animationType="fade-right">
          <div className={styles.paypalButtonContainer}>
            <PaypalButton width="200px" />
          </div>
        </AOSComponent>
        <p>
          Se sei da pc e vuoi donare dal cellulare, inquadra il QR con la
          fotocamera attiva
        </p>
        <div className={styles.qrCodeContainer}>
          <Image src={qrCode} alt="codice QR"></Image>
        </div>
      </section>

      <Spacer />

      <section className={styles.altriMetodi}>
        <h2>Altri metodi</h2>
        <p className={styles.altriMetodiFirstP}>
          Se preferisci un metodo di donazione diverso da PayPal, puoi scegliere
          uno dei seguenti modi per aiutarci:
        </p>
        <DonateCard />
      </section>

      <Spacer icon="Bone" />

      <section className={styles.cinquePerMille}>
        <h2>5 x 1000</h2>
        <p className={styles.cinquePerMillePrimoP}>
          Con il tuo 5x1000 puoi aiutarci a garantire cure, cibo e un rifugio
          sicuro ai nostri amici a quattro zampe. Basta indicare il nostro
          codice fiscale nella tua dichiarazione dei redditi. È semplice e non
          ti costa nulla!
        </p>
        <div className={styles.comeDonareCinquePerMille}>
          <AOSComponent animationType="fade-right">
            <div>
              <Image src={cinquePerMille} alt="module 5x1000" />
            </div>
          </AOSComponent>
          <div className={styles.comeDonareCinquePerMilleText}>
            <h3>Come destinare il 5 x 1000</h3>
            <p>Destinare il 5 x 1000 alla PAL è facilissimo.</p>
            <p>
              Sui modelli per la dichiarazione dei redditi è predisposta una
              sezione nella quale il contribuente può inserire i dati
              dell’associazione di volontariato che ha scelto di sostenere.
            </p>
            <strong>Codice fiscale del Canile di Macondo:</strong>
            <p>1012MACONDO</p>
          </div>
        </div>
      </section>

      <Spacer icon="Heart" />

      {/* <div className={styles.campagnaContainer}>
        <PaypalCampagna />
      </div> */}
      <div className={styles.altriModiSection}>
        <div className={styles.volontariato}>
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
            <Button theme="light">Diventa volontario</Button>
          </Link>
        </div>
        <div className={styles.donazioniMateriali}>
          <h2>Donazioni materiali</h2>
          <p>
            Servono sempre coperte, guinzagli, cibo per cani e articoli per la
            pulizia. Ogni donazione materiale è un aiuto concreto per migliorare
            la vita nel canile.
          </p>

          <Link href="/tradizionale/404temp">
            <Button theme="white">Scopri cosa ci serve</Button>
          </Link>
        </div>
        <div className={styles.passaparola}>
          <h2>Passaparola!</h2>
          <p>
            Puoi aiutarci semplicemente condividendo la nostra missione con
            amici e familiari. Più persone ci conoscono, più cani possono
            trovare casa. Seguici sui nostri social!
          </p>
          <div className={styles.socialsContainer}>
            <AOSComponent>
              <Link href="/tradizionale/404temp">
                <FacebookLogo size={32} />
              </Link>
            </AOSComponent>
            <AOSComponent delay="100" mobileDelay={true}>
              <Link href="/tradizionale/404temp">
                <InstagramLogo size={32} />
              </Link>
            </AOSComponent>
            <AOSComponent delay="200" mobileDelay={true}>
              <Link href="/tradizionale/404temp">
                <YoutubeLogo size={32} />
              </Link>
            </AOSComponent>
            <AOSComponent delay="300" mobileDelay={true}>
              <Link href="/tradizionale/404temp">
                <TiktokLogo size={32} />
              </Link>
            </AOSComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
