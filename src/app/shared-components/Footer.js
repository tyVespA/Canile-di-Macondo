import styles from "./Footer.module.css";
import Link from "next/link";
import FullWidthBg from "./FullWidthBg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
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
