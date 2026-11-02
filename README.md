# Desafio 01 - Calculadora com React

Projeto desenvolvido como parte da **Formação React Developer** na plataforma da **Digital Innovation One (DIO)**.

Neste desafio prático foi construída uma calculadora funcional com **React** e **Styled-Components**, abordando componentização, estados (`useState`), manipulação de eventos e operações matemáticas completas.

---

## 🚀 Funcionalidades

- **Operações Básicas:**
  - Soma (`+`)
  - Subtração (`-`)
  - Multiplicação (`x`)
  - Divisão (`/`) com prevenção de divisão por zero (`Erro`)
- **Operações Adicionais:**
  - Porcentagem (`%`)
  - Inversão de sinal (`+/-`)
  - Números decimais (`.`)
  - Limpar tudo (`C`)
  - Apagar último dígito (`DEL`)
- **Cálculo Contínuo:** Suporte a encadeamento de operações sucessivas antes de pressionar igual (`=`).
- **Interface Responsiva:** Design escuro moderno, cantos arredondados, efeitos hover e feedback tátil ao clicar.
- **Testes Automatizados:** Testes unitários com `@testing-library/react` e Jest cobrindo as principais operações.

---

## 🛠️ Tecnologias Utilizadas

- **React 18**
- **JavaScript (ES6+)**
- **Styled-Components** (CSS-in-JS)
- **Testing Library / Jest**
- **Create React App**

---

## 📂 Estrutura de Pastas

```
trilha-react-desafio01-calculadora/
├── public/                 # HTML e ícones estáticos
├── src/
│   ├── components/
│   │   ├── Button/         # Componente de botão reutilizável e estilos
│   │   └── Input/          # Visor/display da calculadora
│   ├── App.js              # Lógica principal, estados e layout
│   ├── App.test.js         # Testes automatizados unitários
│   ├── global.js           # Estilos globais (reset CSS)
│   ├── index.js            # Ponto de entrada do React DOM
│   └── styles.js           # Containers e componentes styled
├── package.json
└── README.md
```

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 16+)
- npm ou yarn

### 1. Clonar o repositório
```bash
git clone https://github.com/MuriloBGodoy/trilha-react-desafio01-calculadora.git
cd trilha-react-desafio01-calculadora
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar a aplicação
```bash
npm start
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🧪 Como Rodar os Testes

Para executar os testes unitários automatizados:

```bash
npm test -- --watchAll=false
```

Resultado:
```text
PASS src/App.test.js
  ✓ renderiza calculadora com valor inicial 0
  ✓ realiza soma corretamente (7 + 5 = 12)
  ✓ realiza multiplicacao corretamente (8 x 9 = 72)
  ✓ realiza divisao corretamente (9 / 3 = 3)
  ✓ limpa a calculadora com o botao C

Tests: 5 passed, 5 total
```
