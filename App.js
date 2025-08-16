import React, { useMemo, useState } from "react";
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  Rocket,
  Scissors,
  Users,
  ExternalLink,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const currency = (n) => `$${n.toFixed(2)}`;

const SOCIALS = [
  { name: "Twitter", href: "#" },
  { name: "Kick", href: "#" },
  { name: "TikTok", href: "#" },
  { name: "Discord", href: "#" },
  { name: "YouTube", href: "#" },
];

const CONFIG = {
  vet: {
    key: "vet",
    brand: "Vet Wraps",
    logo: "https://hosting.renderforestsites.com/31369039/1505153/media/dd221f82777280766d622009cb9ab2c5.png",
    theme: {
      bg: "bg-neutral-950",
      card: "bg-neutral-900/80 backdrop-blur-sm",
      text: "text-neutral-100",
      sub: "text-neutral-400",
      ring: "ring-emerald-500/25",
      btn: "bg-emerald-500 hover:bg-emerald-400",
    },
    hero: {
      title: "Custom Rocket League Wraps",
      subtitle: "Clean designs. Fast delivery.",
      icon: <Rocket className="w-4 h-4" aria-hidden />,
    },
    products: [
      "MightyBear",
      "Spudfire",
      "Shadowstrike",
      "Stormspire",
      "GreySpire",
      "RedSpire",
      "Moonlit Blossom",
      "MotorSport",
    ].map((name, i) => ({
      id: `vet-${i + 1}`,
      name,
      price: 19.99,
      image:
        "https://hosting.renderforestsites.com/31369039/1505153/media/dd221f82777280766d622009cb9ab2c5.png",
      description: "High‑res, game‑ready decal.",
    })),
  },
  bisque: {
    key: "bisque",
    brand: "Bisque Edits",
    logo: "",
    theme: {
      bg: "bg-neutral-50",
      card: "bg-white/70 backdrop-blur-sm",
      text: "text-neutral-900",
      sub: "text-neutral-500",
      ring: "ring-blue-600/20",
      btn: "bg-blue-600 hover:bg-blue-500",
    },
    hero: {
      title: "Clean, Punchy Video Edits",
      subtitle: "YouTube • TikTok • Montages",
      icon: <Scissors className="w-4 h-4" aria-hidden />,
    },
    products: [
      {
        id: "edit-basic",
        name: "Basic Edit (60–90s)",
        price: 19,
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1280&auto=format&fit=crop",
        description: "Sync + captions.",
      },
      {
        id: "edit-tiktok",
        name: "TikTok/Shorts Montage",
        price: 24,
        image:
          "https://images.unsplash.com/photo-1548094970-5f6c1f5f3d2e?q=80&w=1280&auto=format&fit=crop",
        description: "Fast cuts, 9:16.",
      },
      {
        id: "edit-pro",
        name: "Pro Edit (5–8 min)",
        price: 79,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1280&auto=format&fit=crop",
        description: "SFX + color.",
      },
    ],
  },
};

const btn =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2";
const chip = "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs";
const card = "rounded-2xl ring-1 p-4";

export default function App() {
  const [mode, setMode] = useState("vet");
  const [cartOpen, setCartOpen] = useState(false);
  const [affiliatesOpen, setAffiliatesOpen] = useState(false);
  const [items, setItems] = useState([]);

  const active = useMemo(() => CONFIG[mode], [mode]);
  const t = active.theme;

  const add = (p) => {
    setItems((prev) => {
      const i = prev.findIndex((x) => x.id === p.id);
      if (i > -1) {
        const cp = [...prev];
        cp[i] = { ...cp[i], qty: cp[i].qty + 1 };
        return cp;
      }
      return [...prev, { ...p, qty: 1 }];
    });
    setCartOpen(true);
  };
  const inc = (id) =>
    setItems((prev) =>
      prev.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x))
    );
  const dec = (id) =>
    setItems((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: Math.max(0, x.qty - 1) } : x))
        .filter((x) => x.qty > 0)
    );
  const rm = (id) => setItems((prev) => prev.filter((x) => x.id !== id));
  const subtotal = items.reduce((s, x) => s + x.price * x.qty, 0);

  return (
    <div className={`${t.text} min-h-screen relative overflow-hidden`}>
      {/* Rest of your code remains */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
        {active.hero.title}
      </h1>
      <p className={`${t.sub}`}>{active.hero.subtitle}</p>
    </div>
  );
}