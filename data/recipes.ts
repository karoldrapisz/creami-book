import { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Truskawkowy Cheesecake",
    category: "Desery",
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
      "Zmiksuj.",
      "Zamroź 24h.",
      "Uruchom Lite Ice Cream."
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

    ingredients: [
      "Skyr",
      "Kakao",
      "Mleko"
    ],

    instructions: [
      "Zmiksuj",
      "Zamroź",
      "Creami"
    ]
  }
];