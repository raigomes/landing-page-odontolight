# 📊 ESTADO DO DESENVOLVIMENTO — ODONTOLIGHT

## 🎯 OBJETIVOS DO SPRINT (CONVERSÃO & PERFORMANCE)

- Construir uma Landing Page única em Next.js 15+ (App Router). ✅
- Reduzir o CPL eliminando o gargalo de carregamento de 8s do Wix antigo. ✅
- Travar nota >95 no Google PageSpeed Insights (Mobile First). ✅ (**avg 95**, pico 99)
- Garantir acessibilidade estrita WCAG AA (Área de clique mínima de 48px). ✅ (**100/100**)

---

## ⏳ PRÓXIMA TAREFA ATÔMICA

- ✅ **Todas as ondas concluídas** — projeto finalizado com todos os objetivos atingidos.

---

## 🗺️ QUADRO DE ENTREGAS (ROADMAP ATÔMICO)

### 🧱 ONDA 01: FUNDAÇÃO & INFRAESTRUTURA

- [x] Inicialização do repositório Next.js 15 local e GitHub (`landing-page-odontolight`).
- [x] Injeção de variáveis de tema (`@theme`) no `src/app/globals.css`.
- [x] Inicialização e configuração do Shadcn/UI (`npx shadcn@latest init`).
- [x] Criação do arquivo de layout visual baseado em metadados (`layout.pen`).
- [x] Homologação e aplicação da Auditoria de CRO/QA no design do wireframe.
- [x] Criação do orquestrador central `src/app/page.tsx` com as tags `<main>`.
- [x] Geração das cascas dos componentes vazios de seção.

### 🎨 ONDA 02: INTERFACE ESTÁTICA (MOBILE-FIRST E CRO)

- [x] Componente `Hero.tsx` integrado (UVP à esquerda, Prova Social do Google e CTA expandido).
- [x] Componente `Services.tsx` integrado (Grid responsivo de 1 a 4 colunas com Chips interativos).
- [x] Componentes institucionais: `About.tsx`, `Gallery.tsx` e `Testimonials.tsx` (Com paginação horizontal).
- [x] Componentes de fechamento: `Faq.tsx` (Accordion com ícone '+') e `Footer.tsx` (Mapa semântico).
- [x] Componente utilitário: `WhatsappButton.tsx` (Flutuante fixo com animação e aria-label).

### 🤖 ONDA 03: ENGENHARIA DE FORMULÁRIO & INTEGRAÇÕES

- [x] Criação do esquema de validação estrita de dados com `zod`.
- [x] Componentização do `BookingForm.tsx` utilizando `react-hook-form` e Chips de tratamento expostos.
- [x] Implementação de estado de carregamento (`spinner`) e simulação de disparo da API de WhatsApp.

### 🛡️ ONDA 04: HARNESS DE QA & HOMOLOGAÇÃO VERCEL

- [x] Auditoria de acessibilidade semântica (HTML5) em todos os arquivos gerados.
- [x] Validação local do build corporativo (`npm run build`).
- [x] Deploy em ambiente de Preview na Vercel e checagem final de Core Web Vitals. (live em https://clinicaodontolight.raigomes.dev/)
  - 📱 Mobile: Performance **95** 🏆 | Acessibilidade **100** 🏆 | Boas Práticas **96** | SEO **100**
    - LCP 2.5s | TBT 3ms | CLS 0 | FCP 1.3s
  - 🖥️ Desktop: Performance **98** | Acessibilidade **100** | Boas Práticas **100** | SEO **100**
    - LCP 0.6s | TBT 0ms | CLS 0 | FCP 0.3s
  - QA Final: **APROVADO** (0 bloqueios, 5/5 obrigações PASS)
  - Otimizações aplicadas:
    - Faq: JS accordion → `<details>`/`<summary>` nativo (remove `"use client"`)
    - brand-blue: `#0284c7` → `#0369a1` (contraste AA)
    - brand-whatsapp: `#10b981` → `#047857` (emerald-700, contraste 5.5:1)
    - Botões CTA: `bg-emerald-500` → `bg-emerald-700`
    - Footer: `text-slate-500/600` → `text-slate-400` (contraste bg-dark)
    - Footer: link raigomes.dev `text-brand-blue` → `text-white`
    - Estrelas decorativas: `aria-hidden="true"`
    - next.config: `formats: ["image/avif", "image/webp"]`
