import AppShell from "@/components/common/AppShell";
import PageHeader from "@/components/common/PageHeader";

export default function SettingsPage() {
  return (
    <AppShell>
      <PageHeader title="Ustawienia" subtitle="Konfiguracja aplikacji." />

      <section className="space-y-3 px-5 pt-6">
        <Setting label="Pojemnik" value="500 ml" />
        <Setting label="Tryb offline" value="Przygotowany" />
        <Setting label="Język" value="Polski" />
      </section>
    </AppShell>
  );
}

function Setting({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-3xl border bg-white p-5 shadow-sm">
      <span className="font-medium">{label}</span>
      <span className="text-sm text-zinc-500">{value}</span>
    </div>
  );
}
