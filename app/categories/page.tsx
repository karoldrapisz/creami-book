import AppShell from "@/components/common/AppShell";
import PageHeader from "@/components/common/PageHeader";
import { categories } from "@/features/recipes/recipes";

export default function CategoriesPage() {
  return (
    <AppShell>
      <PageHeader title="Kategorie" subtitle="Podstawowy podział przepisów." />

      <section className="grid grid-cols-2 gap-3 px-5 pt-6">
        {categories
          .filter((category) => category.id !== "all")
          .map((category) => (
            <div key={category.id} className="rounded-3xl border bg-white p-5 shadow-sm">
              <div className="text-3xl">🍦</div>
              <h2 className="mt-3 font-bold">{category.label}</h2>
            </div>
          ))}
      </section>
    </AppShell>
  );
}
