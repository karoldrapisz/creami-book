"use client";

import { useEffect, useState } from "react";
import {
  clearShopping,
  getShoppingItems,
  removeShoppingItem,
  toggleShoppingItem,
  ShoppingItem,
} from "./shopping.service";

export default function ShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  async function load() {
    setItems(await getShoppingItems());
  }

  useEffect(() => {
    load();
  }, []);

  async function toggle(id: string) {
    await toggleShoppingItem(id);
    load();
  }

  async function remove(id: string) {
    await removeShoppingItem(id);
    load();
  }

  async function clear() {
    await clearShopping();
    load();
  }

  return (
    <section className="px-5 pt-6 pb-28">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-black">
          Lista zakupów
        </h2>

        {items.length > 0 && (
          <button
            onClick={clear}
            className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600"
          >
            Wyczyść
          </button>
        )}
      </div>

      {items.length === 0 && (
        <div className="rounded-[2rem] border bg-white p-8 text-center shadow-sm">
          <div className="text-5xl">🛒</div>

          <p className="mt-4 font-bold">
            Lista zakupów jest pusta
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Dodawaj brakujące składniki z ekranu „Mam składniki”.
          </p>
        </div>
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-[2rem] border bg-white p-4 shadow-sm"
          >
            <button
              onClick={() => toggle(item.id)}
              className="flex items-center gap-3"
            >
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                  item.checked
                    ? "bg-green-500 text-white border-green-500"
                    : "border-zinc-300"
                }`}
              >
                {item.checked ? "✓" : ""}
              </div>

              <div className="text-left">
                <p
                  className={
                    item.checked
                      ? "line-through text-zinc-400"
                      : "font-semibold"
                  }
                >
                  {item.name}
                </p>

                <p className="text-xs text-zinc-500">
                  {item.amount}
                </p>
              </div>
            </button>

            <button
              onClick={() => remove(item.id)}
              className="text-red-500"
            >
              Usuń
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}