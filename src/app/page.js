import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      home <Link href="/adotta">adotta</Link>
    </div>
  );
}
