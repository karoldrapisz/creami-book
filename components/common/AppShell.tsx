import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <div className="mx-auto min-h-screen max-w-md bg-zinc-50 pb-24">
        {children}
      </div>
      <BottomNavigation />
    </main>
  );
}
