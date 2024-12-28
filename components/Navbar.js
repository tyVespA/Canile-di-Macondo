"use client";

import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  function isActiveFunction(paths, currentPath) {
    return paths.includes(currentPath);
  }

  const adozioniPaths = [
    "/adozioni",
    "/adozioni/come-funziona",
    "/adozioni/i-nostri-ospiti",
    "/adozioni/adozioni-a-distanza",
  ];
  const isAdozioniActive = isActiveFunction(adozioniPaths, pathname);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? `${styles.active}` : ""}>
            Homepage
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href="/adozioni"
            className={isAdozioniActive ? styles.active : ""}
          >
            Adozioni
          </Link>
          <ul className={styles.subLinks}>
            <li>
              <Link
                href="/adozioni/come-funziona"
                className={
                  pathname === "/adozioni/come-funziona"
                    ? `${styles.active}`
                    : ""
                }
              >
                Come funziona
              </Link>
            </li>
            <li>
              <Link href="/">I nostri ospiti</Link>
            </li>
            <li>
              <Link href="/">Adozioni a distanza</Link>
            </li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <Link
            href="/come-aiutarci"
            className={pathname === "/come-aiutarci" ? `${styles.active}` : ""}
          >
            Come aiutarci
          </Link>
          <ul className={styles.subLinks}>
            <li>
              <Link href="/">Chi siamo</Link>
            </li>
            <li>
              <Link href="/">Donazioni</Link>
            </li>
            <li>
              <Link href="/">Volontariato</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/contatti"
            className={pathname === "/contatti" ? `${styles.active}` : ""}
          >
            Contatti
          </Link>
        </li>
      </ul>
    </nav>
  );
}
