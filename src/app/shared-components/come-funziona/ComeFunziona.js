import Image from "next/image";
import Link from "next/link";
import styles from "./ComeFunziona.module.css";
import ComeFunzionaText from "./ComeFunzionaText";
import Munia from "@images/foto-varie/Munia.jpg";
import Kara from "@images/foto-varie/Kara.jpg";
import Velo from "@images/foto-varie/Velo.jpg";

export default function ComeFunziona({ versione }) {
  return (
    <div className={styles.comeFunzionaContainer}>
      <div className={styles.imagesSection}>
        <div className={`${styles.imgContainer} ${styles.wideImage}`}>
          <Image src={Munia} alt="Foto di Munia" />
        </div>
        <div className={`${styles.imgContainer} ${styles.narrowImage}`}>
          <Image src={Kara} alt="Foto di Kara" />
        </div>
        <div className={`${styles.imgContainer} ${styles.narrowImage}`}>
          <Image src={Velo} alt="Foto di Velo" />
        </div>
        <div
          className={`${styles.imgContainer} ${styles.wideImage} ${styles.additionalImage}`}
        >
          <Image src={Munia} alt="Foto di Munia" />
        </div>
      </div>
      <div className={styles.textSection}>
        <ComeFunzionaText
          title="Visita il nostro rifugio"
          number="1"
          border="bottom"
        >
          Ti aspettiamo al rifugio per una visita! Potrai vedere da vicino i
          nostri ospiti, scoprire le loro storie e iniziare a immaginare una
          nuova vita insieme a uno di loro. <br />
          <Link href={`/${versione}/contatti`} className="underlined">
            Orari e posizione →
          </Link>
        </ComeFunzionaText>
        <ComeFunzionaText
          title="Colloquio conoscitivo"
          number="2"
          border="bottom"
        >
          Durante il colloquio conoscitivo, raccogliamo informazioni sulla tua
          famiglia, il tuo stile di vita e le tue aspettative. Questo ci aiuta a
          individuare il cane più adatto a te, garantendo un’adozione felice e
          duratura per entrambi.
        </ComeFunzionaText>
        <ComeFunzionaText
          title="Incontra il tuo nuovo amico"
          number="3"
          border="bottom"
        >
          Una volta individuato il cane che potrebbe essere il tuo compagno
          ideale, organizziamo un incontro. Qui potrai conoscerlo meglio,
          interagire con lui e valutare se è la scelta giusta per te e la tua
          famiglia.
        </ComeFunzionaText>
        <ComeFunzionaText
          title="Percorso in canile e adozione"
          number="4"
          border="noBorder"
        >
          Prima di portare a casa il tuo nuovo amico, ti guideremo in un breve
          percorso di familiarizzazione. Questo include passeggiate, momenti di
          gioco e consigli pratici per accogliere il cane al meglio. Quando
          tutto è pronto, finalizziamo l’adozione!
        </ComeFunzionaText>
      </div>
    </div>
  );
}
