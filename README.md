# ⬡ CadastroLab

> formulário de cadastro que vai além do básico.

---

## sobre o projeto

Atividade prática do curso de JavaScript da EBAC. A proposta era criar um formulário de cadastro com fetch para preenchimento automático de endereço via CEP e persistência dos dados com `sessionStorage`. Aproveitei pra ir além e transformar isso num produto com personalidade própria.

O diferencial está na **validação progressiva com score de completude** — uma barra que avança conforme os campos são preenchidos e validados, e o botão de cadastro só habilita quando tudo está 100% correto. Cada campo tem feedback visual em tempo real, e quem preenche o CEP não precisa digitar mais nada no endereço.

---

## o que foi aplicado

- Fetch na API ViaCEP para preenchimento automático do endereço
- `sessionStorage` para manter os dados ao recarregar a página
- Máscaras automáticas em CPF, telefone e CEP
- `class FormValidator` com `constructor`, métodos de validação e cálculo de score
- Funções auxiliares pequenas e bem nomeadas, seguindo o estilo do curso
- CSS com tokens de cores, espaçamentos e tipografia em `rem`
- Layout responsivo em grid de duas colunas com aside fixo

---

## estrutura

```
src/
└── public/
    ├── script/
    │   └── index.js
    ├── style/
    │   └── style.css
    └── index.html
```

---

## como rodar

Só abrir o `index.html` no navegador. Sem dependências, sem build.

---

## tecnologias

- HTML5 semântico
- CSS3 com custom properties
- JavaScript puro
- API ViaCEP
