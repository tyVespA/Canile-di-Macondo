import styles from "./page.module.css";
import PaypalDonateBtn from "@/src/app/components/PaypalDonateBtn";

export const metadata = {
  title: "Donazioni | Canile di Macondo",
  description: "Fai una donazione al Canile di Macondo",
};

export default function page() {
  return (
    <>
      <h1>donazioni</h1>
      <div className={styles.wrapper}>{/* <PaypalDonateBtn /> */}</div>
    </>
  );
}
