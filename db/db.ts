import Dexie, { Table } from "dexie";

export interface FavoriteRecipeRecord {
  recipeId: string;
  createdAt: string;
}

export interface PantryItemRecord {
  name: string;
  createdAt: string;
}

export interface ShoppingItemRecord {
  id: string;
  name: string;
  amount: string;
  checked: boolean;
}

class CreamiBookDatabase extends Dexie {
  favorites!: Table<FavoriteRecipeRecord, string>;
  pantry!: Table<PantryItemRecord, string>;
  shopping!: Table<ShoppingItemRecord, string>;

  constructor() {
    super("CreamiBookDatabase");

    this.version(3).stores({
      favorites: "recipeId, createdAt",
      pantry: "name, createdAt",
      shopping: "id, checked",
    });
  }
}

export const db = new CreamiBookDatabase();