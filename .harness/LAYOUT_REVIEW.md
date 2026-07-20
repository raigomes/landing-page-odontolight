# Relatório de Revisão QA — Wireframe Odontolight

## 1. Verificação das 8 Seções Obrigatórias

| # | Seção | Mobile | Desktop |
|---|-------|--------|---------|
| 1 | Hero (com CTA) | ✅ | ✅ |
| 2 | Serviços | ✅ | ✅ |
| 3 | Sobre | ✅ | ✅ |
| 4 | Depoimentos | ✅ | ✅ |
| 5 | Galeria | ✅ | ✅ |
| 6 | FAQ | ✅ | ✅ |
| 7 | Formulário | ✅ | ✅ |
| 8 | Footer | ✅ | ✅ |

Todas as 8 seções estão presentes e na ordem correta em ambos os frames.

## 2. WhatsApp CTA — Acessibilidade e Visibilidade

| Critério | Mobile | Desktop |
|----------|--------|---------|
| Botão presente | ✅ | ✅ |
| Tamanho mínimo (≥48px) | ✅ 56×56px | ✅ 60×60px |
| Cor verde `#25D366` | ✅ | ✅ |
| Sombra para destaque | ✅ | ✅ |
| Posição ao final do fluxo | ✅ (inline, sem sobreposição) | ✅ (inline, sem sobreposição) |

O botão flutuante do WhatsApp está acessível, visível e com tamanho adequado para toque em ambas as versões.

## 3. Ordem dos Blocos para Conversão

```
Header → Hero → Serviços → Sobre → Depoimentos → Galeria → FAQ → Formulário → Footer + WhatsApp
```

A sequência segue a lógica de conversão para pacientes particulares/convênio:
- **Hero** captura atenção com UVP + CTA verde logo no topo.
- **Serviços** mostra o portfólio de procedimentos (cria desejo/dor).
- **Sobre + Depoimentos** constroem confiança e credibilidade social.
- **Galeria** é a prova visual (resultados reais).
- **FAQ** remove objeções.
- **Formulário** é o CTA final de conversão.

A ordem está coerente com o funil de decisão do paciente.

## 4. Consistência Visual

| Item | Ocorrências | Status |
|------|-------------|--------|
| Cards `bg-white` + sombra | 8 | ✅ |
| Botões CTA `#10b981` | 3 (Hero, Form, Nav) | ✅ |
| Destaques `#0284c7` | 14 (mobile) / 9 (desktop) | ✅ |
| Fundo escuro footer | 22 (itens) | ✅ |
| Fundo `#f1f5f9` em seções alternadas | 2 (Depoimentos, Form) | ✅ |

## 5. Pontos Fracos Encontrados

### 🟡 Baixa Prioridade — Melhorias Sugeridas

1. **Indicadores visuais de carrossel ausentes na seção Depoimentos**
   - O guia PENCIL_GUIDE.md sugere "3 bolinhas pequenas" simulando navegação.
   - O wireframe atual lista os 3 depoimentos lado a lado (desktop) ou empilhados (mobile) sem indicador de carrossel.
   - *Sugestão:* Adicionar 3 círculos (○ ● ○) abaixo dos cards no mobile para sinalizar que há navegação horizontal.

2. **Símbolo de expansão "+" ausente nos itens do FAQ**
   - O guia sugere um indicador "+" ou "›" na ponta direita dos itens fechados.
   - O wireframe atual usa apenas diferença de altura (56px fechado vs 120px expandido).
   - *Sugestão:* Adicionar um ícone "+" em `#0284c7` no canto direito de cada item.

3. **Imagem placeholder do Hero no mobile sem borda arredondada consistente**
   - Placeholder atual tem `cornerRadius=12`, o guia sugere borda tracejada (já implementada) com `rounded-2xl` (16px).
   - Consistência mantida, sem impacto real.

### ✅ Pontos Fortes

- Navegação Header com links de âncora (desktop) e hamburger (mobile).
- Título do Hero com `textGrowth: fixed-width` para quebra correta de linha em ambos os breakpoints.
- Bullets de confiança na seção Sobre estão empilhados verticalmente no mobile (sem pipes).
- Descrições e subtítulos alinhados à esquerda no mobile para melhor leitura.
- FAQ com primeiro item expandido para sugerir interatividade.

---

**Conclusão:** O wireframe está aprovado. Nenhum bloqueio encontrado. As 3 sugestões de melhoria (indicadores de carrossel, ícone de expansão no FAQ) podem ser tratadas em iteração futura sem comprometer a usabilidade ou conversão.
