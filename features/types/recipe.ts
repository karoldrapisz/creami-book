export type RecipeCategory =
  | "fit"
  | "sorbet"
  | "cream"
  | "protein"
  | "kids"
  | "vegan";

export type NinjaProgram =
  | "Ice Cream"
  | "Lite Ice Cream"
  | "Gelato"
  | "Sorbet"
  | "Milkshake"
  | "Re-spin";

export interface RecipeIngredient {
  name: string;
  amount: number;
  unit: "g" | "ml" | "szt" | "łyżeczka" | "łyżka" | "szczypta";
  optional?: boolean;
}

export interface RecipeNutrition {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Recipe {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: RecipeCategory;
  season: string[];
  difficulty: "easy" | "medium" | "hard";
  portionMl: 500;
  prepTimeMinutes: number;
  freezeHours: number;
  program: NinjaProgram;
  ingredients: RecipeIngredient[];
  steps: string[];
  nutrition: RecipeNutrition;
  tags: string[];
  rating: number;
}
