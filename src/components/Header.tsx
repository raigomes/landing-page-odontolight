import React from "react";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-sky-600">🦷 Odontolight</div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-700">
          <a href="#services" className="hover:text-sky-600 transition-colors">Serviços</a>
          <a href="#about" className="hover:text-sky-600 transition-colors">Sobre</a>
          <a href="#testimonials" className="hover:text-sky-600 transition-colors">Depoimentos</a>
          <a href="#faq" className="hover:text-sky-600 transition-colors">FAQ</a>
          <a href="#booking" className="hover:text-sky-600 transition-colors">Contato</a>
        </nav>
        <div>
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 transition-colors"
          >
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
}
