"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dog } from "@phosphor-icons/react/dist/ssr";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import Button from "@shared-components/Button";
import LogoWrittenWhite from "@images/moderna/LogoWrittenWhite.png";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = document.querySelector(
        `.${styles.stickyHeaderContainer}`
      ).offsetHeight;

      if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`${styles.stickyHeaderContainer} ${
        showHeader ? styles.show : styles.hide
      }`}
    >
      <header className={`${styles.header} max-width-container`}>
        <div className={styles.logoContainer}>
          <Link href="/moderna">
            <Dog size={45} weight="duotone" />
            <Image
              src={LogoWrittenWhite}
              alt="logo"
              className={styles.writtenLogo}
            />
          </Link>
        </div>
        <Navbar />
        <div className={styles.ctaButtons}>
          <Button theme="dark">Dona</Button>
          <Button theme="light">Adotta</Button>
        </div>
      </header>
    </div>
  );
}
