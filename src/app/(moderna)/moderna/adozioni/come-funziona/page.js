import styles from "./page.module.css";
import ReadyToAdoptCard from "@shared-components/ReadyToAdoptCard";
import comicBaloonDark from "@images/moderna/comicBaloonDark.png";
import noshadowDark from "@images/moderna/noshadowDark.png";
import ComeFunziona from "@shared-components/come-funziona/ComeFunziona";
import PreviewCardsSection from "@shared-components/PreviewCardsSection";
import { db } from "@lib/db";

export const metadata = {
  title: "Come funziona | Canile di Macondo",
  description: "Benvenuti!" /* change */,
};

export default function page() {
  return (
    <div className={styles.comeFunzionaPage}>
      <section className="first-section">
        <h1>Il nostro percorso</h1>
        <p className="centered">
          Adottare un cane è come un matrimonio: vogliamo che sia un legame
          duraturo e di successo. <br />
          Per garantirne il successo, abbiamo bisogno di conoscere il più
          possibile le esigenze e lo stile di vita di ogni persona o famiglia,
          così da poter consigliare l’abbinamento migliore possibile.
        </p>
        <ComeFunziona versione="moderna" />

        <div className={styles.cardContainer}>
          <ReadyToAdoptCard
            dogSrc={noshadowDark}
            comicBaloonTheme={comicBaloonDark}
            btnTheme="dark"
            href="/moderna/adozioni/i-nostri-ospiti"
            paddingInline="36px"
          >
            Adottare è un percorso importante, e ora hai tutti gli strumenti per
            iniziarlo. <br /> Incontra i nostri amici a quattro zampe in cerca
            di una famiglia e trova quello che è perfetto per te!
          </ReadyToAdoptCard>
        </div>
      </section>
    </div>
  );
}
