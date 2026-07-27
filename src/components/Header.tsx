"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Galeria", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#booking" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="w-full bg-white sticky top-0 z-40">
      <div className="h-1 bg-brand-blue" />
      <div className="max-w-7xl mx-auto px-4 lg:px-0 h-16 flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Odontolight - Clínica Odontológica"
          width={120}
          height={40}
          priority
        />

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
            className="inline-flex items-center justify-center px-[18px] py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold rounded-[6px] transition-colors"
          >
            Agende
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden w-7 h-7 flex flex-col gap-1 items-center justify-center"
          aria-label={open ? "Fechar menu" : "Abrir menu de navegação"}
          aria-expanded={open}
        >
          <span
            className={`block w-5 h-0.5 rounded bg-brand-blue transition-transform duration-200 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 rounded bg-brand-blue transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 rounded bg-brand-blue transition-transform duration-200 ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors py-2.5 border-b border-slate-100 last:border-none"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#booking"
            onClick={close}
            className="mt-2 text-center px-[18px] py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold rounded-[6px] transition-colors"
          >
            Agende
          </Link>
        </nav>
      </div>

      <div className="h-px bg-slate-200" />
    </header>
  );
}
