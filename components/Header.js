import Link from "next/link";
import { PawPrint } from "lucide-react";
import styles from "./Header.module.css";
import Navbar from "./Navbar";

import { Menu } from "lucide-react";
import { X } from "lucide-react";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <PawPrint height={36} width={36} />
      </Link>
      <Navbar />
      <div className={styles.ctaButtons}>
        <button>Dona</button>
        <button>Adotta</button>
      </div>
    </div>
  );
}
