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
        <ComeFunziona />
        <h2 style={{ marginTop: "50px" }}>Important Points to Consider:</h2>
        <ol>
          <li>
            Experience and knowledge of dogs/cats, their behaviour, needs,
            habits, comforts, food, health and exercise;
          </li>
          <li>
            Your family circumstances: <br /> Do you have enough space, time and
            money to care for a dog/cat?
          </li>
          <li>
            Housing conditions: <br /> Are you allowed to keep a pet? Is there
            likely to be trouble with neighbours?
          </li>
          <li>
            On average, how long are you away from home each day/week? Some
            animals left all day alone get stressed out from loneliness;
          </li>
          <li>
            Are you able to make a long-term commitment to this dog/cat?
            Dogs/cats live an average of 18 years;
          </li>
          <li>If you already have a pet, is it neutered?</li>
        </ol>
        <h2>The Adoption Application Procedure</h2>
        <ReadyToAdoptCard
          dogSrc={noshadowDark}
          comicBaloonTheme={comicBaloonDark}
        />
      </section>
      <section>
        <h1>Il processo di adozione</h1>
        {/* <PreviewCardsSection data={db} /> */}
      </section>
    </div>
  );
}
