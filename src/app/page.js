import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import FullWidthBg from "@/components/FullWidthBg";
import Button from "@/components/Button";
import Spacer from "@/components/Spacer";
import InfoCard from "@/components/InfoCard";
import Counter from "@/components/Counter";
import PreviewCardsSection from "@/components/PreviewCardsSection";
import PaypalButton from "@/components/PaypalButton";
import Testimonial from "@/components/Testimonial";
import TestimonialsSection from "@/components/TestimonialsSection";

import AOSComponent from "@/components/AOSComponent";

import {
  HouseLine,
  Heart,
  CalendarDots,
  Bank,
  PiggyBank,
  MoneyWavy,
  Globe,
  Clover,
} from "@phosphor-icons/react/dist/ssr";

import { db } from "@/lib/db";
const slicedDb = db.slice(0, 3);

export const metadata = {
  title: "Home | Canile di Macondo",
  description:
    "Ispirato alla città incantata di Cent’anni di solitudine, il nostro rifugio è il luogo dove la magia delle seconde possibilità prende vita.",
};

export default function Home() {
  return (
    <div>
      <section className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1>Benvenuti al Canile di Macondo</h1>
          <p style={{ marginBottom: "10px" }}>
            Ispirato alla città incantata di Cent’anni di solitudine, il nostro
            rifugio è il luogo dove la magia delle seconde possibilità prende
            vita. <br />{" "}
          </p>
          <p style={{ marginBottom: "20px" }}>
            Un rifugio fatto di amore, dedizione e speranza per i nostri amici a
            quattro zampe.
          </p>

          <div className={styles.heroButtonsContainer}>
            <AOSComponent animationType="fade-up">
              <div className={styles.firstLink}>
                <Link href="/adozioni/i-nostri-ospiti">
                  <Button theme="light" paddingInline="37.5px">
                    Incontra i nostri ospiti
                  </Button>
                </Link>
              </div>
            </AOSComponent>
            <AOSComponent animationType="fade-up" delay="200">
              <Link href="/come-aiutarci">
                <Button theme="dark">Scopri come puoi aiutare</Button>{" "}
              </Link>
            </AOSComponent>
          </div>
        </div>
        <div></div>
        <div className={styles.heroImage}>
          {/* <Image src={cane_hero_1} alt="" /> */}
        </div>
      </section>
      {/* <FullWidthBg bgColor="var(--accent-one)"> */}

      <section className={styles.section2}>
        <h2>La nostra missione</h2>
        <p style={{ marginBottom: "25px" }}>
          Il nostro obiettivo principale è quello di creare un legame unico tra
          gli animali e le persone. Non si tratta solo di trovare una casa per i
          nostri ospiti, ma di costruire relazioni basate sulla fiducia, sul
          rispetto e sull’amore reciproco. Ogni cane che accogliamo ha una
          storia, a volte segnata da difficoltà, ma anche un cuore pieno di
          affetto da donare.
        </p>
        <h3>Cosa facciamo</h3>
        <div className="infoCardsSection">
          <AOSComponent>
            <InfoCard
              title="Accoglienza e cura"
              text="Forniamo un ambiente sicuro e confortevole per i nostri cani, assicurandoci che ricevano tutte le cure mediche, l’alimentazione e l’amore di cui hanno bisogno."
            >
              {" "}
              <HouseLine size={32} />
            </InfoCard>
          </AOSComponent>
          <AOSComponent delay="200">
            <InfoCard
              title="Percorso di adozione"
              text=" Accompagniamo le famiglie attraverso un processo attento e personalizzato, per garantire un’adozione felice e duratura, rispettando i bisogni di tutti i coinvolti."
            >
              <Heart size={32} />
            </InfoCard>
          </AOSComponent>
          <AOSComponent delay="400">
            <InfoCard
              title="Educazione e sensibilizzazione"
              text="Organizziamo eventi, campagne e attività dedicate per sensibilizzare sull’adozione responsabile e diffondere la cultura del rispetto verso gli animali."
            >
              <CalendarDots size={32} />
            </InfoCard>
          </AOSComponent>
        </div>
      </section>

      <Spacer marginBlock="50px" icon="Heart" />

      <section className={styles.section3}>
        {/* <h2>section3</h2> */}
        <div className={styles.countersSection}>
          <div className={styles.counterContainer}>
            <Counter target="7" duration="500" fontSize="35px" />
            <p>Eventi organizzati</p>
          </div>
          <div className={styles.counterContainer}>
            <Counter target={db.length} duration="1000" fontSize="35px" />
            <p>Ospiti a Macondo</p>
          </div>
          <div className={styles.counterContainer}>
            <Counter
              target="21"
              duration="1500"
              fontSize="35px"
              afterNumber="+"
            />
            <p>Adozioni nell'anno passato</p>
          </div>
        </div>
        <p style={{ marginBottom: "25px" }}>
          Adottare un cane è un percorso emozionante e noi siamo qui per
          guidarti passo dopo passo: dal colloquio conoscitivo fino all’adozione
          definitiva.
        </p>
        <h3>Alcuni dei nostri ospiti</h3>
        <div className={styles.iNostriOspitiContainer}>
          <PreviewCardsSection
            data={slicedDb}
            backgroundColor="var(--accent-three)"
            color="var(--text-light)"
            sezione="ospiti"
          />
          <AOSComponent animationType="fade-up" delay="200">
            <Link href="/adozioni/i-nostri-ospiti">
              <Button theme="light">Incontrali tutti →</Button>
            </Link>
          </AOSComponent>
        </div>
      </section>

      <Spacer />

      <section className={styles.section4}>
        <h2>Vuoi darci una zampa?</h2>
        <p style={{ marginBottom: "25px" }}>
          Dal volontariato alle donazioni, ogni gesto contribuisce a migliorare
          la vita dei nostri amici a quattro zampe.
        </p>
        <div className={styles.otherDonationsSection}>
          <div className={styles.div1}>
            <Globe size={40} weight="fill" />
            <h3 style={{ marginBottom: "0px" }}>Online</h3>
            <div className={styles.paypalButtonContainer}>
              <PaypalButton width="200px" />
            </div>
          </div>
          <div className={styles.div1}>
            <Bank size={40} weight="fill" />
            <h3>Bonifico</h3>
            <p>Iban</p>
            <strong style={{ color: "white" }}>CN91272000000000MACONDO</strong>
            <p>intestato a “Canile di Macondo ODV”</p>
          </div>
          <div className={styles.div2}>
            <PiggyBank size={40} weight="fill" />
            <h3>Versamento</h3>
            <p>c/c postale</p>
            <strong style={{ color: "white" }}>1012MACONDO</strong>
            <p>intestato a “Canile di Macondo ODV”</p>
          </div>
          <div className={styles.div4}>
            <MoneyWavy size={40} weight="fill" />
            <h3>Contanti</h3>
            <p>
              Puoi fare la tua donazione direttamente in canile, ti sarà
              rilasciata la regolare ricevuta
            </p>
            <Link href="/contatti#orari">
              <p style={{ textDecoration: "underline" }}>Orari e posizione →</p>
            </Link>
          </div>
          <div className={styles.div3}>
            <Clover size={40} />
            <h3>Volontariato</h3>
            <p>
              Se ti va di accudire i nostri amici pelosi, portarli a passeggio,
              o aiutarci nelle attività quotidiane del rifugio.
            </p>
            <Link
              href={{
                pathname: "/contatti",
                hash: "form",
                query: {
                  subject: "volontariato",
                },
              }}
            >
              <p style={{ textDecoration: "underline" }}>
                Richiedi informazioni →
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Spacer icon="Bone" />

      <section className={styles.section5}>
        <h2>Storie di rinascita</h2>
        <p className={styles.testimonialsIntro}>
          Ogni adozione è una nuova avventura, per il cane e per la famiglia che
          lo accoglie. Scopri alcune delle nostre storie di successo e lasciati
          ispirare dalla magia di una nuova amicizia.
        </p>

        <div className={styles.testimonialsSection}>
          <TestimonialsSection
            testimonials={[
              <Testimonial
                key="1"
                name="Dalla timidezza alla felicità"
                ospite="luna"
              >
                Luna era una cagnolina timida e riservata, ma con l’amore e la
                pazienza di Sara e Mauro, ha trovato il coraggio di fidarsi. Ora
                passa le sue giornate correndo nei prati e dormendo sul divano
                accanto ai suoi nuovi amici. "Non possiamo immaginare la nostra
                vita senza di lei," raccontano i suoi nuovi genitori.
              </Testimonial>,
              <Testimonial
                key="2"
                name="Un secondo capitolo pieno di amore"
                ospite="rocky"
              >
                Rocky ha trascorso due anni in canile prima di essere adottato
                da Giulia. "Appena l’ho visto, ho capito che era lui," dice
                Giulia. Ora Rocky è un compagno fedele che accompagna la sua
                nuova padrona in ogni avventura, dalle passeggiate in montagna
                alle serate accoccolati davanti al camino.
              </Testimonial>,
              <Testimonial
                key="3"
                name="Da sola, a parte di una grande famiglia"
                ospite="mia"
              >
                Mia è arrivata al Canile di Macondo dopo essere stata trovata
                per strada. Dopo settimane di cure, ha incontrato Alessio e
                Valentina. Oggi Mia vive con loro e i loro due bambini, con cui
                gioca instancabilmente ogni giorno. "Mia è già diventata un
                membro inseparabile della nostra famiglia" dicono Alessio e
                Valentina.
              </Testimonial>,
            ]}
          />
        </div>
        <AOSComponent animationType="fade-up" delay="200">
          <Link href="/adozioni/casa-dolce-casa">
            <Button theme="white">
              I nostri amici e le loro nuove famiglie →
            </Button>
          </Link>
        </AOSComponent>
      </section>
    </div>
  );
}
