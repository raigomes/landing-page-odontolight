import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="w-full bg-brand-bg py-12 px-4 md:py-20 md:px-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-16">
          {/* HL (Hero Left Column) */}
          <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
            <h1 className="text-[26px] md:text-[40px] font-bold text-brand-dark leading-tight tracking-tight">
              Clínica Odontológica em Porto Alegre
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-normal">
              Sorriso dos seus sonhos está mais perto do que você imagina. Agende sua consulta e descubra o poder de uma saúde bucal de qualidade.
            </p>
            
            {/* CTA Button */}
            <a
              href="#booking"
              aria-label="Agende sua consulta"
              className="w-full md:w-[240px] text-center py-3.5 px-6 bg-brand-whatsapp hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all text-base min-h-[48px] flex items-center justify-center shadow-sm"
            >
              Agende sua consulta
            </a>
            
            {/* Social Proof */}
            <div className="text-[14px] font-semibold text-brand-blue">
              ⭐ 4.9 no Google (200+ avaliações)
            </div>

            {/* ImgPH (Only visible on mobile, positioned after SocialProof and before Tr) */}
            <div className="lg:hidden w-full relative h-[200px] rounded-xl overflow-hidden border-2 border-slate-300">
              <Image
                src="https://images.unsplash.com/photo-1659989693492-242b1bd65784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODQ1MjAyNzh8&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Paciente sorrindo no atendimento odontológico Odontolight"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Trust badge */}
            <div className="text-[14px] font-normal text-slate-600">
              Atendimento por convênio e particular
            </div>
          </div>

          {/* HR (Hero Right Column - Desktop Only) */}
          <div className="hidden lg:block relative w-[500px] h-[440px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1659989693492-242b1bd65784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODQ1MjAyNzh8&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Atendimento odontológico de qualidade na clínica Odontolight"
              fill
              priority
              sizes="500px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
