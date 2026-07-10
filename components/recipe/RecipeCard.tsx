import Image from "next/image";
import Link from "next/link";
import { Clock, Snowflake, Star } from "lucide-react";

import FavoriteButton from "@/features/favorites/FavoriteButton";
import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

const categoryLabels: Record<Recipe["category"], string> = {
  fit: "Fit",
  sorbet: "Sorbet",
  cream: "Śmietankowe",
  protein: "Proteinowe",
  kids: "Dla dzieci",
  vegan: "Vegan",
};

const categoryClasses: Record<Recipe["category"], string> = {
  fit: "bg-emerald-100 text-emerald-700",
  sorbet: "bg-orange-100 text-orange-700",
  cream: "bg-pink-100 text-pink-700",
  protein: "bg-blue-100 text-blue-700",
  kids: "bg-violet-100 text-violet-700",
  vegan: "bg-green-100 text-green-700",
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <Link href={`/recipe/${recipe.slug}`} className="block">
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={800}
            height={500}
            className="h-48 w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-zinc-900 backdrop-blur">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            {recipe.rating}
          </div>
        </Link>

        <div className="absolute right-4 top-4 z-10">
          <FavoriteButton recipeId={recipe.id} size="sm" />
        </div>
      </div>

      <Link href={`/recipe/${recipe.slug}`} className="block p-5">
        <div className="flex flex-wrap gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              categoryClasses[recipe.category]
            }`}
          >
            {categoryLabels[recipe.category]}
          </span>

          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
            {recipe.program}
          </span>
        </div>

        <h2 className="mt-3 text-xl font-black leading-tight">
          {recipe.name}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-500">
          {recipe.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-zinc-600">
          <span className="flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-2">
            <Clock size={14} />
            {recipe.prepTimeMinutes} min
          </span>

          <span className="flex items-center gap-1 rounded-full bg-sky-50 px-3 py-2 text-sky-700">
            <Snowflake size={14} />
            {recipe.freezeHours} h
          </span>

          <span className="rounded-full bg-amber-50 px-3 py-2 text-amber-700">
            {recipe.portionMl} ml
          </span>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-2">
          <Macro
            label="kcal"
            value={recipe.nutrition.kcal}
            className="bg-orange-50 text-orange-700"
          />
          <Macro
            label="B"
            value={`${recipe.nutrition.protein}g`}
            className="bg-blue-50 text-blue-700"
          />
          <Macro
            label="W"
            value={`${recipe.nutrition.carbs}g`}
            className="bg-emerald-50 text-emerald-700"
          />
          <Macro
            label="T"
            value={`${recipe.nutrition.fat}g`}
            className="bg-yellow-50 text-yellow-700"
          />
        </div>
      </Link>
    </article>
  );
}

function Macro({
  label,
  value,
  className,
}: {
  label: string;
  value: string | number;
  className: string;
}) {
  return (
    <div className={`rounded-2xl p-3 text-center ${className}`}>
      <div className="font-black">{value}</div>
      <div className="mt-1 text-xs font-semibold opacity-70">{label}</div>
    </div>
  );
}