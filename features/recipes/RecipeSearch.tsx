"use client";

import { useMemo, useState } from "react";
import RecipeCard from "@/components/recipe/RecipeCard";
import EmptyState from "@/components/common/EmptyState";
import { categories, searchRecipes } from "@/features/recipes/recipes";
import { RecipeCategory } from "@/types/recipe";

export default function RecipeSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<RecipeCategory | "all">("all");

  const results = useMemo(
    () => searchRecipes(query, category),
    [query, category]
  );

  return (
    <section className="px-5">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="mt-6 w-full rounded-3xl border bg-white px-5 py-4 shadow-sm outline-none"
        placeholder="Szukaj po nazwie, składniku lub tagu..."
      />

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => setCategory(item.id)}
            className={
              "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium " +
              (category === item.id
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-600")
            }
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-4">
        {results.length ? (
          results.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
        ) : (
          <EmptyState
            title="Brak przepisów"
            description="Zmień wyszukiwanie albo kategorię."
          />
        )}
      </div>
    </section>
  );
}
