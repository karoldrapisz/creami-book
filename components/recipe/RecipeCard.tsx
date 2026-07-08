import Link from "next/link";
import { Star } from "lucide-react";
import FavoriteButton from "@/features/favorites/FavoriteButton";
import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <article className="relative rounded-3xl border bg-white p-5 shadow-sm transition hover:scale-[1.01]">
      <div className="absolute right-4 top-4 z-10">
        <FavoriteButton recipeId={recipe.id} size="sm" />
      </div>

      <Link href={`/recipe/${recipe.slug}`} className="block pr-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              {recipe.category} • {recipe.program}
            </p>
            <h2 className="mt-1 text-xl font-bold">{recipe.name}</h2>
            <p className="mt-1 line-clamp-2 text-sm text-zinc-500">
              {recipe.description}
            </p>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-sm">
            <Star size={14} />
            {recipe.rating}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 text-center text-sm">
          <Macro label="kcal" value={recipe.nutrition.kcal} />
          <Macro label="B" value={`${recipe.nutrition.protein}g`} />
          <Macro label="W" value={`${recipe.nutrition.carbs}g`} />
          <Macro label="T" value={`${recipe.nutrition.fat}g`} />
        </div>
      </Link>
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
