import styles from "./page.module.css";
import Image from "next/image";
import inCostruzione from "@images/cane-drawing-page.png";
import TitleBanner from "@/components/TitleBanner";
import PreviewCardsSection from "@/components/PreviewCardsSection";
import cane_hero from "@images/tradizionale/banner_images/cane_hero_6.jpg";
import { db } from "@/lib/db";
import { adottati_db } from "@/lib/adottati_db";
import { Dog } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Casa dolce casa | Canile di Macondo",
  description:
    "Ricordiamo con affetto i nostri amici che hanno trovato una famiglia pronta a dar loro tutto l’amore che meritano.",
};

export default function page() {
  return (
    <div className={styles.casaDolceCasaPage}>
      {/* <section className="first-section"> */}
      <TitleBanner objectPosition="right" imgSrc={cane_hero}>
        Un rifugio temporaneo, una casa per sempre
      </TitleBanner>
      <div className={styles.title}>
        <p className="heading-p">
          Ricordiamo con affetto i nostri amici che hanno trovato una famiglia
          pronta a dar loro tutto l’amore che meritano. <br /> Da un rifugio
          accogliente a una casa per sempre, ogni viaggio è un inno alla
          speranza.
        </p>
        <Dog size={45} weight="duotone" />
      </div>
      <PreviewCardsSection
        data={adottati_db}
        versione="tradizionale"
        sezione="adottati"
        backgroundColor="var(--accent-three)"
        color="var(--text-light)"
      />
    </div>
  );
}
