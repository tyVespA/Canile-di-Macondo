import styles from "./page.module.css";
import ReadyToAdoptCard from "@shared-components/ReadyToAdoptCard";
import comicBaloonLight from "@images/tradizionale/comicBaloonLight.png";
import noshadowLight from "@images/tradizionale/noshadowLight.png";

export const metadata = {
  title: "Come funziona | Canile di Macondo",
  description: "Benvenuti!" /* change */,
};

export default function page() {
  return (
    <div className={styles.comeFunzionaPage}>
      <section className="first-section">
        <h1>Il processo di adozione</h1>
        <h2>
          Adopting a new cat or dog is like a marriage. <br /> We want it to be
          a life-long, successful partnership.
        </h2>
        <p>
          To ensure its success we need to know as much as possible about each
          individual/family’s needs and lifestyle, so that we can recommend the
          best possible match.
        </p>
        <h2>Important Points to Consider:</h2>
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
          dogSrc={noshadowLight}
          comicBaloonTheme={comicBaloonLight}
        />
      </section>
    </div>
  );
}
