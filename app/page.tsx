import { recipes } from "@/data/recipes";
import RecipeCard from "@/components/recipe/RecipeCard";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 pb-24">
      <section className="mx-auto max-w-md px-4 pt-6">
        <h1 className="text-4xl font-black tracking-tight">🍦 CreamiBook</h1>

        <p className="mt-2 text-zinc-600">
          Przepisy do Ninja Creami w porcjach 500 ml.
        </p>

        <input
          className="mt-6 w-full rounded-2xl border bg-white px-4 py-3 shadow-sm outline-none"
          placeholder="Szukaj przepisu..."
        />

        <div className="mt-6 space-y-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <BottomNavigation />
    </main>
  );
}