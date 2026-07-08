import Dexie, { Table } from "dexie";

export interface FavoriteRecipeRecord {
  recipeId: string;
  createdAt: string;
}

class CreamiBookDatabase extends Dexie {
  favorites!: Table<FavoriteRecipeRecord, string>;

  constructor() {
    super("CreamiBookDatabase");

    this.version(1).stores({
      favorites: "recipeId, createdAt"
    });
  }
}

export const db = new CreamiBookDatabase();
