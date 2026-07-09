import AppShell from "@/components/common/AppShell";
import PageHeader from "@/components/common/PageHeader";
import PantrySelector from "@/features/pantry/PantrySelector";

export default function PantryPage() {
  return (
    <AppShell>
      <PageHeader
        title="Mam składniki"
        subtitle="Zaznacz, co masz w domu, a CreamiBook pokaże pasujące przepisy."
      />

      <PantrySelector />
    </AppShell>
  );
}