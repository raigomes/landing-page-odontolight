import React from "react";
import Link from "next/link";

const navItems = [
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Galeria", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#booking" },
] as const;

export function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-40">
      <div className="h-1 bg-brand-blue" />
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        <span className="text-lg lg:text-xl font-bold text-brand-blue">
          🦷 Odontolight
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#booking"
            className="inline-flex items-center justify-center px-[18px] py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-[6px] transition-colors"
          >
            Agende
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden w-7 h-7 flex flex-col gap-1 items-center justify-center"
          aria-label="Abrir menu de navegação"
        >
          <span className="block w-5 h-0.5 rounded bg-brand-blue" />
          <span className="block w-5 h-0.5 rounded bg-brand-blue" />
          <span className="block w-5 h-0.5 rounded bg-brand-blue" />
        </button>
      </div>
      <div className="h-px bg-slate-200" />
    </header>
  );
}
