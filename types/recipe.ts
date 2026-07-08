export interface Recipe {
  id: number;
  name: string;
  category: string;
  season: string;

  kcal: number;
  protein: number;
  carbs: number;
  fat: number;

  ingredients: string[];

  instructions: string[];
}