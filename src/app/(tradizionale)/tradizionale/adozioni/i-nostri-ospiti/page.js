"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { db } from "@lib/db";
import PreviewCardsSection from "@shared-components/PreviewCardsSection";
import Filter from "@shared-components/Filter";
import ReadRulesCard from "@shared-components/ReadRulesCard";
import HelpCard from "@/src/app/shared-components/HelpCard";

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

        <ReadRulesCard versione="tradizionale" />

        <Filter filters={filters} setFilters={setFilters} />

        <div>
          {filteredData.length > 0 ? (
            <PreviewCardsSection
              data={filteredData}
              backgroundColor="var(--accent-three)"
              color="var(--text-light)"
              versione="tradizionale"
            />
          ) : (
            <div>
              <p style={{ textAlign: "center", marginBottom: "25px" }}>
                Al momento non abbiamo ospiti con queste caratteristiche!
              </p>
              <div className={styles.svg}>
                <svg
                  width="722"
                  height="800"
                  viewBox="0 0 722 800"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M721.656 726.33C587.921 839.421 461.605 801.277 391.698 750.548C338.848 786.422 287.849 800 241.777 800C160.337 800 94.2927 757.75 60.8105 721.957L140.342 647.01C153.293 660.399 212.915 714.223 297.361 678.11C290.317 663.815 286.026 647.972 286.026 630.901C286.026 571.531 334.183 523.388 393.593 523.388C452.914 523.388 501.134 571.531 501.134 630.901C501.134 648.933 496.278 665.624 488.463 680.484C526.737 696.191 583.603 700.004 651.136 642.931L721.656 726.33ZM591.662 359.284C650.982 359.284 699.148 311.168 699.148 251.798C699.148 192.415 650.978 144.299 591.662 144.299C532.292 144.299 484.09 192.415 484.09 251.798C484.09 311.168 532.292 359.284 591.662 359.284ZM0.343872 246.144C0.343872 110.207 87.7452 0 195.565 0C303.349 0 390.737 110.207 390.737 246.144C390.737 382.063 303.349 492.257 195.565 492.257C87.7452 492.257 0.343872 382.063 0.343872 246.144ZM82.3844 251.798C82.3844 311.168 130.568 359.284 189.884 359.284C249.322 359.284 297.438 311.168 297.438 251.798C297.438 192.415 249.295 144.299 189.884 144.299C130.541 144.299 82.3844 192.388 82.3844 251.798Z"
                    fill="var(--accent-three)"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
        {/* <HelpCard /> */}
      </section>
    </div>
  );
}
