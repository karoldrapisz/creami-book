import Link from "next/link";
import AppShell from "@/components/common/AppShell";
import PageHeader from "@/components/common/PageHeader";
import { categories } from "@/features/recipes/recipes";

const icons: Record<string, string> = {
  fit: "💪",
  protein: "🥛",
  sorbet: "🥭",
  cream: "🍦",
  kids: "🧸",
  vegan: "🌱",
};

export default function CategoriesPage() {
  return (
    <AppShell>
      <PageHeader
        title="Kategorie"
        subtitle="Wybierz rodzaj lodów"
      />

      <section className="grid grid-cols-2 gap-4 px-5 pt-6">
        {categories
          .filter((c) => c.id !== "all")
          .map((category) => (
            <Link
              key={category.id}
              href={`/recipes?category=${category.id}`}
              className="rounded-[2rem] border bg-white p-6 shadow-sm transition hover:scale-[1.02]"
            >
              <div className="text-5xl">
                {icons[category.id] ?? "🍦"}
              </div>

              <h2 className="mt-4 text-lg font-bold">
                {category.label}
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Przeglądaj przepisy
              </p>
            </Link>
          ))}
      </section>
    </AppShell>
  );
}