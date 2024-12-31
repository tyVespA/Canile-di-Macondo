// export const runtime = "edge";
import { db } from "../../../../../lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const animal = db.find((item) => item.id === id);
  return {
    title: `${animal?.nome} | Canile di Macondo` || "Errore",
    description: "bau!",
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const animal = db.find((item) => item.id === id);

  if (!animal) {
    return notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <h1>{animal.nome}</h1>
      {/* <Image src={animal.img1} alt={animal.nome} /> */}
      <img src={animal.img1} alt={animal.nome} />
      <p>Taglia: {animal.taglia}</p>
      <p>Sesso: {animal.sesso}</p>
      <p>Anno di nascita: {animal.anno_di_nascita}</p>
      <p>{animal.descrizione}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return db.map((animal) => ({
    id: animal.id,
  }));
}
