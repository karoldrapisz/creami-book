import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-pink-50 text-zinc-950">
      <div className="mx-auto min-h-screen max-w-md pb-28">
        {children}
      </div>

      <BottomNavigation />
    </main>
  );
}