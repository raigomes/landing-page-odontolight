"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Quanto tempo dura uma limpeza dental?",
    answer: "Em média 40 minutos. Recomendamos a cada 6 meses.",
  },
  {
    question: "Vocês aceitam convênios?",
    answer:
      "Sim, trabalhamos com os principais convênios odontológicos. Consulte nossa equipe para verificar se o seu plano está credenciado.",
  },
  {
    question: "O clareamento dental dói?",
    answer:
      "O clareamento dental é indolor. Alguns pacientes podem sentir uma leve sensibilidade temporária, que desaparece em até 48 horas.",
  },
  {
    question: "Qual o valor da consulta inicial?",
    answer:
      "A consulta inicial tem valor acessível e inclui avaliação completa, diagnóstico e plano de tratamento personalizado.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section id="faq" className="w-full bg-white py-12 px-4 md:py-16 lg:py-16 lg:px-[260px] scroll-mt-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:gap-6">
        <h2 className="text-[22px] font-bold text-brand-dark leading-tight">
          Perguntas frequentes
        </h2>
        <p className="text-base text-slate-600">
          Tire suas dúvidas sobre nossos serviços
        </p>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-base font-medium text-brand-dark flex-1 pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`text-lg font-bold text-brand-blue shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <a
          href="#booking"
          className="text-sm font-medium text-brand-blue text-center hover:underline"
        >
          Ainda com dúvidas? Agende uma avaliação gratuita
        </a>
      </div>
    </section>
  );
}
