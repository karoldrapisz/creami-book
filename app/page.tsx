import AppShell from "@/components/common/AppShell";
import PageHeader from "@/components/common/PageHeader";
import RecipeCard from "@/components/recipe/RecipeCard";
import { recipes } from "@/features/recipes/recipes";

export default function Home() {
  const featured = recipes.slice(0, 3);

  return (
    <AppShell>
      <PageHeader
        title="🍦 CreamiBook"
        subtitle="Twoja mobilna baza przepisów do Ninja Creami — porcje 500 ml."
      />

      <section className="px-5 pt-6">
        <div className="rounded-[2rem] bg-zinc-900 p-6 text-white">
          <p className="text-sm text-zinc-300">Dziś polecane</p>
          <h2 className="mt-2 text-2xl font-black">Truskawkowy Cheesecake</h2>
          <p className="mt-2 text-sm text-zinc-300">
            Kremowe, fit, wysokobiałkowe. Idealne na lato.
          </p>
        </div>
      </section>

      <section className="px-5 pt-6">
        <h2 className="text-xl font-bold">Polecane przepisy</h2>

        <div className="mt-4 space-y-4">
          {featured.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}