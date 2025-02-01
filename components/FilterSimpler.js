"use client";
import { useState } from "react";
import { db } from "@/lib/db";
import styles from "./Filter.module.css";
import PreviewCardsSection from "./PreviewCardsSection";

export default function FilterSimpler({
  cane,
  backgroundColor = "var(--accent-one)",
  color = "var(--text-dark)",
}) {
  const [filterSize, setFilterSize] = useState(true);
  const [filterSex, setFilterSex] = useState(false);
  const [filterAge, setFilterAge] = useState(false);
  const isAnyFilterActive = filterSize || filterSex || filterAge;

  const filteredData = db.filter((dog) => {
    if (!isAnyFilterActive) {
      return false;
    }

    let matches = true;

    if (filterSize) {
      matches = matches && dog.taglia === cane.taglia;
    }

    if (filterSex) {
      matches = matches && dog.sesso === cane.sesso;
    }

    if (filterAge) {
      const caneAnnoDiNascita = Number(cane.anno_di_nascita);
      const dogAnnoDiNascita = Number(dog.anno_di_nascita);
      matches =
        matches &&
        (dogAnnoDiNascita === caneAnnoDiNascita ||
          dogAnnoDiNascita === caneAnnoDiNascita + 1 ||
          dogAnnoDiNascita === caneAnnoDiNascita - 1);
    }

    return matches && dog.id !== cane.id;
  });

  return (
    <>
      <div className={styles.filters} style={{ marginBottom: "25px" }}>
        <label>
          <input
            type="checkbox"
            checked={filterSize}
            onChange={() => setFilterSize((prev) => !prev)}
          />
          Simile taglia
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterSex}
            onChange={() => setFilterSex((prev) => !prev)}
          />
          Stesso sesso
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterAge}
            onChange={() => setFilterAge((prev) => !prev)}
          />
          Coetanei
        </label>
      </div>

      {!isAnyFilterActive ? (
        <div>
          <p style={{ textAlign: "center", marginBottom: "25px" }}>
            Seleziona almeno un filtro per visualizzare altri ospiti
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
      ) : filteredData.length > 0 ? (
        <PreviewCardsSection
          data={filteredData}
          backgroundColor={backgroundColor}
          color={color}
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
    </>
  );
}
