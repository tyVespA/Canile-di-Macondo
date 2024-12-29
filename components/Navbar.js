"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

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

  const [menuOpen, setMenuOpen] = useState(false);

  function handleOpenMenu() {
    setMenuOpen(!menuOpen);
  }

  // Chiude il menu quando si clicca un link
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [pathname]); //  L'effect si attiva quando cambia pathname

  // blocca scrolling quando menu aperto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [menuOpen]);

  //   move menuButtons in Header and lift the state (?)

  return (
    <>
      <div
        className={`${styles.overlay} ${menuOpen && "opacity1"}`}
        onClick={handleOpenMenu}
      ></div>

      <div className={styles.mobileMenuButtons}>
        <button
          className={`${styles.menuButton} ${menuOpen ? "hidden" : "showing"}`}
          onClick={handleOpenMenu}
        >
          <Menu />
        </button>
        <button
          className={`${styles.closeButton} ${menuOpen ? "showing" : "hidden"}`}
          onClick={handleOpenMenu}
        >
          <X />
        </button>
      </div>
      <nav
        className={`${styles.navbar} ${
          menuOpen ? styles.menuOpened : styles.menuClosed
        }`}
      >
        <ul>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? `${styles.active}` : ""}
            >
              Homepage
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/adozioni"
              className={`${isAdozioniActive ? styles.active : ""} ${
                styles.mainLink
              }`}
            >
              Adozioni <ChevronDown width={15} height={15} />
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
                <Link href="/adozioni/i-nostri-ospiti">I nostri ospiti</Link>
              </li>
              <li>
                <Link href="/adozioni/adozioni-a-distanza">
                  Adozioni a distanza
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/come-aiutarci/"
              className={`${
                pathname === "/come-aiutarci" ? styles.active : ""
              } ${styles.mainLink}`}
            >
              Come aiutarci{" "}
              <span className={styles.chevron}>
                <ChevronDown width={15} height={15} />
              </span>
            </Link>
            <ul className={styles.subLinks}>
              <li>
                <Link href="/come-aiutarci/chi-siamo">Chi siamo</Link>
              </li>
              <li>
                <Link href="/come-aiutarci/donazioni">Donazioni</Link>
              </li>
              <li>
                <Link href="/come-aiutarci/volontariato">Volontariato</Link>
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
    </>
  );
}
