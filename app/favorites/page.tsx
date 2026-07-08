import AppShell from "@/components/common/AppShell";
import PageHeader from "@/components/common/PageHeader";
import EmptyState from "@/components/common/EmptyState";

export default function FavoritesPage() {
  return (
    <AppShell>
      <PageHeader title="Ulubione" subtitle="W następnym sprincie zapiszemy je offline." />

      <section className="px-5 pt-6">
        <EmptyState
          title="Brak ulubionych"
          description="Wkrótce dodamy zapis w Dexie / IndexedDB."
        />
      </section>
    </AppShell>
  );
}
