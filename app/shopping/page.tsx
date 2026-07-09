import AppShell from "@/components/common/AppShell";
import PageHeader from "@/components/common/PageHeader";
import ShoppingList from "@/features/shopping/ShoppingList";

export default function ShoppingPage() {
  return (
    <AppShell>
      <PageHeader
        title="Zakupy"
        subtitle="Lista brakujących składników."
      />

      <ShoppingList />
    </AppShell>
  );
}