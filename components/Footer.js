import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      ©{" "}
      <Link
        href="mailto:meeyo.dev@gmail.com
"
      >
        {/* ?&body=Ciao!%20Ho%20cliccato%20sul%20link%20del%20sito%20e%20... */}
        Meeyo
      </Link>{" "}
      {currentYear}
    </footer>
  );
}
