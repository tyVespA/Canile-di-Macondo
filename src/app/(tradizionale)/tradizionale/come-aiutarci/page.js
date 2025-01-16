import styles from "./page.module.css";
import Image from "next/image";
import TitleBanner from "@shared-components/TitleBanner";
import testImage from "@images/tradizionale/hero_image.jpg";
import Link from "next/link";

import qrCode from "@images/Codice_QR.png";

import PaypalCampagna from "@/src/app/shared-components/PaypalCampagna";
import PaypalButton from "@/src/app/shared-components/PaypalButton";

export default function page() {
  return (
    <div>
      <TitleBanner imgSrc={testImage}>Come aiutarci</TitleBanner>
      <div className={styles.campagnaContainer}>
        <PaypalCampagna />
      </div>
      <div className={styles.buttonContainer}>
        <PaypalButton width="200px" />
      </div>
      <div className={styles.qrCodeContainer}>
        <Image src={qrCode} alt="codice QR"></Image>
      </div>
    </div>
  );
}
