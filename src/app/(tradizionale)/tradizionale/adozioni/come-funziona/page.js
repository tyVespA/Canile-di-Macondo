import styles from "./page.module.css";
import ReadyToAdoptCard from "@shared-components/ReadyToAdoptCard";
import ComeFunziona from "@shared-components/come-funziona/ComeFunziona";
import comicBaloonLight from "@images/tradizionale/comicBaloonLight.png";
import noshadowLight from "@images/tradizionale/noshadowLight.png";

import TitleBanner from "@shared-components/TitleBanner";
import bannerImage from "@images/tradizionale/banner_images/cane_hero_3.jpg";

export const metadata = {
  title: "Come funziona | Canile di Macondo",
  description: "Il nostro percorso per poter adottare" /* change */,
};

export default function page() {
  return (
    <div className={styles.comeFunzionaPage}>
      {/* <section className="first-section"> */}
      <section>
        <TitleBanner imgSrc={bannerImage}>Il nostro percorso</TitleBanner>
        {/* <h1>Il nostro percorso</h1> */}
        <p className="centered heading-p">
          Adottare un cane è come un matrimonio: vogliamo che sia un legame
          duraturo e di successo. <br />
          Per garantirne il successo, abbiamo bisogno di conoscere il più
          possibile le esigenze e lo stile di vita di ogni persona o famiglia,
          così da poter consigliare l’abbinamento migliore possibile.
        </p>
        <ComeFunziona versione="tradizionale" />
        <div className={styles.cardContainer}>
          <ReadyToAdoptCard
            dogSrc={noshadowLight}
            comicBaloonTheme={comicBaloonLight}
            btnTheme="white"
            href="/tradizionale/adozioni/i-nostri-ospiti"
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
