import AppShell from "@/components/common/AppShell";
import PageHeader from "@/components/common/PageHeader";
import RecipeSearch from "@/features/recipes/RecipeSearch";

export default function RecipesPage() {
  return (
    <AppShell>
      <PageHeader
        title="Przepisy"
        subtitle="Szukaj, filtruj i wybieraj przepisy 500 ml."
      />
      <RecipeSearch />
    </AppShell>
  );
}
