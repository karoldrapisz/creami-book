import { db } from "@/db/db";

export async function getPantryItems(): Promise<string[]> {
  const records = await db.pantry.orderBy("createdAt").toArray();
  return records.map((record) => record.name);
}

export async function addPantryItem(name: string): Promise<void> {
  await db.pantry.put({
    name,
    createdAt: new Date().toISOString(),
  });
}

export async function removePantryItem(name: string): Promise<void> {
  await db.pantry.delete(name);
}

export async function togglePantryItem(name: string): Promise<boolean> {
  const current = await db.pantry.get(name);

  if (current) {
    await removePantryItem(name);
    return false;
  }

  await addPantryItem(name);
  return true;
}

export async function clearPantryItems(): Promise<void> {
  await db.pantry.clear();
}