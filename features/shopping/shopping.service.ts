import { db } from "@/db/db";

export interface ShoppingItem {
  id: string;
  name: string;
  amount: string;
  checked: boolean;
}

export async function getShoppingItems(): Promise<ShoppingItem[]> {
  return await db.table("shopping").toArray();
}

export async function addShoppingItem(
  name: string,
  amount: string
): Promise<void> {
  const id = `${name}-${amount}`;

  const exists = await db.table("shopping").get(id);

  if (exists) return;

  await db.table("shopping").put({
    id,
    name,
    amount,
    checked: false,
  });
}

export async function toggleShoppingItem(id: string) {
  const item = await db.table("shopping").get(id);

  if (!item) return;

  await db.table("shopping").put({
    ...item,
    checked: !item.checked,
  });
}

export async function removeShoppingItem(id: string) {
  await db.table("shopping").delete(id);
}

export async function clearShopping() {
  await db.table("shopping").clear();
}