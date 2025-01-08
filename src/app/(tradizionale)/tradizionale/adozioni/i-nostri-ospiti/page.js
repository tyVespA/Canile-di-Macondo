"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { db } from "@lib/db";
import PreviewCardsSection from "@shared-components/PreviewCardsSection";
import Filter from "@shared-components/Filter";

export default function page() {
  const anno_corrente = new Date().getFullYear();

  const [filters, setFilters] = useState({
    taglia: [],
    sesso: [],
    età: [],
  });

  const filteredData = db.filter((animal) => {
    const età = anno_corrente - animal.anno_di_nascita;

    if (filters.taglia.length > 0 && !filters.taglia.includes(animal.taglia))
      return false;
    if (filters.sesso.length > 0 && !filters.sesso.includes(animal.sesso))
      return false;
    if (filters.età.length > 0) {
      if (
        filters.età.includes("cucciolo") &&
        età > 1 &&
        !filters.età.includes("adulto") &&
        !filters.età.includes("anziano")
      )
        return false;
      if (
        filters.età.includes("adulto") &&
        (età <= 1 || età > 4) &&
        !filters.età.includes("cucciolo") &&
        !filters.età.includes("anziano")
      )
        return false;
      if (
        filters.età.includes("anziano") &&
        età < 5 &&
        !filters.età.includes("cucciolo") &&
        !filters.età.includes("adulto")
      )
        return false;
    }
    return true;
  });

  return (
    <div className={styles.ospitiPage}>
      <title>I nostri ospiti | Canile di Macondo</title>
      <meta
        name="description"
        content="Scopri i nostri ospiti, i cani in attesa di adozione presso il Canile di Macondo."
      />
      <section className="first-section">
        <h1>i nostri ospiti</h1>

        <Filter filters={filters} setFilters={setFilters} />

        <div>
          {filteredData.length > 0 ? (
            <PreviewCardsSection
              data={filteredData}
              backgroundColor="var(--accent-three)" /* to change */
              color="var(--text-light)"
              versione="tradizionale"
            />
          ) : (
            <p style={{ textAlign: "center", marginBottom: "25px" }}>
              Al momento non abbiamo ospiti con queste caratteristiche!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
