"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/features/favorites/useFavorites";

type Props = {
  recipeId: string;
  size?: "sm" | "md";
};

export default function FavoriteButton({ recipeId, size = "md" }: Props) {
  const { isFavorite, toggle } = useFavorites();
  const active = isFavorite(recipeId);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void toggle(recipeId);
      }}
      aria-label={active ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
      className={
        "inline-flex items-center justify-center rounded-full border bg-white shadow-sm transition active:scale-95 " +
        (size === "sm" ? "h-10 w-10" : "h-12 w-12") +
        " " +
        (active ? "border-red-200 text-red-500" : "border-zinc-200 text-zinc-400")
      }
    >
      <Heart size={size === "sm" ? 18 : 22} fill={active ? "currentColor" : "none"} />
    </button>
  );
}
