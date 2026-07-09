"use client";

import { useEffect, useMemo, useState } from "react";
import RecipeCard from "@/components/recipe/RecipeCard";
import { recipes } from "@/features/recipes/recipes";
import {
  clearPantryItems,
  getPantryItems,
  togglePantryItem,
} from "@/features/pantry/pantry.service";

const pantryGroups = [
  {
    title: "Nabiał",
    items: ["skyr naturalny", "mleko 2%", "śmietanka 30%", "serek light"],
  },
  {
    title: "Owoce",
    items: ["truskawki", "mango", "banan", "borówki"],
  },
  {
    title: "Dodatki",
    items: ["kakao", "erytrytol", "cukier", "wanilia"],
  },
];

export default function PantrySelector() {
  const [selected, setSelected] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getPantryItems().then((items) => {
      setSelected(items);
      setLoaded(true);
    });
  }, []);

  async function toggle(item: string) {
    const active = await togglePantryItem(item);

    setSelected((prev) =>
      active ? [...prev, item] : prev.filter((value) => value !== item)
    );
  }

  async function clearAll() {
    await clearPantryItems();
    setSelected([]);
  }

  const matchedRecipes = useMemo(() => {
    return recipes
      .map((recipe) => {
        const required = recipe.ingredients.map((item) => item.name);

        const matched = required.filter((ingredient) =>
          selected.some((item) =>
            ingredient.toLowerCase().includes(item.toLowerCase())
          )
        );

        const missing = recipe.ingredients.filter(
          (ingredient) =>
            !selected.some((item) =>
              ingredient.name.toLowerCase().includes(item.toLowerCase())
            )
        );

        const score =
          required.length === 0
            ? 0
            : Math.round((matched.length / required.length) * 100);

        return {
          recipe,
          score,
          missing,
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [selected]);

  if (!loaded) {
    return (
      <section className="px-5 pt-6 pb-28">
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          Ładowanie składników...
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 pt-6 pb-28">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-zinc-500">
          Wybrane:{" "}
          <span className="font-bold text-zinc-900">{selected.length}</span>
        </p>

        {selected.length > 0 && (
          <button
            onClick={clearAll}
            className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium"
          >
            Wyczyść
          </button>
        )}
      </div>

      <div className="space-y-5">
        {pantryGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-[2rem] border bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-bold">{group.title}</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const active = selected.includes(item);

                return (
                  <button
                    key={item}
                    onClick={() => toggle(item)}
                    className={
                      "rounded-full px-4 py-2 text-sm font-medium transition " +
                      (active
                        ? "bg-zinc-900 text-white"
                        : "bg-zinc-100 text-zinc-700")
                    }
                  >
                    {active ? "✓ " : ""}
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-black">
          Pasujące przepisy: {matchedRecipes.length}
        </h2>

        <div className="mt-4 space-y-5">
          {matchedRecipes.map(({ recipe, score, missing }) => (
            <div key={recipe.id} className="space-y-3">
              <div
                className={
                  "rounded-full px-4 py-2 text-sm font-bold " +
                  (score === 100
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700")
                }
              >
                Zgodność: {score}%
              </div>

              <RecipeCard recipe={recipe} />

              {missing.length > 0 && (
                <div className="rounded-3xl border bg-white p-4 shadow-sm">
                  <p className="text-sm font-bold text-zinc-700">Brakuje:</p>

                  <ul className="mt-2 space-y-1 text-sm text-zinc-500">
                    {missing.map((ingredient) => (
                      <li key={ingredient.name}>
                        • {ingredient.amount} {ingredient.unit}{" "}
                        {ingredient.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}