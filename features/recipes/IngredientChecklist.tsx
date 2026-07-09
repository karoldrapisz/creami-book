"use client";

import { useState } from "react";
import { RecipeIngredient } from "@/types/recipe";

type Props = {
  ingredients: RecipeIngredient[];
};

export default function IngredientChecklist({ ingredients }: Props) {
  const [checked, setChecked] = useState<string[]>([]);

  function toggle(name: string) {
    setChecked((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  }

  return (
    <div className="mt-5 space-y-3">
      {ingredients.map((ingredient) => {
        const active = checked.includes(ingredient.name);

        return (
          <button
            key={ingredient.name}
            onClick={() => toggle(ingredient.name)}
            className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition ${
              active
                ? "border-green-500 bg-green-50"
                : "border-zinc-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                  active
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-zinc-300"
                }`}
              >
                {active ? "✓" : ""}
              </div>

              <span
                className={
                  active
                    ? "line-through text-zinc-400"
                    : "font-medium"
                }
              >
                {ingredient.name}
              </span>
            </div>

            <span className="font-semibold">
              {ingredient.amount} {ingredient.unit}
            </span>
          </button>
        );
      })}
    </div>
  );
}