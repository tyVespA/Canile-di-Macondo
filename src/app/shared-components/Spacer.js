import styles from "./Spacer.module.css";
import { PawPrint } from "@phosphor-icons/react/dist/ssr";

export default function Spacer({ marginBlock = "75px" }) {
  return (
    <div className={styles.spacer} style={{ marginBlock }}>
      <PawPrint size={24} weight="fill" fill="#9c6644" />
      <PawPrint size={24} weight="fill" fill="#9c6644" />
      <PawPrint size={24} weight="fill" fill="#9c6644" />
    </div>
  );
}
