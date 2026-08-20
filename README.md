# Portfólio — versão HTML estática

Sem build, sem Node, sem instalação. Só HTML, CSS e JavaScript puro.

## Como abrir

Dê duplo clique em `index.html` — abre direto no navegador.

## Como editar o conteúdo

Um único arquivo: `data.js`. Todo texto marcado `[preencher: ...]` indica
o que vai ali. Não precisa mexer em `index.html`, `case.html` nem `styles.css`
para trocar textos — tudo é lido de `data.js` via JavaScript.

Para adicionar um case novo, duplique um objeto dentro do array `CASES` em
`data.js` (troque o `slug` para algo único, ex. `"case-3"`).

## Como compartilhar

- **Mais simples**: zipe a pasta inteira e mande por e-mail/WhatsApp — quem
  receber só precisa descompactar e abrir `index.html`.
- **Com link público**: suba a pasta em qualquer hospedagem de site estático
  gratuita — [Netlify Drop](https://app.netlify.com/drop) (arrasta a pasta e
  já gera link), [Vercel](https://vercel.com) ou GitHub Pages. Nenhuma delas
  exige conhecimento técnico além de arrastar a pasta.

## Estrutura

```
index.html    → página inicial (hero, sobre, experiência, lista de cases, contato)
case.html     → página de case — renderiza qualquer case via ?slug=case-1, case-2 etc.
data.js       → ÚNICO lugar para editar conteúdo
styles.css    → todo o visual (cores, tipografia, espaçamento)
theme.js      → alternância dark/light, com preferência salva no navegador
```
