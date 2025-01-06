"use client";

import styles from "./PreviewCardsSection.module.css";
import PreviewCard from "./PreviewCard";
import Link from "next/link";
import useFavorites from "@/utils/useFavorites";
import { useEffect } from "react";

export default function PreviewCardsSection({ data }) {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <>
      <h2>previewCardsSection</h2>
      <section className={styles.previewCardsSectionContainer}>
        {data.map((item, index) => (
          <div key={index}>
            <Link href={`/tradizionale/adozioni/i-nostri-ospiti/${item.id}`}>
              <PreviewCard item={data[index]} />
            </Link>
            {/* <button
              onClick={() =>
                isFavorite(item.id)
                  ? removeFavorite(item.id)
                  : addFavorite(item.id)
              }
            >
              {isFavorite(item.id)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button> */}
          </div>
        ))}
      </section>
    </>
  );
}
