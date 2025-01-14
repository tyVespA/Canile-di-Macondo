import FullWidthBg from "@shared-components/FullWidthBg";
import styles from "./page.module.css";
import MapWrapper from "@shared-components/Map/MapWrapper";
import TitleBanner from "@shared-components/TitleBanner";
import ContattaciForm from "@shared-components/ContattaciForm";
import testImage from "@images/tradizionale/hero_image.jpg";

export const metadata = {
  title: "Contatti | Canile di Macondo",
  description: "Come contattarci e dove ci troviamo",
};

export default function page() {
  return (
    <div className={styles.contattiPage}>
      <TitleBanner imgSrc={testImage}>Contatti</TitleBanner>

      {/* <section className="first-section"> */}
      <section>
        {/* <h1>Contatti</h1> */}
        <h2>Chi siamo</h2>
        <p>
          Benvenuti al Canile di Macondo, un luogo dove la magia delle seconde
          possibilità prende vita. Ispirato alla città incantata di Cent’anni di
          solitudine, il nostro rifugio è uno spazio speciale, fatto di amore,
          dedizione e speranza per i nostri amici a quattro zampe.
        </p>
        <p>
          Da anni ci impegniamo a offrire ai cani abbandonati o in difficoltà
          una nuova opportunità di vita. Crediamo che ogni animale meriti una
          famiglia che lo ami e lo protegga, e lavoriamo ogni giorno per
          realizzare questo sogno.
        </p>
        <p>
          Come la città immaginaria di Gabriel García Márquez, il nostro canile
          è un luogo speciale, dove ogni giorno accadono piccoli miracoli. Qui,
          la solitudine si trasforma in compagnia, e la tristezza lascia spazio
          alla gioia di un nuovo inizio
        </p>
        <h2>Cosa facciamo</h2>
        <p>
          Il nostro obiettivo principale è quello di creare un legame unico tra
          gli animali e le persone. Non si tratta solo di trovare una casa per i
          nostri ospiti, ma di costruire relazioni basate sulla fiducia, sul
          rispetto e sull’amore reciproco. Ogni cane che accogliamo ha una
          storia, spesso segnata da difficoltà, ma anche un cuore pieno di
          affetto da donare.
        </p>
        <ul className={styles.ul}>
          <li>
            <strong>Accoglienza e cura</strong>: Forniamo un ambiente sicuro e
            confortevole per i nostri cani, assicurandoci che ricevano tutte le
            cure mediche, l’alimentazione e l’amore di cui hanno bisogno.
          </li>
          <li>
            <strong>Percorso di adozione</strong>: Accompagniamo le famiglie
            attraverso un processo attento e personalizzato, per garantire
            un’adozione felice e duratura.
          </li>
          <li>
            <strong>Educazione e sensibilizzazione:</strong> Organizziamo eventi
            e campagne per promuovere l’adozione responsabile e diffondere la
            cultura del rispetto verso gli animali.
          </li>
        </ul>
        <h2 id="form">Unisciti a noi</h2>
        <p>
          Sei parte fondamentale di questa magia. Che tu decida di adottare,
          fare volontariato, o semplicemente condividere il nostro messaggio, il
          tuo contributo può fare la differenza. Insieme, possiamo costruire un
          mondo migliore, un’amicizia alla volta.
        </p>
        <h2>Contattaci</h2>
        <p>
          Il Canile di Macondo è aperto a tutti: che tu voglia adottare, fare
          volontariato o semplicemente conoscerci, saremo felici di accoglierti!
        </p>
        <p>Via della Speranza, 100 - 381333 Macondo</p>
        <p>Telefono: +39 121 333 789</p>
        <p>
          Email:{" "}
          <a href="mailto:info@caniledimacondo.net">info@caniledimacondo.net</a>
        </p>
        <p></p>

        <ContattaciForm />

        <h2>Orari di apertura</h2>
        <p>Lunedì 9-12</p>
        <p>Da Martedì a Sabato: 9-12 e 14-18</p>
        <p>Domenica 9-12</p>
        <h2>Dove siamo</h2>
        <MapWrapper />
      </section>
    </div>
  );
}
