import Link from "next/link";
import { notFound } from "next/navigation";
import AppShell from "@/components/common/AppShell";
import { getRecipeBySlug } from "@/features/recipes/recipes";

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
        <Link href="/recipes" className="text-sm text-zinc-500">
          ← Wróć do przepisów
        </Link>

        <div className="mt-5 rounded-[2rem] bg-white p-6 shadow-sm border">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
            {recipe.category} • {recipe.program}
          </p>
          <h1 className="mt-2 text-3xl font-black">{recipe.name}</h1>
          <p className="mt-3 text-zinc-600">{recipe.description}</p>

          <div className="mt-6 grid grid-cols-4 gap-2 text-center text-sm">
            <Box label="kcal" value={recipe.nutrition.kcal} />
            <Box label="B" value={`${recipe.nutrition.protein}g`} />
            <Box label="W" value={`${recipe.nutrition.carbs}g`} />
            <Box label="T" value={`${recipe.nutrition.fat}g`} />
          </div>
        </div>

        <section className="mt-6 rounded-[2rem] bg-white p-6 shadow-sm border">
          <h2 className="text-xl font-bold">Składniki</h2>
          <ul className="mt-4 space-y-3">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.name} className="flex justify-between border-b pb-2">
                <span>{ingredient.name}</span>
                <span className="font-semibold">
                  {ingredient.amount} {ingredient.unit}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-6 shadow-sm border">
          <h2 className="text-xl font-bold">Instrukcja</h2>
          <ol className="mt-4 space-y-3">
            {recipe.steps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </section>
    </AppShell>
  );
}

function Box({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl bg-zinc-100 p-3">
      <div className="font-bold">{value}</div>
      <div className="text-xs text-zinc-500">{label}</div>
    </div>
  );
}
