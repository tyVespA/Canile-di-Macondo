import styles from "./page.module.css";
import Image from "next/image";
import cane_drawing from "@images/cane-drawing-page.png";

export default function page() {
  return (
    <div className={styles.fourOFourPageTemp}>
      <div></div>
      <div className={styles.footerImage}>
        <Image src={cane_drawing} alt="cane vestito da muratore"></Image>
      </div>
    </div>
  );
}
