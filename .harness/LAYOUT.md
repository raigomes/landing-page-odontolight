# 🎨 DIRETRIZES VISUAIS E COMPORTAMENTAIS (PENCIL.DEV)

## 🩺 Paleta de Cores (Tailwind CSS)

- **Fundo Principal:** `bg-slate-50` (Cinza claro e limpo para ambiente médico).
- **Texto Principal:** `text-slate-900` (Contraste alto para leitura).
- **Cor de Destaque/Confiança:** `text-sky-600` / `bg-sky-600` (Azul odontológico).
- **Cor de Conversão (CTA):** `bg-emerald-500` / `text-white` (Verde WhatsApp com alto contraste).

## 📱 Regras Visuais de Seções (Mobile-First)

### 1. Hero Section

- **Mobile:** Texto centralizado, título forte (`h1`), botão CTA verde ocupando a largura total e imagem oculta ou abaixo do botão para não quebrar o carregamento.
- **Desktop:** Duas colunas (`grid md:grid-cols-2`). Texto na esquerda, imagem profissional do dentista/clínica com bordas arredondadas (`rounded-2xl`) na direita.

### 2. Serviços (Cards)

- **Mobile:** Uma coluna empilhada verticalmente.
- **Desktop:** Quatro colunas (`grid md:grid-cols-4`). Cards com fundo branco (`bg-white`), bordas arredondadas (`rounded-xl`), sombra sutil (`shadow-sm`) e um ícone sutil do Shadcn/ui no topo de cada card.

### 3. Formulário de Agendamento

- **Layout:** Centralizado, container estreito (`max-w-md mx-auto`), simulando uma ficha de atendimento limpa. Campos com bordas bem marcadas para acessibilidade.
- **Botão:** Destacado com animação de carregamento (`spinner`) quando clicado.

### 4. Botão Flutuante do WhatsApp

- **Posição:** Canto inferior direito fixo (`fixed bottom-6 right-6 z-50`).
- **Visual:** Ícone do WhatsApp redondo, verde, com pulso sutil de animação e `aria-label` obrigatório para leitores de tela.
