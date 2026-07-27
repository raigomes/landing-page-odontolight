# Odontolight — Landing Page

Landing page de alta performance para a clínica odontológica Odontolight, focada em conversão (agendamento via WhatsApp), acessibilidade e SEO.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS** (estilização utilitária)
- **Shadcn/UI** (tokens de design via `globals.css`)
- **react-hook-form** + **Zod v4** (validação de formulário)
- **Google Fonts — Inter** (via `next/font`)

## Funcionalidades

- Header fixo com navegação âncora e menu mobile hamburger
- Hero com CTA, prova social e imagem LG/MD responsiva (`priority`)
- Grid de serviços com ícones SVG inline
- Sobre com indicadores de confiança (8 anos, +500 pacientes, 4.9★)
- Carrossel de depoimentos com dots dinâmicos (mobile) e cards lado a lado (desktop)
- Galeria de resultados com hover effects (scale + shadow)
- FAQ em acordeão com `aria-expanded` / `aria-controls`
- Formulário de agendamento com validação e envio via WhatsApp
- Footer com Google Maps embed, redes sociais e selos de confiança
- Botão flutuante do WhatsApp fixo no canto inferior direito
- `scroll-mt-16` em todas as seções para compensar o header fixo (~69px)
- Semântica HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h2>`)
- Acessibilidade: `aria-label` em links ícone-only, `aria-expanded` em accordion, `alt` descritivo em imagens, `title` no iframe, `aria-hidden` em SVGs decorativos

## Como Rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Gera saída estática na pasta `out/`.

## Projeto

Design seguindo fielmente o arquivo `layout.pen` (Figma-like). Todos os componentes são inspecionados por uma etapa de auditoria semântica (QA) antes de finalização.
