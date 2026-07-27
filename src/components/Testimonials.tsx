"use client";

import React, { useRef, useState } from "react";

const testimonials = [
  {
    initials: "MS",
    name: "Maria S.",
    quote:
      '"Atendimento incrível! Minha lente de contato ficou perfeita. Super recomendo!"',
  },
  {
    initials: "CA",
    name: "Carlos A.",
    quote:
      '"Fiz clareamento e o resultado superou minhas expectativas. Equipe muito profissional."',
  },
  {
    initials: "JM",
    name: "Juliana M.",
    quote:
      '"Odontolight é referência em implantes. Fui super bem atendido do início ao fim."',
  },
];

const STEP = 353;

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / STEP);
    setActive(Math.min(idx, testimonials.length - 1));
  }

  return (
    <section
      id="testimonials"
      className="w-full bg-slate-100 py-12 px-4 md:py-16 lg:py-20 lg:px-[120px] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-5 lg:gap-6">
        <h2 className="text-[22px] font-bold text-brand-dark leading-tight">
          O que seus pacientes dizem
        </h2>

        {/* Mobile: horizontal scroll carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="lg:hidden overflow-x-auto -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
        >
          <div className="flex gap-2.5 w-max">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="w-[343px] shrink-0 bg-white rounded-xl p-5 flex flex-col gap-2.5 shadow-[0_2px_4px_rgba(0,0,0,0.05)] snap-start"
              >
                <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center">
                  <span className="text-base font-semibold text-brand-dark">
                    {t.initials}
                  </span>
                </div>
                <span className="text-base font-semibold text-brand-dark lg:text-center">
                  {t.name}
                </span>
                <span className="text-base text-amber-400 lg:text-center">
                  ★★★★★
                </span>
                <p className="text-[15px] text-slate-600 leading-snug italic">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators (mobile only) */}
        <div className="lg:hidden flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                i === active ? "bg-brand-blue" : "bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* Desktop: horizontal row */}
        <div className="hidden lg:flex gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex-1 bg-white rounded-xl p-7 flex flex-col gap-3 items-center shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
            >
              <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center">
                <span className="text-base font-semibold text-brand-dark">
                  {t.initials}
                </span>
              </div>
              <span className="text-base font-semibold text-brand-dark">
                {t.name}
              </span>
              <span className="text-base text-amber-400">★★★★★</span>
              <p className="text-[15px] text-slate-600 leading-snug italic text-center">
                {t.quote}
              </p>
            </div>
          ))}
        </div>

        <p className="hidden md:flex text-sm text-slate-600 text-center">
          Nota 4.9 ★★★★★ no Google
        </p>
      </div>
    </section>
  );
}
