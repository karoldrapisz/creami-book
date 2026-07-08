const items = [
  { label: "Start", icon: "🏠" },
  { label: "Przepisy", icon: "🍦" },
  { label: "Kategorie", icon: "📂" },
  { label: "Ulubione", icon: "❤️" },
  { label: "Ustawienia", icon: "⚙️" }
];

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white">
      <div className="mx-auto grid max-w-md grid-cols-5 px-2 py-2">
        {items.map((item) => (
          <button
            key={item.label}
            className="flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-xs text-zinc-600"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}