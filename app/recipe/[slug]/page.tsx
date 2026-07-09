import Link from "next/link";
import { notFound } from "next/navigation";
import AppShell from "@/components/common/AppShell";
import FavoriteButton from "@/features/favorites/FavoriteButton";
import IngredientChecklist from "@/features/recipes/IngredientChecklist";
import { getRecipeBySlug } from "@/features/recipes/recipes";
import StepsChecklist from "@/features/recipes/StepsChecklist";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function RecipeDetailsPage({ params }: Props) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <AppShell>
      <section className="px-5 pt-6">
        <Link
          href="/recipes"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-800"
        >
          ← Wróć do przepisów
        </Link>

        <div className="mt-5 overflow-hidden rounded-[2rem] border bg-white shadow-sm">
          <div className="relative flex h-60 items-center justify-center bg-gradient-to-br from-orange-200 via-pink-100 to-red-100">
            <span className="text-8xl">🍦</span>

            <div className="absolute right-5 top-5">
              <FavoriteButton recipeId={recipe.id} />
            </div>
          </div>

          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              {recipe.category} • {recipe.program}
            </p>

            <h1 className="mt-2 text-3xl font-black">{recipe.name}</h1>

            <p className="mt-3 text-zinc-600">{recipe.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-4 gap-3">
              <Box label="kcal" value={recipe.nutrition.kcal} />
              <Box label="Białko" value={`${recipe.nutrition.protein}g`} />
              <Box label="Węgle" value={`${recipe.nutrition.carbs}g`} />
              <Box label="Tłuszcz" value={`${recipe.nutrition.fat}g`} />
            </div>
          </div>
        </div>

        <section className="mt-6 rounded-[2rem] border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Składniki</h2>
          <IngredientChecklist ingredients={recipe.ingredients} />
        </section>

        <section className="mt-6 mb-24 rounded-[2rem] border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Instrukcja</h2>

          <StepsChecklist steps={recipe.steps} />
        </section>
      </section>
    </AppShell>
  );
}

function Box({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl bg-zinc-100 p-4 text-center">
      <div className="text-lg font-black">{value}</div>
      <div className="mt-1 text-xs text-zinc-500">{label}</div>
    </div>
  );
}