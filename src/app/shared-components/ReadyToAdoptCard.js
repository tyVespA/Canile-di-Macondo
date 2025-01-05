import styles from "./ReadyToAdoptCard.module.css";
import Image from "next/image";

export default function ReadyToAdoptCard({ dogSrc, comicBaloonTheme }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image src={dogSrc} alt="" />
      </div>
      <div className={styles.ballonContainer}>
        <Image src={comicBaloonTheme} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        ipsum obcaecati at vel. Harum ut maiores, aliquid, tenetur cumque ipsam
        in amet, repudiandae sit fugit ipsum accusamus? Sit, dolores porro?
      </p>
    </div>
  );
}
