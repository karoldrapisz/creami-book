import Image from "next/image";
import Link from "next/link";

import AppShell from "@/components/common/AppShell";
import PageHeader from "@/components/common/PageHeader";
import RecipeCard from "@/components/recipe/RecipeCard";
import { recipes } from "@/features/recipes/recipes";

export default function Home() {
  const featured = recipes.slice(0, 5);
  const fitRecipes = recipes.filter((r) => r.category === "fit").slice(0, 3);

  const hero = recipes[0];

  return (
    <AppShell>
      <PageHeader
        title="🍦 CreamiBook"
        subtitle="Najlepsze przepisy 500 ml do Ninja Creami"
      />

      {/* HERO */}
      <section className="px-5 pt-6">
        <Link href={`/recipe/${hero.slug}`}>
          <div className="overflow-hidden rounded-[2rem] border bg-white shadow-lg">
            <div className="relative h-64">
              <Image
                src={hero.image}
                alt={hero.name}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur">
                  ⭐ Polecany przepis
                </span>

                <h2 className="mt-3 text-3xl font-black">
                  {hero.name}
                </h2>

                <p className="mt-2 text-sm text-white/90">
                  {hero.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* SZYBKIE AKCJE */}
      <section className="px-5 pt-6">
        <div className="grid grid-cols-2 gap-4">
          <QuickTile
            href="/recipes"
            emoji="📖"
            title="Przepisy"
          />

          <QuickTile
            href="/pantry"
            emoji="🥣"
            title="Mam składniki"
          />

          <QuickTile
            href="/shopping"
            emoji="🛒"
            title="Zakupy"
          />

          <QuickTile
            href="/favorites"
            emoji="❤️"
            title="Ulubione"
          />
        </div>
      </section>

      {/* POLECANE */}
      <Section
        title="⭐ Polecane"
        recipes={featured}
      />

      {/* FIT */}
      <Section
        title="💪 Fit"
        recipes={fitRecipes}
      />
    </AppShell>
  );
}

function Section({
  title,
  recipes,
}: {
  title: string;
  recipes: typeof import("@/features/recipes/recipes").recipes;
}) {
  return (
    <section className="px-5 pt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-black">
          {title}
        </h2>

        <Link
          href="/recipes"
          className="text-sm font-semibold text-zinc-500"
        >
          Zobacz wszystkie →
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="min-w-[320px] max-w-[320px]"
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </section>
  );
}

function QuickTile({
  href,
  emoji,
  title,
}: {
  href: string;
  emoji: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-[2rem] border bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="text-4xl">
        {emoji}
      </div>

      <div className="mt-3 text-lg font-bold">
        {title}
      </div>
    </Link>
  );
}