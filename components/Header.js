import Link from "next/link";
import { Dog } from "@phosphor-icons/react/dist/ssr";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import Button from "./Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Dog size={35} weight="duotone" />
        </Link>
      </div>
      <Navbar />
      <div className={styles.ctaButtons}>
        <Button theme="dark">Dona</Button>
        <Button theme="light">Adotta</Button>
      </div>
    </header>
  );
}
