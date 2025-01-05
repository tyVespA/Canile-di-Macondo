import { useEffect, useState } from "react";

const useFavorites = (key = "favorites") => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem(key);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [key]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem(key, JSON.stringify(favorites));
    }
  }, [favorites, key]);

  const addFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites((prev) => [...prev, id]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav !== id));
  };

  const isFavorite = (id) => favorites.includes(id);

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavorites;
