import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import SwitchVersionButton from "./components/SwitchVersionButton";
import { Dog } from "@phosphor-icons/react/dist/ssr";
import FullWidthBg from "./components/FullWidthBg";
import drawing from "@images/cane-drawing.png";

export const metadata = {
  title: "Home | Canile di Macondo",
  description: "Benvenuti!",
};

export default function Home() {
  return (
    <FullWidthBg backgroundColor="hsl(248, 97%, 64%)">
      <div className={styles.pageContainer}>
        <div className={styles.title}>
          <Dog size={75} weight="fill" />
          <h1>Benvenuti al canile di Macondo :)</h1>
        </div>
        <div className={styles.buttonsContainer}>
          <Link href="/moderna">Versione colorata</Link>
          <br />
          <Link href="/tradizionale">Versione chiara</Link>
        </div>
        <Image src={drawing} alt="" className={styles.drawing} />
      </div>
    </FullWidthBg>
  );
}
