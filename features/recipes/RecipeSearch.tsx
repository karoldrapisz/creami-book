"use client";

import { useMemo, useState } from "react";
import RecipeCard from "@/components/recipe/RecipeCard";
import EmptyState from "@/components/common/EmptyState";
import { categories, recipes } from "@/features/recipes/recipes";
import { Recipe, RecipeCategory } from "@/types/recipe";

type SortOption = "rating" | "kcal" | "protein" | "name";

export default function RecipeSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<RecipeCategory | "all">("all");
  const [sort, setSort] = useState<SortOption>("rating");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    return recipes
      .filter((recipe) => {
        const categoryMatch = category === "all" || recipe.category === category;

        const text = [
          recipe.name,
          recipe.description,
          recipe.category,
          recipe.program,
          ...recipe.tags,
          ...recipe.ingredients.map((ingredient) => ingredient.name)
        ]
          .join(" ")
          .toLowerCase();

        return categoryMatch && (!q || text.includes(q));
      })
      .sort((a, b) => sortRecipes(a, b, sort));
  }, [query, category, sort]);

  const hasFilters = query || category !== "all" || sort !== "rating";

  function clearFilters() {
    setQuery("");
    setCategory("all");
    setSort("rating");
  }

  return (
    <section className="px-5">
      <div className="mt-6 rounded-3xl border bg-white p-4 shadow-sm">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full bg-transparent text-base outline-none"
          placeholder="🔍 Szukaj składników, nazw lub programu..."
        />

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-sm text-zinc-500">
            Wyniki: <span className="font-semibold text-zinc-900">{results.length}</span>
          </p>

          {hasFilters ? (
            <button
              onClick={clearFilters}
              className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700"
            >
              Wyczyść
            </button>
          ) : null}
        </div>
      </div>

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

      <select
        value={sort}
        onChange={(event) => setSort(event.target.value as SortOption)}
        className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm shadow-sm outline-none"
      >
        <option value="rating">Najwyżej oceniane</option>
        <option value="kcal">Najmniej kcal</option>
        <option value="protein">Najwięcej białka</option>
        <option value="name">Nazwa A-Z</option>
      </select>
      
       <div className="mb-4 flex items-center justify-between">
  <div className="text-sm text-zinc-500">
    Znaleziono{" "}
    <span className="font-bold text-zinc-900">
      {results.length}
    </span>{" "}
    {results.length === 1 ? "przepis" : "przepisów"}
  </div>

  <div className="flex flex-wrap gap-2">
    {category !== "all" && (
      <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-white">
        {categories.find((c) => c.id === category)?.label}
      </span>
    )}

    {query && (
      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
        🔎 {query}
      </span>
    )}
  </div>
</div>
      <div className="mt-5 space-y-4">
        {results.length ? (
          results.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
        ) : (
          <EmptyState
            title="Brak przepisów"
            description="Nie znaleziono żadnego przepisu. Spróbuj zmienić filtry."
          />
        )}
      </div>
    </section>
  );
}

function sortRecipes(a: Recipe, b: Recipe, sort: SortOption) {
  if (sort === "kcal") {
    return a.nutrition.kcal - b.nutrition.kcal;
  }

  if (sort === "protein") {
    return b.nutrition.protein - a.nutrition.protein;
  }

  if (sort === "name") {
    return a.name.localeCompare(b.name, "pl");
  }

  return b.rating - a.rating;
}