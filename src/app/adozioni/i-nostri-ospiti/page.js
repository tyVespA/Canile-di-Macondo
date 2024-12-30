"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { db } from "../../../../public/db";
import PreviewCardsSection from "../../components/PreviewCardsSection";

export default function page() {
  const [filters, setFilters] = useState({
    taglia: "all",
    sesso: "all",
    // add more filters
  });

  const filteredData = db.filter((animal) => {
    if (filters.taglia !== "all" && animal.taglia !== filters.taglia)
      return false;
    if (filters.sesso !== "all" && animal.sesso !== filters.sesso) return false;
    return true;
  });
  return (
    <div>
      <h1>i nostri ospiti</h1>
      <div className={styles.filters}>
        <select
          value={filters.sesso}
          onChange={(e) => setFilters({ ...filters, sesso: e.target.value })}
        >
          <option value="all">All sesso</option>
          <option value="Maschio">Maschio</option>
          <option value="Femmina">Femmina</option>
        </select>
        <select
          value={filters.taglia}
          onChange={(e) => setFilters({ ...filters, taglia: e.target.value })}
        >
          <option value="all">All taglia</option>
          <option value="piccola">piccola</option>
          <option value="media">media</option>
          <option value="grande">grande</option>
        </select>
      </div>
      <div>
        {filteredData.length > 0 ? (
          <PreviewCardsSection data={filteredData} />
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
}
