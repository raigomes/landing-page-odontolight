# Guia Visual para Wireframe no Pencil.dev — Clínica Odontolight

> **Propósito:** Instruções exatas para desenhar as 8 seções da Landing Page no Pencil.dev (formato Mobile-First, com adaptação Desktop).
>
> **Paleta (use caixa de preenchimento "Fill Color" no Pencil):**
> - Fundo da página: `#f8fafc` (slate-50)
> - Fundo de cards: `#ffffff` (branco)
> - Texto principal: `#0f172a` (slate-900)
> - Destaque/azul odontológico: `#0284c7` (sky-600)
> - CTA (botão principal): `#10b981` (emerald-500) com texto branco
> - Sombra de cards: linhas finas cinzas ou preenchimento `#e2e8f0` simulando `shadow-sm`
>
> **Tipografia sugerida no Pencil:**
> - Títulos (h1/h2): fonte sans-serif, 24px mobile / 36px desktop, negrito
> - Corpo: 16px, regular
> - Botões: 16px, seminegrito

---

## Seção 1 — Hero (Acima da Dobra)

**O que desenhar no Pencil — Mobile (375x812):**

| Elemento | Instrução Pencil |
|---|---|
| **Top bar** | Retângulo horizontal full-width (375x8), cor `#0284c7` (barra fina decorativa) |
| **Logo** | Texto "🦷 Odontolight" no topo esquerdo, 20px, `#0284c7` |
| **Título h1** | Caixa de texto centralizada: "Sorriso dos seus sonhos está mais perto do que você imagina" — 24px, negrito, `#0f172a`, alinhado centro |
| **Subtítulo** | Logo abaixo: "Agende sua consulta e descubra o poder de um sorriso saudável. Atendimento humanizado e tecnologia de ponta em Porto Alegre." — 16px, `#475569`, alinhado centro |
| **CTA Principal** | Retângulo arredondado (375-32=343w x 52h), preenchido `#10b981`, texto "Agende sua consulta" branco 16px negrito, centralizado. Ocupa quase toda a largura com `mx-4` |
| **Imagem** | Omitida no mobile (não desenhar). Ou colocar um retângulo placeholder abaixo do CTA com borda tracejada e texto "Imagem do consultório" — para sinalizar que vai existir |
| **Espaçamento** | Entre CTA e borda inferior: ~60px de espaço vazio |

**Adaptação Desktop (1280x720):**

| Elemento | Instrução Pencil |
|---|---|
| **Layout** | Dividir a tela em 2 colunas (grid). Coluna esquerda ~50%, coluna direita ~50% |
| **Esquerda** | Mover título, subtítulo e CTA para a coluna esquerda, alinhados à esquerda |
| **Direita** | Retângulo placeholder 400x400 com `rounded-2xl` (bordas muito arredondadas, ~16px de raio) representando foto do dentista/consultório |
| **CTA Desktop** | Botão menor, ~200x52, alinhado à esquerda (não ocupa largura total) |
| **Top bar** | Manter a barra fina azul no topo |

**Copywriting:**
- Título: "Sorriso dos seus sonhos está mais perto do que você imagina"
- Subtítulo: "Agende sua consulta e descubra o poder de um sorriso saudável. Atendimento humanizado e tecnologia de ponta."
- CTA: "Agende sua consulta"
- *Elemento de confiança:* (opcional) Abaixo do CTA, texto pequeno "Atendimento por convênio e particular"

---

## Seção 2 — Serviços (Cards de Procedimentos)

**Mobile (empilhado, 1 coluna):**

| Elemento | Instrução Pencil |
|---|---|
| **Título h2** | Caixa de texto: "Nossos serviços" — 22px negrito `#0f172a`, centralizado |
| **Subtítulo** | "Tecnologia de ponta para o seu sorriso" — 16px `#475569`, centralizado |
| **Cards (4)** | 4 retângulos empilhados verticalmente, cada um: 343x140, `bg-white`, bordas arredondadas 12px, sombra (linha cinza fina abaixo) |
| **Ícone** | Círculo pequeno (32x32) no topo de cada card, `#0284c7` (representa o ícone Shadcn) |
| **Título do card** | Texto 18px negrito: "Clínico Geral", "Estética Dental", "Clareamento", "Implantes" |
| **Descrição** | Texto 14px `#475569`, 2 linhas |
| **Espaçamento** | 16px entre cada card |

**Desktop (4 colunas lado a lado):**

| Elemento | Instrução Pencil |
|---|---|
| **Grid** | 4 retângulos lado a lado, mesma largura (~280px cada), com gap de 16px entre eles |
| **Cards** | Mesma altura ~180px para todos. Mesmo visual: bg-white, rounded-xl, shadow |
| **Ícone** | Mantém círculo azul no topo |

**Copy dos cards:**
1. **Clínico Geral** — "Limpeza, restaurações e prevenção para toda a família."
2. **Estética Dental** — "Facetas, lentes de contato e harmonização do seu sorriso."
3. **Clareamento** — "Clareamento a laser e caseiro com resultados rápidos."
4. **Implantes** — "Implantes dentários com materiais de última geração."
- *Elemento de confiança:* Abaixo dos cards, texto "Mais de 500 sorrisos transformados"

---

## Seção 3 — Sobre (Foto + Texto)

**Mobile (empilhado):**

| Elemento | Instrução Pencil |
|---|---|
| **Título h2** | "Conheça a Odontolight" — 22px negrito, centralizado |
| **Conteúdo** | Primeiro o texto, depois a imagem (ou vice-versa — escolha texto primeiro) |
| **Texto** | Parágrafo ~4 linhas, 16px `#475569`: "Há 8 anos transformando sorrisos em Porto Alegre. Nossa clínica conta com 2 dentistas especializados e uma equipe acolhedora..." |
| **Imagem** | Retângulo placeholder 343x200, bordas arredondadas 12px, com texto "Foto da equipe" |

**Desktop (2 colunas):**

| Elemento | Instrução Pencil |
|---|---|
| **Grid** | 2 colunas: texto à esquerda (50%), imagem à direita (50%) |
| **Imagem** | Placeholder 500x350, `rounded-2xl` |
| **Texto** | Alinhado à esquerda, com mais espaço |

**Copy:**
- Título: "Conheça a Odontolight"
- Texto: "Há 8 anos transformando sorrisos em Porto Alegre. Nossa clínica conta com 2 dentistas especializados que unem experiência e tecnologia de ponta para oferecer o melhor tratamento odontológico. Da prevenção à estética dental, cuidamos de cada detalhe do seu sorriso com acolhimento e excelência."
- *Elemento de confiança:* Mini selos abaixo: "✅ 8 anos de mercado | ✅ +500 pacientes | ✅ Nota 4.9 Google"

---

## Seção 4 — Depoimentos (Carrossel Estático)

**Mobile:**

| Elemento | Instrução Pencil |
|---|---|
| **Fundo** | `#f1f5f9` (slate-100) — muda sutilmente do fundo principal |
| **Título h2** | "O que nossos pacientes dizem" — 22px negrito, centralizado |
| **Card de depoimento** | Retângulo branco 343x200, `rounded-xl`, `shadow-sm`. Centralizado |
| **Avatar** | Círculo 48x48 no topo do card, `#cbd5e1` (cinza) |
| **Nome** | "Maria S." — 16px negrito |
| **Estrelas** | 5 estrelinhas desenhadas (★★★★★) em `#f59e0b` (ou só texto) |
| **Texto** | "Atendimento incrível! Minha lente de contato ficou perfeita. Super recomendo!" — 15px itálico |
| **Indicadores** | Abaixo do card, 3 bolinhas pequenas (a do meio preenchida, laterais vazadas) simulando carrossel |

**Desktop (3 cards visíveis):**

| Elemento | Instrução Pencil |
|---|---|
| **Grid** | 3 cards lado a lado (mesmo gap 16px) |
| **Card** | Cada um com 1/3 da largura, mesmo conteúdo: avatar + nome + estrelas + texto |
| **Indicadores** | Abaixo, centralizado |

**Copy dos depoimentos:**
1. "Atendimento incrível! Minha lente de contato ficou perfeita. Super recomendo!" — *Maria S.*
2. "Fiz clareamento e o resultado superou minhas expectativas. Equipe muito profissional." — *Carlos A.*
3. "Odontolight é referência em implantes. Fui super bem atendido do início ao fim." — *Juliana M.*
- *Elemento de confiança:* "Nota 4.9 ★★★★★ no Google" abaixo dos cards

---

## Seção 5 — Galeria de Resultados

**Mobile (grid 1-2 colunas):**

| Elemento | Instrução Pencil |
|---|---|
| **Título h2** | "Resultados reais" — 22px negrito, centralizado |
| **Subtítulo** | "Antes e depois dos nossos pacientes" — 16px |
| **Grid** | 2 colunas lado a lado, 3-4 linhas empilhadas |
| **Placeholder** | Cada célula: retângulo 165x120, `bg-gray-200`, bordas 8px, com texto "Antes/Depois" |
| **Total** | 6-8 placeholders no grid |

**Desktop (4 colunas):**

| Elemento | Instrução Pencil |
|---|---|
| **Grid** | 4 colunas, mesma largura. 2 linhas = 8 fotos |
| **Placeholder** | Mantém bordas arredondadas |

**Copy:**
- Título: "Resultados reais"
- Subtítulo: "Antes e depois dos nossos pacientes"
- *Elemento de confiança:* Sobreposição sutil em cada card: "Ver mais" ou um小手アイコン

---

## Seção 6 — FAQ (Accordion)

**Mobile:**

| Elemento | Instrução Pencil |
|---|---|
| **Título h2** | "Perguntas frequentes" — 22px negrito, centralizado |
| **Subtítulo** | "Tire suas dúvidas sobre nossos serviços" |
| **Acordeão (4 itens)** | 4 retângulos empilhados, cada um: 343x60 (fechado), `bg-white`, borda inferior `#e2e8f0` |
| **Indicador** | Símbolo "+" ou "›" na ponta direita de cada linha, `#0284c7` |
| **Item expandido** | O primeiro item desenhado mais alto (~120px), com texto visível abaixo da pergunta |

**Desktop (largura limitada):**

| Elemento | Instrução Pencil |
|---|---|
| **Container** | Centralizado, largura máxima ~700px |
| **Acordeão** | Mesmo visual, itens mais largos |

**Copy das perguntas:**
1. **"Quanto tempo dura uma limpeza dental?"** — "Em média 40 minutos. Recomendamos a cada 6 meses."
2. **"Vocês aceitam convênios?"** — "Sim! Trabalhamos com os principais planos odontológicos."
3. **"O clareamento dental dói?"** — "Não. Pode haver sensibilidade leve, mas controlamos com protocolos especiais."
4. **"Qual o valor da consulta inicial?"** — "A primeira consulta é gratuita para novos pacientes."
- *Elemento de confiança:* Texto discreto no final: "Ainda com dúvidas? Agende uma avaliação gratuita" (linkado)

---

## Seção 7 — Formulário de Agendamento

**Mobile (container estreito):**

| Elemento | Instrução Pencil |
|---|---|
| **Fundo** | `#f1f5f9` (slate-100) — igual à seção de depoimentos |
| **Título h2** | "Solicite seu agendamento" — 22px negrito, centralizado |
| **Subtítulo** | "Preencha os dados e entraremos em contato em até 15 minutos" |
| **Container** | Retângulo branco centralizado, 343px de largura, `rounded-xl`, `shadow-sm`, padding interno |
| **Campos (4)** | Desenhar 4 retângulos de entrada (343x48 cada), borda `#cbd5e1` de 2px, com texto interno "Nome completo", "Telefone / WhatsApp", "E-mail", "Selecione o serviço" |
| **Botão** | Retângulo 343x52, `#10b981`, "Enviar solicitação" branco negrito |
| **Checkbox** | Abaixo do botão, quadradinho + texto "Aceito receber contato via WhatsApp" (pequeno, 12px) |

**Desktop (não muda muito):**

| Elemento | Instrução Pencil |
|---|---|
| **Container** | `max-w-md` (mesmo estreito), centralizado na página |
| **Campos** | Mesmo layout, um abaixo do outro. Pode fazer grid 2 colunas para Nome + Telefone lado a lado (opcional) |

**Copy:**
- Título: "Solicite seu agendamento"
- Subtítulo: "Preencha seus dados e entraremos em contato em até 15 minutos pelo WhatsApp"
- Placeholders: "Nome completo", "Telefone / WhatsApp", "E-mail", "Selecione o serviço"
- CTA: "Enviar solicitação"
- *Elemento de confiança:* Abaixo do botão, texto "🔒 Seus dados estão seguros conosco" + ícone de cadeado

---

## Seção 8 — Footer (Mapa + Contato)

**Mobile (empilhado):**

| Elemento | Instrução Pencil |
|---|---|
| **Fundo** | `#0f172a` (slate-900) — escuro |
| **Logo** | Texto "🦷 Odontolight" em branco, 18px |
| **Endereço** | "Rua Exemplo, 123 — Porto Alegre, RS" — 14px, `#cbd5e1` |
| **Telefone** | "(51) 99999-8888" — 14px, branco |
| **E-mail** | "contato@odontolight.com.br" — 14px, branco |
| **Mapa** | Retângulo placeholder 343x180, `#334155`, com texto "Mapa Google Maps" centralizado |
| **Redes** | 3 círculos pequenos lado a lado (Instagram, Facebook, WhatsApp) |
| **Copyright** | "© 2024 Odontolight. Todos os direitos reservados." — 12px, `#64748b` |

**Desktop (grid 3-4 colunas):**

| Elemento | Instrução Pencil |
|---|---|
| **Layout** | 3 colunas: Info (esquerda) | Mapa (centro, maior) | Redes (direita) |
| **Mapa** | Ocupa destaque, 500x250 |

**Copy:**
- Endereço: "Rua Exemplo, 123 — Bairro Centro — Porto Alegre, RS"
- WhatsApp: "(51) 99999-8888"
- E-mail: "contato@odontolight.com.br"
- *Elemento de confiança:* Selos na coluna da direita: "⭐ Google 4.9" + "🔒 Site Seguro" + "📱 Responde em até 15 min"

---

## Elementos Globais (Presentes em Todas as Seções)

| Elemento | Instrução Pencil |
|---|---|
| **WhatsApp Flutuante** | Círculo verde (`#25D366`) 56x56, fixo no canto inferior direito. Desenhar em todas as telas. Ícone do WhatsApp dentro (ou "W" branco). Sombra ao redor. |
| **Nav (Mobile)** | Hamburger (3 linhas horizontais) no topo direito. Ou apenas o logo centralizado para landing page única — simplificado. |
| **Nav (Desktop)** | Links horizontais no topo direito: Serviços | Sobre | Depoimentos | FAQ | Contato. CTA "Agende" verde no canto. |

---

## Checklist Final de Consistência

- [ ] Fundo principal `#f8fafc` em todas as seções (exceto Depoimentos e Formulário que usam `#f1f5f9`, Footer que usa `#0f172a`)
- [ ] Cards sempre com bordas arredondadas (`rounded-xl` ~12px) e sombra sutil
- [ ] Botões CTA sempre `#10b981` com texto branco
- [ ] Destaques e ícones sempre `#0284c7`
- [ ] Mobile: elementos centralizados e ocupando largura total com padding `p-4`
- [ ] Desktop: grids de 2-4 colunas, conteúdo mais espaçado
- [ ] Contrastes: texto `#0f172a` sobre fundo `#f8fafc` (AA+), texto branco sobre verde `#10b981` (AA)
