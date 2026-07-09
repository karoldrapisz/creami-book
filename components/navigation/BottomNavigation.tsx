"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Folder,
  Heart,
  Home,
  Refrigerator,
  ShoppingCart,
} from "lucide-react";

const items = [
  { href: "/", label: "Start", icon: Home },
  { href: "/recipes", label: "Przepisy", icon: BookOpen },
  { href: "/pantry", label: "Mam", icon: Refrigerator },
  { href: "/shopping", label: "Zakupy", icon: ShoppingCart },
  { href: "/favorites", label: "Ulubione", icon: Heart },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-5 px-2 py-2">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                "flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-xs transition " +
                (active
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-500 hover:bg-zinc-100")
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}