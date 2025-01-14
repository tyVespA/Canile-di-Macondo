import styles from "./page.module.css";
import Image from "next/image";
import inCostruzione from "@images/cane-drawing-page.png";
import TitleBanner from "@shared-components/TitleBanner";
import testImage from "@images/tradizionale/hero_image.jpg";

export const metadata = {
  title: "Casa dolce casa | Canile di Macondo",
  description:
    "Ricordiamo con affetto i nostri amici che hanno trovato una famiglia pronta a dar loro tutto l’amore che meritano.",
};

export default function page() {
  return (
    <div className={styles.casaDolceCasaPage}>
      <section className="first-section">
        {/* <TitleBanner imgSrc={testImage}>Un rifugio temporaneo, una casa per sempre</TitleBanner> */}
        <div className={styles.title}>
          <h1>Un rifugio temporaneo, una casa per sempre</h1>
          <p>
            Ricordiamo con affetto i nostri amici che hanno trovato una famiglia
            pronta a dar loro tutto l’amore che meritano. <br /> Da un rifugio
            accogliente a una casa per sempre, ogni viaggio è un inno alla
            speranza.
          </p>
        </div>
        <Image src={inCostruzione} alt="Pagina in costruzione"></Image>
      </section>
    </div>
  );
}
