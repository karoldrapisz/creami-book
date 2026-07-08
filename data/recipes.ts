import { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Truskawkowy Cheesecake",
    category: "Fit",
    season: "Lato",
    kcal: 315,
    protein: 31,
    carbs: 18,
    fat: 12,
    ingredients: [
      "250 g skyra",
      "150 ml mleka",
      "100 g truskawek",
      "20 g serka light"
    ],
    instructions: [
      "Zmiksuj wszystkie składniki.",
      "Przelej do pojemnika 500 ml.",
      "Zamroź płasko przez 24 godziny.",
      "Uruchom program Lite Ice Cream.",
      "W razie potrzeby użyj Re-spin."
    ]
  },
  {
    id: 2,
    name: "Czekoladowy Proteinowy",
    category: "Fit",
    season: "Cały rok",
    kcal: 290,
    protein: 34,
    carbs: 12,
    fat: 8,
    ingredients: ["250 g skyra", "150 ml mleka", "15 g kakao", "słodzik"],
    instructions: [
      "Zmiksuj składniki.",
      "Zamroź 24 godziny.",
      "Uruchom Lite Ice Cream."
    ]
  },
  {
    id: 3,
    name: "Mango Sorbet",
    category: "Sorbet",
    season: "Lato",
    kcal: 220,
    protein: 2,
    carbs: 52,
    fat: 1,
    ingredients: ["350 g mango", "100 ml wody", "sok z limonki"],
    instructions: [
      "Zmiksuj mango z wodą i limonką.",
      "Zamroź 24 godziny.",
      "Uruchom Sorbet."
    ]
  }
];