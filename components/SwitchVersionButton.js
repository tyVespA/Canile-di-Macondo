"use client";
import { usePathname } from "next/navigation";
import styles from "./SwitchVersionButton.module.css";

export default function SwitchVersionButton() {
  const pathname = usePathname();
  const isTraditional = pathname.startsWith("/tradizionale");

  const handleClick = () => {
    const newPath = isTraditional
      ? pathname.replace("/tradizionale", "/moderna")
      : pathname.replace("/moderna", "/tradizionale");

    window.location.href = newPath; // Force a full-page reload
  };

  return (
    <button onClick={handleClick} className={styles.switchVersionButton}>
      {isTraditional ? "Versione colorata →" : "Versione chiara  →"}
    </button>
  );
}
