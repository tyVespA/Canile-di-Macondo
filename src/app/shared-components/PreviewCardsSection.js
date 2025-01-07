"use client";

import styles from "./PreviewCardsSection.module.css";
import PreviewCard from "./PreviewCard";
import Link from "next/link";
import useFavorites from "@/utils/useFavorites";
import { useEffect } from "react";

export default function PreviewCardsSection({
  data,
  backgroundColor,
  color,
  versione,
}) {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <section className={styles.previewCardsSectionContainer}>
      {data.map((item, index) => (
        <div key={index}>
          <Link href={`/${versione}/adozioni/i-nostri-ospiti/${item.id}`}>
            <PreviewCard
              item={data[index]}
              backgroundColor={backgroundColor}
              color={color}
            />
          </Link>
          {/* <button
            onClick={() =>
              isFavorite(item.id)
                ? removeFavorite(item.id)
                : addFavorite(item.id)
            }
          >
            {isFavorite(item.id) ? "Remove from Favorites" : "Add to Favorites"}
          </button> */}
        </div>
      ))}
    </section>
  );
}
