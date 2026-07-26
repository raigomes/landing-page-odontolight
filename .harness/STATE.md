# 📊 ESTADO DO DESENVOLVIMENTO — ODONTOLIGHT

## 🎯 OBJETIVOS DO SPRINT (CONVERSÃO & PERFORMANCE)

- Construir uma Landing Page única em Next.js 15+ (App Router).
- Reduzir o CPL eliminando o gargalo de carregamento de 8s do Wix antigo.
- Travar nota >95 no Google PageSpeed Insights (Mobile First).
- Garantir acessibilidade estrita WCAG AA (Área de clique mínima de 48px).

---

## ⏳ PRÓXIMA TAREFA ATÔMICA

- Onda 01: Fundação de Layout e Estilos Globais (Aguardando ativação do Agente Desenvolvedor).

---

## 🗺️ QUADRO DE ENTREGAS (ROADMAP ATÔMICO)

### 🧱 ONDA 01: FUNDAÇÃO & INFRAESTRUTURA

- [x] Inicialização do repositório Next.js 15 local e GitHub (`landing-page-odontolight`).
- [x] Injeção de variáveis de tema (`@theme`) no `src/app/globals.css`.
- [x] Inicialização e configuração do Shadcn/UI (`npx shadcn@latest init`).
- [x] Criação do arquivo de layout visual baseado em metadados (`layout.pen`).
- [x] Homologação e aplicação da Auditoria de CRO/QA no design do wireframe.
- [x] Criação do orquestrador central `src/app/page.tsx` com as tags `<main>`.
- [ ] Geração das cascas dos componentes vazios de seção (Aguardando)

### 🎨 ONDA 02: INTERFACE ESTÁTICA (MOBILE-FIRST E CRO)

- [ ] Componente `Hero.tsx` integrado (UVP à esquerda, Prova Social do Google e CTA expandido).
- [ ] Componente `Services.tsx` integrado (Grid responsivo de 1 a 4 colunas com Chips interativos).
- [ ] Componentes institucionais: `About.tsx`, `Gallery.tsx` e `Testimonials.tsx` (Com paginação horizontal).
- [ ] Componentes de fechamento: `Faq.tsx` (Accordion com ícone '+') e `Footer.tsx` (Mapa semântico).
- [ ] Componente utilitário: `WhatsappButton.tsx` (Flutuante fixo com animação e aria-label).

### 🤖 ONDA 03: ENGENHARIA DE FORMULÁRIO & INTEGRAÇÕES

- [ ] Criação do esquema de validação estrita de dados com `zod`.
- [ ] Componentização do `BookingForm.tsx` utilizando `react-hook-form` e Chips de tratamento expostos.
- [ ] Implementação de estado de carregamento (`spinner`) e simulação de disparo da API de WhatsApp.

### 🛡️ ONDA 04: HARNESS DE QA & HOMOLOGAÇÃO VERCEL

- [ ] Auditoria de acessibilidade semântica (HTML5) em todos os arquivos gerados.
- [ ] Validação local do build corporativo (`npm run build`).
- [ ] Deploy em ambiente de Preview na Vercel e checagem final de Core Web Vitals.
