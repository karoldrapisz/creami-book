import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <div className="max-w-md mx-auto">

        <header className="bg-white sticky top-0 p-5 shadow">

          <h1 className="text-3xl font-bold">
            🍦 CreamiBook
          </h1>

          <input
            placeholder="Szukaj przepisu..."
            className="mt-4 w-full rounded-lg border p-3"
          />

        </header>

        <section className="p-4 space-y-4">

          {recipes.map(recipe=>(
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}

        </section>

      </div>

    </main>
  );
}