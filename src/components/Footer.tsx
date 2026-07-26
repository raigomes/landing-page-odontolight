import React from "react";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white font-bold text-lg">🦷 Odontolight</div>
          <div className="mt-4 md:mt-0 text-sm">
            © 2026 Odontolight. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
