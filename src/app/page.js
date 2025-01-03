import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import SwitchVersionButton from "./shared-components/SwitchVersionButton";

export const metadata = {
  title: "Home | Canile di Macondo",
  description: "Benvenuti!",
};

export default function Home() {
  return (
    <div className={styles.buttonsContainer}>
      <Link href="/moderna">Versione moderna</Link>
      <Link href="/tradizionale">Versione tradizionale</Link>
    </div>
  );
}
