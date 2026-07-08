import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <article className="rounded-3xl bg-white p-5 shadow-sm border">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase text-zinc-400">
            {recipe.category} • {recipe.season}
          </p>

          <h2 className="mt-1 text-xl font-bold text-zinc-900">
            {recipe.name}
          </h2>
        </div>

        <button className="text-2xl">♡</button>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2 text-center text-sm">
        <Macro label="kcal" value={recipe.kcal} />
        <Macro label="B" value={`${recipe.protein}g`} />
        <Macro label="W" value={`${recipe.carbs}g`} />
        <Macro label="T" value={`${recipe.fat}g`} />
      </div>
    </article>
  );
}

function Macro({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl bg-zinc-100 px-2 py-3">
      <div className="font-bold">{value}</div>
      <div className="text-xs text-zinc-500">{label}</div>
    </div>
  );
}