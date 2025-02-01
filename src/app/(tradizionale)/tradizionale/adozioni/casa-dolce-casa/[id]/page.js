// export const runtime = "edge";
import { adottati_db } from "@lib/adottati_db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { calculateAge } from "@/utils/calculateAge";
import Button from "@/src/app/components/Button";
import Tag from "@/src/app/components/Tag";
import HelpCard from "@/src/app/components/HelpCard";
import PreviewCardsSection from "@/src/app/components/PreviewCardsSection";
import FilterSimpler from "@/src/app/components/FilterSimpler";
import Slideshow from "@/src/app/components/Slideshow";
import AOSComponent from "@/src/app/components/AOSComponent";

import {
  GenderMale,
  GenderFemale,
  Cake,
  Ruler,
  Dog,
} from "@phosphor-icons/react/dist/ssr";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const cane = adottati_db.find((item) => item.id === id);
  return {
    title: `${cane?.nome} | Canile di Macondo` || "Errore",
    description: `Scopri la storia di ${cane.nome}`,
  };
}

function getNextDogId(currentId, dogs) {
  const currentIndex = dogs.findIndex((dog) => dog.id === currentId);
  const nextIndex = (currentIndex + 1) % dogs.length; // Ricomincia dal primo se è l'ultimo
  return dogs[nextIndex].id; // Ritorna l'ID del cane successivo
}

export default async function Page({ params }) {
  const { id } = await params;
  const cane = adottati_db.find((item) => item.id === id);
  const age = calculateAge(
    cane.anno_di_nascita,
    cane.mese_di_nascita,
    cane.sesso
  );
  const nextDogId = getNextDogId(id, adottati_db);

  if (!cane) {
    return notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <section className={`first-section`}>
        <p className={styles.navigation}>
          <Link href="/tradizionale/adozioni/casa-dolce-casa">
            Casa dolce casa
          </Link>{" "}
          &gt; {cane.nome}
        </p>
        <div className={styles.minHeightContainer}>
          <div className={styles.mainContent}>
            <Slideshow images={cane.images} />
            <div className={styles.textContainer}>
              <h1>{cane.nome}</h1>
              <div className={styles.mainTags}>
                <Tag
                  borderColor="var(--surface)"
                  iconColor="svgColorBackground"
                >
                  <Ruler size={55} weight="fill" /> Taglia {cane.taglia}
                </Tag>
                {cane.sesso.toLowerCase() === "maschio" ? (
                  <Tag
                    borderColor="var(--surface)"
                    iconColor="svgColorBackground"
                  >
                    <GenderMale size={55} /> {cane.sesso}
                  </Tag>
                ) : (
                  <Tag
                    borderColor="var(--surface)"
                    iconColor="svgColorBackground"
                  >
                    <GenderFemale size={55} /> {cane.sesso}
                  </Tag>
                )}
                <Tag
                  borderColor="var(--surface)"
                  iconColor="svgColorBackground"
                >
                  <Cake size={55} weight="fill" />
                  {age}
                </Tag>
              </div>
              <p className={styles.descrizione}>
                {cane.descrizione_dopo_adozione_1}
              </p>
              <p className={styles.descrizione}>
                {cane.descrizione_dopo_adozione_2}
              </p>
              <Link
                href={`/tradizionale/adozioni/casa-dolce-casa/${nextDogId}`}
                className={styles.altraStoriaLink}
              >
                <AOSComponent>
                  <Button paddingInline="40px" theme="white">
                    Leggi un' altra storia a lieto fine
                    <Dog size={30} weight="fill" />
                  </Button>
                </AOSComponent>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return adottati_db.map((cane) => ({
    id: cane.id,
  }));
}
