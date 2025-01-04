"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Dog } from "@phosphor-icons/react/dist/ssr";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import Button from "../Button";

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
