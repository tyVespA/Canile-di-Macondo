import styles from "./DonateCard.module.css";
import { Bank, PiggyBank, MoneyWavy } from "@phosphor-icons/react/dist/ssr";

export default function DonateCard() {
  return (
    <div className={styles.otherDonationsSection}>
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
      <div className={styles.div3}>
        <MoneyWavy size={40} weight="fill" />
        <h3>Contanti</h3>
        <p>
          <br />
          Puoi fare la tua donazione direttamente in canile, ti sarà rilasciata
          la regolare ricevuta
        </p>
      </div>
    </div>
  );
}
