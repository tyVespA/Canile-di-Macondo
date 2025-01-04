"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dog } from "@phosphor-icons/react/dist/ssr";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import Button from "../Button";
import LogoWrittenWhite from "@images/moderna/LogoWrittenWhite.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.stickyHeaderContainer}>
      <header
        className={`${styles.header} max-width-container ${
          scrolled ? styles.scrolled : ""
        }`}
      >
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
