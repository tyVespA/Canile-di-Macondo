// export const runtime = "edge";
import { db } from "@lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { calculateAge } from "@/utils/calculateAge";
import Button from "@shared-components/Button";
import Tag from "@shared-components/Tag";
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
    description: "bau!",
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
          <Link href="/tradizionale/adozioni/i-nostri-ospiti">
            I nostri ospiti
          </Link>{" "}
          &gt; {cane.nome}
        </p>
        {/* <Image src={cane.img1} alt={cane.nome} /> */}
        <div className={styles.mainContent}>
          <div className={styles.imagesContainer}>
            <img src={cane.img1} alt={cane.nome} />
          </div>
          <div className={styles.textContainer}>
            <h1>{cane.nome}</h1>

            <div className={styles.mainTags}>
              <Tag borderColor="var(--surface)" iconColor="svgColorBackground">
                <Ruler size={55} weight="fill" /> Taglia {cane.taglia}
              </Tag>
              {cane.sesso.toLowerCase() === "maschio" ? (
                <Tag
                  borderColor="var(--surface) "
                  iconColor="svgColorBackground"
                >
                  <GenderMale size={55} /> {cane.sesso}
                </Tag>
              ) : (
                <Tag
                  borderColor="var(--surface) "
                  iconColor="svgColorBackground"
                >
                  <GenderFemale size={55} /> {cane.sesso}
                </Tag>
              )}
              <Tag borderColor="var(--surface) " iconColor="svgColorBackground">
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
              <Link href="/tradizionale/contatti#form">
                <Button theme="white">Richiedi informazioni</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return db.map((cane) => ({
    id: cane.id,
  }));
}
