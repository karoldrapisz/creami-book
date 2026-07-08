import { db } from "@/db/db";

export async function getFavoriteIds(): Promise<string[]> {
  const records = await db.favorites.orderBy("createdAt").reverse().toArray();
  return records.map((record) => record.recipeId);
}

export async function isFavorite(recipeId: string): Promise<boolean> {
  const record = await db.favorites.get(recipeId);
  return Boolean(record);
}

export async function addFavorite(recipeId: string): Promise<void> {
  await db.favorites.put({
    recipeId,
    createdAt: new Date().toISOString()
  });
}

export async function removeFavorite(recipeId: string): Promise<void> {
  await db.favorites.delete(recipeId);
}

export async function toggleFavorite(recipeId: string): Promise<boolean> {
  const current = await isFavorite(recipeId);

  if (current) {
    await removeFavorite(recipeId);
    return false;
  }

  await addFavorite(recipeId);
  return true;
}
