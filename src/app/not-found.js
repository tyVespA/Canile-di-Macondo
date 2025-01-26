import styles from "./not-found.module.css";
import Image from "next/image";
import Link from "next/link";
import cane_drawing from "@images/cane-drawing-page.png";

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <Link href="/tradizionale">
        <h2>Torna alla homepage</h2>
      </Link>
      <Image src={cane_drawing} alt="cane vestito da muratore"></Image>
    </div>
  );
}
