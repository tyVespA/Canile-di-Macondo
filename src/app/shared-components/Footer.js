import styles from "./Footer.module.css";
import Link from "next/link";
import FullWidthBg from "./FullWidthBg";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialsContainer}>
        <Link href="/">
          <FacebookLogo size={32} />
        </Link>
        <Link href="/">
          <InstagramLogo size={32} />
        </Link>
        <Link href="/">
          <YoutubeLogo size={32} />
        </Link>
        <Link href="/">
          <TiktokLogo size={32} />
        </Link>
      </div>
      <p className={styles.copyright}>
        Sito sviluppato da ©{" "}
        <Link
          href="mailto:meyo.studio@outlook.it
            "
          style={{ textDecoration: "underline" }}
        >
          meyo
        </Link>{" "}
        {currentYear}
      </p>
    </footer>
  );
}
