"use client";
import useFavorites from "@/utils/useFavorites";
import { db } from "@/lib/db";
import Image from "next/image";
import PreviewCardsSection from "@shared-components/PreviewCardsSection";

export default function Page() {
  const { favorites } = useFavorites();

  // Filter full item details based on normalized IDs
  const favoriteItems = db.filter((item) =>
    favorites.some((fav) => fav.toLowerCase() === item.id.toLowerCase())
  );

  return (
    <div>
      <h1>Preferiti</h1>
      {favoriteItems.length > 0 ? (
        <PreviewCardsSection data={favoriteItems} />
      ) : (
        <p>Non hai ancora nessun preferito!</p>
      )}
    </div>
  );
}
