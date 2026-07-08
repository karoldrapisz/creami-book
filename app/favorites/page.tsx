"use client";

import AppShell from "@/components/common/AppShell";
import EmptyState from "@/components/common/EmptyState";
import PageHeader from "@/components/common/PageHeader";
import RecipeCard from "@/components/recipe/RecipeCard";
import { useFavorites } from "@/features/favorites/useFavorites";
import { recipes } from "@/features/recipes/recipes";

export default function FavoritesPage() {
  const { favoriteIds, isLoading } = useFavorites();

  const favoriteRecipes = recipes.filter((recipe) =>
    favoriteIds.includes(recipe.id)
  );

  return (
    <AppShell>
      <PageHeader
        title="Ulubione"
        subtitle="Przepisy zapisane lokalnie na tym urządzeniu."
      />

      <section className="px-5 pt-6">
        {isLoading ? (
          <div className="rounded-3xl border bg-white p-6 text-sm text-zinc-500 shadow-sm">
            Ładowanie ulubionych...
          </div>
        ) : favoriteRecipes.length ? (
          <div className="space-y-4">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Brak ulubionych"
            description="Kliknij serce przy przepisie, aby zapisać go tutaj offline."
          />
        )}
      </section>
    </AppShell>
  );
}
