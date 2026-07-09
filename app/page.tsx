import Image from "next/image";
import Link from "next/link";

import AppShell from "@/components/common/AppShell";
import PageHeader from "@/components/common/PageHeader";
import HorizontalRecipeList from "@/components/ui/HorizontalRecipeList";
import Section from "@/components/ui/Section";
import { recipes } from "@/features/recipes/recipes";

export default function Home() {
  const featured = recipes.slice(0, 5);
  const fitRecipes = recipes.filter((r) => r.category === "fit").slice(0, 5);
  const sorbets = recipes.filter((r) => r.category === "sorbet").slice(0, 5);

  const hero = recipes[0];

  return (
    <AppShell>
      <PageHeader
        title="🍦 CreamiBook"
        subtitle="Najlepsze przepisy 500 ml do Ninja Creami"
      />

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

                <h2 className="mt-3 text-3xl font-black">{hero.name}</h2>

                <p className="mt-2 text-sm text-white/90">
                  {hero.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section className="px-5 pt-6">
        <div className="grid grid-cols-2 gap-4">
          <QuickTile href="/recipes" emoji="📖" title="Przepisy" />
          <QuickTile href="/pantry" emoji="🥣" title="Mam składniki" />
          <QuickTile href="/shopping" emoji="🛒" title="Zakupy" />
          <QuickTile href="/favorites" emoji="❤️" title="Ulubione" />
        </div>
      </section>

      <Section
        title="⭐ Polecane"
        action={
          <Link href="/recipes" className="text-sm font-semibold text-zinc-500">
            Zobacz wszystkie →
          </Link>
        }
      >
        <HorizontalRecipeList recipes={featured} />
      </Section>

      <Section
        title="💪 Fit"
        action={
          <Link href="/recipes" className="text-sm font-semibold text-zinc-500">
            Zobacz wszystkie →
          </Link>
        }
      >
        <HorizontalRecipeList recipes={fitRecipes} />
      </Section>

      <Section
        title="🥭 Sorbety"
        action={
          <Link href="/recipes" className="text-sm font-semibold text-zinc-500">
            Zobacz wszystkie →
          </Link>
        }
      >
        <HorizontalRecipeList recipes={sorbets} />
      </Section>
    </AppShell>
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
      <div className="text-4xl">{emoji}</div>
      <div className="mt-3 text-lg font-bold">{title}</div>
    </Link>
  );
}