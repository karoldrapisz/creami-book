import Dexie, { Table } from "dexie";

export interface FavoriteRecipeRecord {
  recipeId: string;
  createdAt: string;
}

export interface PantryItemRecord {
  name: string;
  createdAt: string;
}

class CreamiBookDatabase extends Dexie {
  favorites!: Table<FavoriteRecipeRecord, string>;
  pantry!: Table<PantryItemRecord, string>;

  constructor() {
    super("CreamiBookDatabase");

    this.version(2).stores({
      favorites: "recipeId, createdAt",
      pantry: "name, createdAt",
    });
  }
}

export const db = new CreamiBookDatabase();