"use client";
import useFavorites from "@/utils/useFavorites";
import { db } from "@/lib/db";
import Image from "next/image";

export default function Page() {
  const { favorites } = useFavorites();

  // Filter full item details based on normalized IDs
  const favoriteItems = db.filter((item) =>
    favorites.some((fav) => fav.toLowerCase() === item.id.toLowerCase())
  );

  return (
    <div>
      <h1>My Favorites</h1>
      {favoriteItems.length > 0 ? (
        favoriteItems.map((item) => (
          <div key={item.id}>
            <h2>{item.nome}</h2>
            <Image
              alt=""
              src={item.img1}
              width={3142 / 10}
              height={3927 / 10}
            />
          </div>
        ))
      ) : (
        <p>You have no favorites yet.</p>
      )}
    </div>
  );
}
