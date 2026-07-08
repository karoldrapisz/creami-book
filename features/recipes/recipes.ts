import rawRecipes from "@/data/recipes.json";
import { Recipe, RecipeCategory } from "@/types/recipe";

export const recipes = rawRecipes as Recipe[];

export const categories: { id: RecipeCategory | "all"; label: string }[] = [
  { id: "all", label: "Wszystkie" },
  { id: "fit", label: "Fit" },
  { id: "sorbet", label: "Sorbety" },
  { id: "cream", label: "Śmietankowe" },
  { id: "protein", label: "Proteinowe" },
  { id: "kids", label: "Dla dzieci" },
  { id: "vegan", label: "Vegan" }
];

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function searchRecipes(query: string, category: RecipeCategory | "all") {
  const q = query.trim().toLowerCase();

  return recipes.filter((recipe) => {
    const categoryMatch = category === "all" || recipe.category === category;

    const textMatch =
      !q ||
      recipe.name.toLowerCase().includes(q) ||
      recipe.description.toLowerCase().includes(q) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      recipe.ingredients.some((item) => item.name.toLowerCase().includes(q));

    return categoryMatch && textMatch;
  });
}
