import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-brand-dark">
      {/* Desktop: horizontal row */}
      <div className="hidden w-[1280px] lg:flex lg:flex-row lg:gap-12 lg:py-16 max-w-7xl mx-auto flex flex-col gap-6 lg:gap-6">
        {/* Left column: Info + Social */}
        <div className="flex flex-col gap-3.5">
          <span className="text-xl font-bold text-white">🦷 Odontolight</span>
          <span className="text-sm text-slate-400">
            Rua Ramiro Barcelos, 2492, 2º andar — Porto Alegre, RS
          </span>
          <a
            href="https://wa.me/5551999998888"
            className="text-sm text-white hover:text-brand-blue transition-colors"
          >
            (51) 99999-8888
          </a>
          <a
            href="mailto:contato@odontolight.com.br"
            className="text-sm text-white hover:text-brand-blue transition-colors"
          >
            contato@odontolight.com.br
          </a>
          {/* Social row inside left column */}
          <div className="flex flex-row gap-4 mt-1">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
              className="w-12 h-12 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Curta nossa página no Facebook"
              className="w-12 h-12 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://wa.me/5551999998888"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco pelo WhatsApp"
              className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle: Map */}
        <div className="w-[500px] h-[240px] rounded-lg overflow-hidden shrink-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5486057489996!2d-51.17510302343869!3d-30.05363777493238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951975e6ac24e5e3%3A0x3d6d4d6e84e3e8f2!2sRua%20Ramiro%20Barcelos%2C%202492%20-%20Floresta%2C%20Porto%20Alegre%20-%20RS%2C%2090010-001!5e0!3m2!1spt-BR!2sbr!4v1"
            width="500"
            height="240"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de localização da Odontolight"
          />
        </div>

        {/* Right column: Trust badges */}
        <div className="flex flex-col gap-3.5 w-[220px]">
          <span className="text-base font-semibold text-white">
            Selos de confiança
          </span>
          <span className="text-sm text-slate-400">⭐ Google 4.9</span>
          <span className="text-sm text-slate-400">🔒 Site Seguro</span>
          <span className="text-sm text-slate-400">
            📱 Responde em até 15 min
          </span>
        </div>
      </div>

      {/* Mobile: stacked vertical */}
      <div className="flex flex-col gap-4 px-4 py-8 lg:hidden">
        <span className="text-lg font-bold text-white">🦷 Odontolight</span>
        <span className="text-sm text-slate-400">
          Rua Ramiro Barcelos, 2492 — Porto Alegre, RS
        </span>
        <a
          href="https://wa.me/5551999998888"
          className="text-sm text-white hover:text-brand-blue transition-colors"
        >
          (51) 99999-8888
        </a>
        <a
          href="mailto:contato@odontolight.com.br"
          className="text-sm text-white hover:text-brand-blue transition-colors"
        >
          contato@odontolight.com.br
        </a>

        {/* Social icons row (mobile) */}
        <div className="flex flex-row gap-4 justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga-nos no Instagram"
            className="w-12 h-12 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Curta nossa página no Facebook"
            className="w-12 h-12 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://wa.me/5551999998888"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
            className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

        {/* Map (mobile) */}
        <div className="w-full h-[180px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5486057489996!2d-51.17510302343869!3d-30.05363777493238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951975e6ac24e5e3%3A0x3d6d4d6e84e3e8f2!2sRua%20Ramiro%20Barcelos%2C%202492%20-%20Floresta%2C%20Porto%20Alegre%20-%20RS%2C%2090010-001!5e0!3m2!1spt-BR!2sbr!4v1"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de localização da Odontolight"
          />
        </div>
      </div>

      {/* Copyright - Full width */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto py-4 px-4 lg:px-[120px] flex flex-col gap-2.5">
          <p className="text-xs text-slate-500 text-center">
            © {new Date().getFullYear()} Odontolight. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-slate-600 text-center leading-relaxed">
            Aviso: Este é um site experimental/pessoal, não uma entidade
            comercial. Todo o conteúdo é fictício ou destinado apenas a fins de
            demonstração de design e desenvolvimento. Para saber mais sobre meu
            trabalho, visite{" "}
            <a
              href="https://raigomes.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline"
            >
              raigomes.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
