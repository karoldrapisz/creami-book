"use client";

import { useCallback, useEffect, useState } from "react";
import { getFavoriteIds, toggleFavorite } from "@/features/favorites/favorite.service";

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useCallback(async () => {
    const ids = await getFavoriteIds();
    setFavoriteIds(ids);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const toggle = useCallback(async (recipeId: string) => {
    await toggleFavorite(recipeId);
    await refresh();
  }, [refresh]);

  const isFavorite = useCallback(
    (recipeId: string) => favoriteIds.includes(recipeId),
    [favoriteIds]
  );

  return { favoriteIds, isFavorite, isLoading, toggle, refresh };
}
