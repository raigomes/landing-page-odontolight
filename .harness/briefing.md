# Briefing: Landing Page - Clinica Odontolight

> Servico: Landing Page Performance | Categoria: Entrada | Preco referencia: R$ 1.500

## Cliente (Fictional)

- **Nome:** Clinica Odontolight
- **Ramo:** Odontologia estetica e clinica geral
- **Porte:** 2 dentistas, 1 secretaria
- **Publico-alvo:** Adultos 25-50 anos, convenio e particular, raio de 10km da clinica

## O Problema

A clinica tem um site feito em Wix que demora 8s para carregar no celular. Ela investe R$ 1.200/mes em Google Ads, mas o custo por lead (CPL) esta alto porque os visitantes desistem antes da pagina carregar. O site atual tambem nao aparece bem no Google Maps.

## A Solucao Desejada

- Landing page de alta conversao com carregamento <2s
- Integracao com botao do WhatsApp (click-to-chat)
- Formulario de agendamento com confirmacao automatica via API do WhatsApp
- SEO local para Google Meu Negocio (maps + busca organica)
- Nao precisa de blog ou sistema interno

## Requisitos Tecnicos

- Next.js (App Router) + Tailwind + Shadcn/UI
- PageSpeed > 95 mobile e desktop
- Layout responsivo (Mobile First — 80% dos acessos via celular)
- Deployment na Vercel com dominio proprio
- Formulario com React Hook Form + Zod

## Diferenciais para o Portfolio

- **Antes:** Wix, PageSpeed 45, CPL alto
- **Depois:** Next.js, PageSpeed 98, CPL reduzido
- **Feature:** Formulario de agendamento com confirmacao via WhatsApp

## Criterios de Sucesso

- PageSpeed Insights > 95
- Lighthouse SEO > 90
- Contraste WCAG AA minimo
- Botao de WhatsApp visivel sem atrapalhar o conteudo

---

## Estrutura de Paginas

```
/ (landing page unica)
  - Hero com CTA "Agende sua consulta"
  - Servicos (cards de procedimentos)
  - Sobre a clinica (foto + texto breve)
  - Depoimentos (carrossel estatico)
  - Galeria de resultados (grid de fotos)
  - FAQ (accordion)
  - Formulario de agendamento
  - Footer com endereco + mapa embutido
```
