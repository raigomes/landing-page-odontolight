import React from "react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODQ1MjAyNzh8&ixlib=rb-4.1.0&q=80&w=400",
    alt: "Resultado de tratamento odontológico - antes",
  },
  {
    src: "https://images.unsplash.com/photo-1663182234283-28941e7612da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODQ1MjAyNzh8&ixlib=rb-4.1.0&q=80&w=400",
    alt: "Resultado de tratamento odontológico - depois",
  },
  {
    src: "https://images.unsplash.com/photo-1664529845848-00f5fa16df86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODQ1MjAyNzh8&ixlib=rb-4.1.0&q=80&w=400",
    alt: "Tratamento de gengivite - antes",
  },
  {
    src: "https://images.unsplash.com/photo-1660732205495-f65510d8180e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODQ1MjAyNzh8&ixlib=rb-4.1.0&q=80&w=400",
    alt: "Tratamento de gengivite - depois",
  },
  {
    src: "https://images.unsplash.com/photo-1656514894252-fb336a3ad6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODQ1MjAyNzh8&ixlib=rb-4.1.0&q=80&w=400",
    alt: "Aparelho ortodôntico em dentes de paciente",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODQ1MjAyNzh8&ixlib=rb-4.1.0&q=80&w=400",
    alt: "Lente de contato dental",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full bg-white py-12 px-4 md:py-16 lg:py-20 lg:px-[120px] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:gap-6">
        <h2 className="text-[22px] font-bold text-brand-dark leading-tight">
          Resultados reais
        </h2>
        <p className="text-base text-slate-600">
          Antes e depois dos nossos pacientes
        </p>

        {/* Mobile: 3 rows */}
        <div className="flex flex-col gap-2 lg:hidden">
          <div className="flex gap-2 flex-wrap">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[1_1_calc(50%_-_0.5rem)] relative h-32 rounded-lg overflow-hidden bg-slate-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 2 rows */}
        <div className="hidden lg:flex flex-col gap-4">
          <div className="flex gap-4 flex-wrap">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[1_1_calc(33.333%_-_1rem)] relative h-64 rounded-xl overflow-hidden bg-slate-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
