import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import FavoriteButton from "@/features/favorites/FavoriteButton";
import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <article className="overflow-hidden rounded-[2rem] border bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative">
        <Image
          src={recipe.image}
          alt={recipe.name}
          width={800}
          height={500}
          className="h-48 w-full object-cover"
        />

        <div className="absolute right-4 top-4">
          <FavoriteButton recipeId={recipe.id} size="sm" />
        </div>

        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold backdrop-blur">
          ⭐ {recipe.rating}
        </div>
      </div>

      <Link href={`/recipe/${recipe.slug}`} className="block p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
          {recipe.category} • {recipe.program}
        </p>

        <h2 className="mt-2 text-xl font-black">
          {recipe.name}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm text-zinc-500">
          {recipe.description}
        </p>

        <div className="mt-5 grid grid-cols-4 gap-2">
          <Macro label="kcal" value={recipe.nutrition.kcal} />
          <Macro label="B" value={`${recipe.nutrition.protein}g`} />
          <Macro label="W" value={`${recipe.nutrition.carbs}g`} />
          <Macro label="T" value={`${recipe.nutrition.fat}g`} />
        </div>
      </Link>
    </article>
  );
}

function Macro({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl bg-zinc-100 p-3 text-center">
      <div className="font-black">
        {value}
      </div>

      <div className="mt-1 text-xs text-zinc-500">
        {label}
      </div>
    </div>
  );
}