import styles from "./ReadyToAdoptCard.module.css";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function ReadyToAdoptCard({
  dogSrc,
  comicBaloonTheme,
  children,
  btnTheme,
  href,
  paddingInline,
}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image src={dogSrc} alt="" />
      </div>
      <div className={styles.ballonContainer}>
        <Image src={comicBaloonTheme} alt="" />
      </div>
      <p>{children}</p>
      <div className={styles.btnContainer}>
        <Link href={href}>
          <Button theme={btnTheme} paddingInline={paddingInline}>
            I nostri ospiti
          </Button>
        </Link>
      </div>
    </div>
  );
}
