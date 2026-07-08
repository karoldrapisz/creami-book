import { Recipe } from "@/types/recipe";

export default function RecipeCard({
    recipe
}:{
    recipe:Recipe
}){

return(

<div className="bg-white rounded-xl shadow p-4">

<h2 className="font-bold text-lg">
{recipe.name}
</h2>

<p className="text-sm text-gray-500">
{recipe.category}
</p>

<div className="flex gap-4 mt-4 text-sm">

<span>🔥 {recipe.kcal}</span>

<span>🥩 {recipe.protein}g</span>

</div>

</div>

)

}