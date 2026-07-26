import React from "react";

export function Hero() {
  return (
    <section id="hero" className="w-full py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Sorriso dos seus sonhos está mais perto do que você imagina
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Agende sua consulta e descubra o poder de um sorriso saudável. Atendimento humanizado e tecnologia de ponta em Porto Alegre.
          </p>
          <div className="mt-8">
            <a
              href="#booking"
              className="inline-block w-full md:w-auto text-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors shadow-md"
            >
              Agende sua consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
