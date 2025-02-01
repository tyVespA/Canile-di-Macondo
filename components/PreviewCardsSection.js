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
  sezione = "ospiti",
}) {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  const sezioneLinksTo =
    sezione === "ospiti" ? "i-nostri-ospiti" : "casa-dolce-casa";

  return (
    <section className={styles.previewCardsSectionContainer}>
      {data.map((item, index) => (
        <div key={index}>
          <Link href={`/adozioni/${sezioneLinksTo}/${item.id}`}>
            <PreviewCard
              item={data[index]}
              backgroundColor={backgroundColor}
              color={color}
              sezione={sezione}
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
