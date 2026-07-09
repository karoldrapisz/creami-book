"use client";

import { useMemo, useState } from "react";
import RecipeCard from "@/components/recipe/RecipeCard";
import { recipes } from "@/features/recipes/recipes";

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

  function toggle(item: string) {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((value) => value !== item)
        : [...prev, item]
    );
  }

  const matchedRecipes = useMemo(() => {
    return recipes
      .map((recipe) => {
        const required = recipe.ingredients.map((item) =>
          item.name.toLowerCase()
        );

        const matched = required.filter((ingredient) =>
          selected.some((item) => ingredient.includes(item.toLowerCase()))
        );

        const score =
          required.length === 0
            ? 0
            : Math.round((matched.length / required.length) * 100);

        return {
          recipe,
          score,
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [selected]);

  return (
    <section className="px-5 pt-6 pb-28">
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

        <div className="mt-4 space-y-4">
          {matchedRecipes.map(({ recipe, score }) => (
            <div key={recipe.id} className="space-y-2">
              <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                Zgodność: {score}%
              </div>

              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}