import { PawPrint } from "lucide-react";
import styles from "./Header.module.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className={styles.header}>
      <PawPrint />
      <Navbar />
      <div className={styles.buttons}>
        <button>Dona</button>
        <button>Adotta</button>
      </div>
    </div>
  );
}
