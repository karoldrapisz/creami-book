import { Recipe } from "@/types/recipe";
import RecipeCard from "@/components/recipe/RecipeCard";

type Props = {
  recipes: Recipe[];
};

export default function HorizontalRecipeList({
  recipes,
}: Props) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="min-w-[320px] max-w-[320px]"
        >
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
}