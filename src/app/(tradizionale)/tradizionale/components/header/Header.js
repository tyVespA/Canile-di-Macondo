"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dog } from "@phosphor-icons/react/dist/ssr";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import Button from "../Button";
import LogoWrittenBlack from "@images/tradizionale/LogoWrittenBlack.png";

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
    <div
      className={`${styles.stickyHeaderContainer} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <header className={`${styles.header} max-width-container `}>
        <div className={styles.logoContainer}>
          <Link href="/tradizionale">
            <Dog size={50} weight="duotone" />
            <Image
              src={LogoWrittenBlack}
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
