import { useCallback, useEffect, useState } from 'react';

const KEY = 'horizon-favorites';

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

export default function useFavorites() {
  const [favorites, setFavorites] = useState(read);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favorites));
  }, [favorites]);

  const has = useCallback((id) => favorites.includes(id), [favorites]);

  const toggle = useCallback((id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  }, []);

  return { favorites, has, toggle };
}
