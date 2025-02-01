import Image from "next/image";
import { Suspense } from "react";
import FullWidthBg from "@/components/FullWidthBg";
import styles from "./page.module.css";
import MapWrapper from "@/components/Map/MapWrapper";
import TitleBanner from "@/components/TitleBanner";
import ContattaciForm from "@/components/ContattaciForm";
import bannerImage from "@images/tradizionale/banner_images/cane_hero_1.jpg";
import noshadowLight from "@images/tradizionale/noshadowLight.png";
import noShadowBig from "@images/tradizionale/noShadowBig.png";
import shadowBig from "@images/tradizionale/shadowBig.png";
import AOSComponent from "@/components/AOSComponent";

export const metadata = {
  title: "Contatti | Canile di Macondo",
  description: "Come contattarci e dove ci troviamo",
};

export default function page() {
  return (
    <div className={styles.contattiPage}>
      <TitleBanner imgSrc={bannerImage} objectPosition="right">
        Contatti
      </TitleBanner>

      {/* <section className="first-section"> */}
      <section id="form">
        <p className={`heading-p centered ${styles.headingP}`}>
          Il Canile di Macondo è aperto a tutti: che tu voglia adottare, fare
          volontariato o semplicemente conoscerci, saremo felici di accoglierti!
        </p>
        {/* <h1>Contatti</h1> */}

        <div>
          <h2>Contattaci</h2>
          <p>Telefono: +39 121 333 789</p>
          <p>
            Email:{" "}
            <a href="mailto:info@caniledimacondo.net">
              info@caniledimacondo.net
            </a>
          </p>
          <p>
            oppure compila il form sottostante, ti risponderemo il prima
            possibile!
          </p>
        </div>

        <div className={styles.formSection}>
          <div className={styles.formSectionForm}>
            <Suspense>
              <ContattaciForm />
            </Suspense>
          </div>
          <div className={styles.formSectionImage}>
            <Image src={shadowBig} alt="" />
          </div>
        </div>
      </section>

      <section className={styles.orariSection} id="orari">
        <h2>Orari di apertura</h2>
        <p>Lunedì 9 - 12</p>
        <p>Martedì 9 - 12 e 14 - 18.30</p>
        <p>Mercoledì 9 - 12 e 14 - 18</p>
        <p>Giovedì 9 - 12 e 14 - 18.30</p>
        <p>Venerdì 9 - 12 e 14 - 17.30</p>
        <p>Sabato 9 - 12 e 14 - 18.30</p>
        <p>Domenica 9 - 12</p>
      </section>
      <section className={styles.doveSiamoSection}>
        <h2>Dove siamo</h2>
        <p>Via della Speranza, 100 - 381333 Macondo</p>
        <MapWrapper />
      </section>
    </div>
  );
}
