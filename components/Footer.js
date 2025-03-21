"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FullWidthBg from "./FullWidthBg";
import {
  Dog,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  TiktokLogo,
  Heart,
} from "@phosphor-icons/react/dist/ssr";

import LogoWrittenWhite from "@images/tradizionale/LogoWrittenWhite.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Dog size={45} weight="duotone" />
              <Image
                src={LogoWrittenWhite}
                alt="logo"
                className={styles.writtenLogo}
              />
            </Link>
          </div>
          <div>
            <p className={styles.copyright}>
              © {currentYear} Canile di Macondo
            </p>
          </div>
        </div>
        <div className={styles.navigation}>
          <div>
            <Link
              href="/adozioni/come-funziona"
              className={
                pathname === "/adozioni/come-funziona" ? styles.currentPath : ""
              }
            >
              Come funziona
            </Link>
            <Link
              href="/adozioni/i-nostri-ospiti"
              className={
                pathname === "/adozioni/i-nostri-ospiti"
                  ? styles.currentPath
                  : ""
              }
            >
              I nostri ospiti
            </Link>
          </div>
          <div>
            <Link
              href="/come-aiutarci"
              className={
                pathname === "/adozioni/come-aiutarci" ? styles.currentPath : ""
              }
            >
              Come aiutarci
            </Link>
            <Link
              href="/contatti"
              className={
                pathname === "/adozioni/contatti" ? styles.currentPath : ""
              }
            >
              Contatti
            </Link>
          </div>
        </div>
        <div className={styles.socials}>
          <p>Seguici sui social !</p>
          <div className={styles.socialsContainer}>
            <Link href="/404temp">
              <FacebookLogo size={32} />
            </Link>
            <Link href="/404temp">
              <InstagramLogo size={32} />
            </Link>
            <Link href="/404temp">
              <YoutubeLogo size={32} />
            </Link>
            <Link href="/404temp">
              <TiktokLogo size={32} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        {/* <div></div> */}
        <div className={styles.bottomContacts}>
          <a href="mailto:info@caniledimacondo.net">info@caniledimacondo.net</a>
          <p>+39 121 333 789</p>
        </div>
        <div className={styles.madeByContainer}>
          <p className={styles.madeBy}>
            Sito sviluppato con <Heart size={15} /> da{" "}
            <Link
              href="mailto:meyo.studio@outlook.it
                "
              style={{ textDecoration: "underline" }}
            >
              meyo
            </Link>{" "}
            {/* {currentYear} */}
            {/* © */}
          </p>
        </div>
      </div>
    </footer>
  );
}
