import styles from "./page.module.css";
import ReadyToAdoptCard from "@shared-components/ReadyToAdoptCard";

export const metadata = {
  title: "Come funziona | Canile di Macondo",
  description: "Benvenuti!" /* change */,
};

export default function page() {
  return (
    <div>
      <h1>come funziona</h1>
      <ReadyToAdoptCard />
    </div>
  );
}
