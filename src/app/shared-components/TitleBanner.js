import styles from "./TitleBanner.module.css";
import Image from "next/image";

export default function TitleBanner({ imgSrc, children }) {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.backgroundImage}>
        <Image src={imgSrc} alt=""></Image>
      </div>
      <h2>{children}</h2>
    </div>
  );
}
