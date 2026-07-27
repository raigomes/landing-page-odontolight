import React from "react";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="w-full bg-brand-bg py-12 px-4 md:py-16 lg:py-20 lg:px-[120px] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-5 lg:gap-6">
        <h2 className="text-[22px] font-bold text-brand-dark leading-tight">
          Conheça a Odontolight
        </h2>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-16">
          {/* TL - Left Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-5">
            <p className="text-base text-slate-600 leading-relaxed">
              Há 8 anos transformando sorrisos em Porto Alegre. Nossa clínica
              conta com 2 dentistas especializados que unem experiência e
              tecnologia de ponta para oferecer o melhor tratamento
              odontológico. Da prevenção à estética dental, cuidamos de cada
              detalhe do seu sorriso com acolhimento e excelência.
            </p>

            <div className="flex flex-col gap-1.5 items-start">
              <span className="text-sm font-medium text-brand-blue">
                ✅ 8 anos de mercado
              </span>
              <span className="text-sm font-medium text-brand-blue">
                ✅ +500 pacientes
              </span>
              <span className="text-sm font-medium text-brand-blue">
                ✅ Nota 4.9 Google
              </span>
            </div>
          </div>

          {/* TR - Right Column (Desktop Image) */}
          <div className="hidden lg:block relative w-full max-w-[520px] h-[360px] rounded-xl overflow-hidden shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODQ1MjAyNzF8&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Equipe Odontolight em atendimento odontológico"
              fill
              sizes="520px"
              className="object-cover"
            />
          </div>
        </div>

        {/* AI - Mobile Image */}
        <div className="lg:hidden relative w-full h-[220px] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODQ1MjAyNzF8&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Clínica Odontolight - ambiente acolhedor e moderno"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
