// export const runtime = "edge";
import { db } from "@lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { calculateAge } from "@/utils/calculateAge";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import HelpCard from "@/components/HelpCard";
import PreviewCardsSection from "@/components/PreviewCardsSection";
import FilterSimpler from "@/components/FilterSimpler";
import Slideshow from "@/components/Slideshow";
import AOSComponent from "@/components/AOSComponent";

import {
  GenderMale,
  GenderFemale,
  Cake,
  Ruler,
  Bug,
  Circuitry,
  Syringe,
  GenderNeuter,
} from "@phosphor-icons/react/dist/ssr";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const cane = db.find((item) => item.id === id);
  return {
    title: `${cane?.nome} | Canile di Macondo` || "Errore",
    description: `Scopri la storia di ${cane.nome}`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const cane = db.find((item) => item.id === id);
  const age = calculateAge(
    cane.anno_di_nascita,
    cane.mese_di_nascita,
    cane.sesso
  );
  const rowOrColumn = cane.descrizione.length > 350 ? "row" : "column";

  if (!cane) {
    return notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <section className={`first-section`}>
        <p className={styles.navigation}>
          <Link href="/adozioni/i-nostri-ospiti">I nostri ospiti</Link> &gt;{" "}
          {cane.nome}
        </p>
        <div className={styles.mainContent}>
          <Slideshow images={cane.images} />
          <div className={styles.textContainer}>
            <h1>{cane.nome}</h1>

            <div className={styles.mainTags}>
              <Tag borderColor="var(--surface)" iconColor="svgColorBackground">
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
              <Tag borderColor="var(--surface)" iconColor="svgColorBackground">
                <Cake size={55} weight="fill" />
                {age}
              </Tag>
            </div>

            <p className={styles.descrizione}>{cane.descrizione}</p>

            <div className={styles.tagsAndBtn}>
              <div>
                {cane.sesso.toLowerCase() === "maschio" ? (
                  <div
                    className={`${styles.secondaryTags} ${styles[rowOrColumn]}`}
                  >
                    {" "}
                    <p>
                      <GenderNeuter size={34} />{" "}
                      {cane.sterilizzato ? "Sterilizzato" : "Non sterilizzato"}{" "}
                    </p>
                    <p>
                      <Bug size={34} weight="fill" />{" "}
                      {cane.sverminato ? "Sverminato" : "Non sverminato"}{" "}
                    </p>
                    <p>
                      <Syringe size={34} />{" "}
                      {cane.vaccinato ? "Vaccinato" : "Non vaccinato"}{" "}
                    </p>
                    <p>
                      <Circuitry size={34} weight="fill" />{" "}
                      {cane.microchip
                        ? "Dotato di microchip"
                        : "Senza microchip"}{" "}
                    </p>{" "}
                  </div>
                ) : (
                  <div
                    className={`${styles.secondaryTags} ${styles[rowOrColumn]}`}
                  >
                    {" "}
                    <p>
                      <GenderNeuter size={34} />{" "}
                      {cane.sterilizzato ? "Sterilizzata" : "Non sterilizzata"}{" "}
                    </p>
                    <p>
                      <Bug size={34} weight="fill" />{" "}
                      {cane.sverminato ? "Sverminata" : "Non sverminata"}{" "}
                    </p>
                    <p>
                      <Syringe size={34} />{" "}
                      {cane.vaccinato ? "Vaccinata" : "Non vaccinata"}{" "}
                    </p>
                    <p>
                      <Circuitry size={34} weight="fill" />{" "}
                      {cane.microchip
                        ? "Dotata di microchip"
                        : "Senza microchip"}{" "}
                    </p>{" "}
                  </div>
                )}
              </div>
              <Link
                href={{
                  pathname: "/contatti",
                  hash: "form",
                  query: {
                    dogName: cane.nome,
                  },
                }}
              >
                <Button theme="white">Richiedi informazioni</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.ospitiSimili}>
        <h2>Altri ospiti con caratteristiche simili </h2>
        <FilterSimpler
          cane={cane}
          backgroundColor="var(--accent-three)"
          color="var(--text-light)"
        />
      </section>
      {/* <HelpCard /> */}
    </div>
  );
}

export async function generateStaticParams() {
  return db.map((cane) => ({
    id: cane.id,
  }));
}
