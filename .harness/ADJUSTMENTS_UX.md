# 🛠️ AJUSTES REQUERIDOS NO LAYOUT (PENCIL.DEV)

## 🚨 Críticos (Ajustar no Canvas/Código do `.pen`)

### 1. **[Visual/CRO]**: 📋 Relatório de Auditoria: CRO & Acessibilidade (WCAG)

**Projeto:** Landing Page - Clínica Odontolight  
**Público-Alvo:** Adultos de 25 a 50 anos  
**Foco da Análise:** Validação de Wireframe (Mobile & Desktop) antes da codificação.

---

#### 🎯 1. Diagnóstico dos Pilares Estruturais

##### 📱 Espaçamento e Alvos de Clique (Mobile)

- **Status:** Crítico para Acessibilidade.
- **Diagnóstico:** O espaçamento macro entre as seções está correto, mas a interface falha em **microacessibilidade** no mobile. Os ícones de redes sociais no rodapé e os gatilhos do FAQ estão muito próximos, gerando o risco de "cliques acidentais".
- **Impacto WCAG:** Descumpre o critério **WCAG 2.2 SC 2.5.8 (Target Size - Minimum)**. Elementos interativos exigem área mínima de **24x24px** de espaçamento, mas para o público de 25-50 anos no celular, o ideal de mercado é o padrão Apple/Google de **48x48px**.

##### 💡 Proposta Única de Valor (UVP) no Hero

- **Status:** Regular (Precisa de mais clareza).
- **Diagnóstico:** A frase _"Sorriso dos seus sonhos está mais perto do que você imagina"_ foca no apelo emocional, mas peca na clareza imediata. O público dessa faixa etária é pragmático e decide em 3 segundos se fica na página baseado em três perguntas: _O que é? Onde fica? Por que eles?_
- **Ajuste de CRO:** Rebaixar a frase atual para sub-headline emocional e criar uma headline direta, focada em autoridade e localização.

##### 📝 Complexidade do Formulário de Agendamento

- **Status:** Alerta de Fricção.
- **Diagnóstico:** Quatro campos (Nome, Telefone, E-mail, Serviço) estão no limite do aceitável, mas geram fricção desnecessária para o nicho de saúde. Exigir e-mail no mobile reduz a conversão, pois o imediatismo do público busca contato direto via WhatsApp. O campo de seleção padrão (`select`) também adiciona cliques extras no celular.

---

#### 🛠️ 3 Melhorias Visuais Urgentes (Antes de Codar)

##### 1. Reestruturação do Quadrante do Hero (Desktop)

- **Problema:** O fluxo visual padrão de leitura ocidental ocorre em formato de "F" (esquerda para a direita). O wireframe atual divide a atenção de forma dispersa.
- **Ajuste:** Garanta que a **UVP forte, sub-headline e o botão de CTA principal fiquem alinhados à esquerda**. A imagem real e humanizada do dentista/consultório deve ocupar o lado direito. Logo abaixo do CTA esquerdo, inclua elementos de prova social imediata (ex: _"⭐ 4.9 no Google (200+ avaliações)"_) para quebrar a barreira do medo médico logo no primeiro scroll.

##### 2. Cards de Serviços como Gatilhos Ativos

- **Problema:** A seção "Nossos Serviços" funciona hoje apenas como blocos estáticos de texto informativo.
- **Ajuste:** Adicione um indicador visual interativo em cada card (uma seta sutil, link ou botão curto como _"Ver detalhes"_). Além de melhorar a experiência de navegação por toque (mobile), isso permite mapear os cliques individualmente via ferramentas de analytics para descobrir quais tratamentos geram mais interesse comercial.

##### 3. Substituição do Dropdown por "Pílulas de Seleção" (Chips)

- **Problema:** O elemento `<select>` tradicional esconde as opções e exige que o usuário clique, role a lista nativa do celular e clique novamente para escolher o serviço.
- **Ajuste:** Elimine o dropdown. Exiba os 4 principais serviços da clínica como botões estáticos de seleção rápida (_chips/tags_) diretamente expostos no corpo do formulário. O usuário escolhe o tratamento com apenas um toque direto na tela.

---

#### 🚀 Recomendações de Código (Next.js & Tailwind CSS)

```tsx
// Exemplo de componente de formulário com as boas práticas aplicadas
export function AgendamentoForm() {
  return (
    <form className="space-y-6">
      {/* Área de Seleção por Chips (Substituindo o Select) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Qual tratamento você procura?
        </label>
        <div className="flex flex-wrap gap-2">
          {["Clínico Geral", "Estética", "Implantes", "Ortodontia"].map(
            (servico) => (
              <button
                key={servico}
                type="button"
                className="px-4 py-3 border rounded-full text-sm font-medium hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 min-h-[48px]"
              >
                {servico}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Alvo de clique expandido para acessibilidade no Botão */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white font-bold rounded-lg px-6 py-4 min-h-[48px] text-base hover:bg-green-700 transition-colors"
      >
        Solicitar Agendamento via WhatsApp
      </button>
    </form>
  );
}
```

## 🚨 Melhorias (Ajustar no Canvas/Código do `.pen`)

### 2. **[Técnico/QA]**: Guardião de QA

#### a. **Indicadores visuais de carrossel ausentes na seção Depoimentos**

- O guia PENCIL_GUIDE.md sugere "3 bolinhas pequenas" simulando navegação.
- O wireframe atual lista os 3 depoimentos lado a lado (desktop) ou empilhados (mobile) sem indicador de carrossel.
- _Sugestão:_ Adicionar 3 círculos (○ ● ○) abaixo dos cards no mobile para sinalizar que há navegação horizontal.

#### b. **Símbolo de expansão "+" ausente nos itens do FAQ**

- O guia sugere um indicador "+" ou "›" na ponta direita dos itens fechados.
- O wireframe atual usa apenas diferença de altura (56px fechado vs 120px expandido).
- _Sugestão:_ Adicionar um ícone "+" em `#0284c7` no canto direito de cada item.

#### c. **Imagem placeholder do Hero no mobile sem borda arredondada consistente**

- Placeholder atual tem `cornerRadius=12`, o guia sugere borda tracejada (já implementada) com `rounded-2xl` (16px).
- Consistência mantida, sem impacto real.
