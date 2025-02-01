"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import {
  CaretDown,
  List,
  X,
  Bone,
  PawPrint,
} from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/Button";

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

  const [openSubLinks, setOpenSubLinks] = useState({
    adozioni: false,
    comeAiutarci: false,
  });

  function toggleSubLinks(section) {
    setOpenSubLinks((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  }

  useEffect(() => {
    setOpenSubLinks({
      adozioni: isAdozioniActive,
      comeAiutarci: isComeAiutarciActive,
    });
  }, [pathname, isAdozioniActive, isComeAiutarciActive]);

  //   move menuButtons in Header and lift the state (?)

  const [desktopDropdownClicked, setDesktopDropdownClicked] = useState(false);
  useEffect(() => {
    // Reset the dropdown state when navigating to another page
    setTimeout(() => {
      setDesktopDropdownClicked(false);
    }, 300);
  }, [pathname]);

  const handleLinkClick = (linkPath) => {
    if (pathname !== linkPath) {
      // If it's not the current page, set the dropdown state to closed
      setDesktopDropdownClicked(true);
    }
  };

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
            <span
              onClick={() => toggleSubLinks("adozioni")}
              className={`${styles.parentLink} ${styles.mainLink} ${
                isAdozioniActive ? styles.active : ""
              } ${styles.skipUnderline}`}
            >
              Adozioni <CaretDown size={15} weight="bold" />
            </span>
            <ul
              className={`${styles.subLinks} ${
                openSubLinks.adozioni || isAdozioniActive
                  ? styles.subLinksOpened
                  : styles.subLinksClosed
              } ${desktopDropdownClicked ? styles.closeDesktopDropdown : ""} `}
            >
              <li>
                <Link
                  onClick={() => handleLinkClick("/adozioni/come-funziona")}
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
                  onClick={() => handleLinkClick("/adozioni/i-nostri-ospiti")}
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
                  onClick={() => handleLinkClick("/adozioni/casa-dolce-casa")}
                  href="/adozioni/casa-dolce-casa"
                  className={
                    pathname === "/adozioni/casa-dolce-casa"
                      ? `${styles.active}`
                      : ""
                  }
                >
                  Casa dolce casa
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/come-aiutarci"
              className={`${
                pathname === "/come-aiutarci" ? styles.active : ""
              } ${styles.mainLink}`}
            >
              Come aiutarci
            </Link>
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
          <div className={styles.ctaButtons}>
            <Link
              href="/come-aiutarci"
              className={`${
                pathname === "/come-aiutarci" ? styles.btnHidden : ""
              }`}
            >
              <Button theme="white">
                Dona <Bone size={25} weight="fill" />
              </Button>
            </Link>
            <Link
              href="/adozioni/i-nostri-ospiti"
              className={`${
                pathname === "/adozioni/i-nostri-ospiti" ? styles.btnHidden : ""
              }`}
            >
              <Button theme="light">
                Adotta <PawPrint size={25} weight="fill" />
              </Button>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
}
