import styles from "./ReadyToAdoptCard.module.css";
import Image from "next/image";
import noshadow from "@images/noshadow.png";
import comicBaloon from "@images/comicBaloon.png";
import comicBaloonBg from "@images/comicBaloonBg.png";

export default function ReadyToAdoptCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image src={noshadow} alt="" />
      </div>
      <div className={styles.ballonContainer}>
        <Image src={comicBaloonBg} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        ipsum obcaecati at vel. Harum ut maiores, aliquid, tenetur cumque ipsam
        in amet, repudiandae sit fugit ipsum accusamus? Sit, dolores porro?
      </p>
    </div>
  );
}
