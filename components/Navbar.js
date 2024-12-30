"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { CaretDown } from "@phosphor-icons/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";

export default function Navbar() {
  const pathname = usePathname();

  function isActiveFunction(paths, currentPath) {
    return paths.includes(currentPath);
  }

  // dà la classe active al mainLink anche se il path è in un sublink
  const adozioniPaths = [
    "/adozioni",
    "/adozioni/come-funziona",
    "/adozioni/i-nostri-ospiti",
    "/adozioni/adozioni-a-distanza",
  ];
  const isAdozioniActive = isActiveFunction(adozioniPaths, pathname);

  const comeAiutarciPaths = [
    "/come-aiutarci",
    "/come-aiutarci/chi-siamo",
    "/come-aiutarci/donazioni",
    "/come-aiutarci/volontariato",
  ];
  const isComeAiutarciActive = isActiveFunction(comeAiutarciPaths, pathname);

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
          <List size={24} weight="bold" />
        </button>
        <button
          className={`${styles.closeButton} ${menuOpen ? "showing" : "hidden"}`}
          onClick={handleOpenMenu}
        >
          <X size={24} weight="bold" />
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
              className={`${pathname === "/" ? styles.active : ""} ${
                styles.mainLink
              }`}
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
              Adozioni <CaretDown size={15} weight="bold" />
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
                <Link
                  href="/adozioni/i-nostri-ospiti"
                  className={
                    pathname === "/adozioni/i-nostri-ospiti"
                      ? `${styles.active}`
                      : ""
                  }
                >
                  I nostri ospiti
                </Link>
              </li>
              <li>
                <Link
                  href="/adozioni/adozioni-a-distanza"
                  className={
                    pathname === "/adozioni/adozioni-a-distanza"
                      ? `${styles.active}`
                      : ""
                  }
                >
                  Adozioni a distanza
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/come-aiutarci/"
              className={`${isComeAiutarciActive ? styles.active : ""} ${
                styles.mainLink
              }`}
            >
              Come aiutarci <CaretDown size={15} weight="bold" />
            </Link>
            <ul className={styles.subLinks}>
              <li>
                <Link
                  href="/come-aiutarci/chi-siamo"
                  className={
                    pathname === "/come-aiutarci/chi-siamo"
                      ? `${styles.active}`
                      : ""
                  }
                >
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link
                  href="/come-aiutarci/donazioni"
                  className={
                    pathname === "/come-aiutarci/donazioni"
                      ? `${styles.active}`
                      : ""
                  }
                >
                  Donazioni
                </Link>
              </li>
              <li>
                <Link
                  href="/come-aiutarci/volontariato"
                  className={
                    pathname === "/come-aiutarci/volontariato"
                      ? `${styles.active}`
                      : ""
                  }
                >
                  Volontariato
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/contatti"
              className={`${pathname === "/contatti" ? styles.active : ""} ${
                styles.mainLink
              }`}
            >
              Contatti
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
