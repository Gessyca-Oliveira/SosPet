# 🐾 SOS Pet Banabuiú

Aplicativo mobile (React Native + Expo) da ONG **SOS Pet Banabuiú**, que resgata, trata e castra animais em situação de rua em Banabuiú - CE desde 2013.

O app é a versão mobile da landing page da ONG e tem um objetivo principal: **apresentar o trabalho da organização e facilitar doações via Pix**.

---

## 🎯 Para que serve

- **Apresentar a ONG:** quem somos, missão, visão e resultados alcançados.
- **Mostrar o impacto:** números de animais alimentados, resgates, tratamentos e castrações.
- **Explicar para onde vai a ajuda:** alimentação, recuperação e novo lar, e saúde (consultas, remédios e procedimentos).
- **Arrecadar doações:** o doador copia a chave Pix ou lê o QR Code em poucos toques.

---

## ✨ Funcionalidades

| Seção | O que mostra |
|---|---|
| **Início** | Título de impacto, botões de ação, foto de destaque e faixa animada com os serviços |
| **Números** | Cartão "Juntos, já conseguimos" com as estatísticas da ONG |
| **Sobre nós** | História da ONG, foto da equipe, missão e visão |
| **Ações** | Cards explicando como cada doação é usada |
| **Quero doar** | Passo a passo, QR Code e chave Pix com botão **Copiar** |

Outros detalhes:

- Menu fixo no topo que **rola a tela até a seção** escolhida.
- Botão de copiar a chave Pix com confirmação visual ("Copiado!").
- Faixa vermelha animada em loop contínuo.
- Layout responsivo, com largura máxima em telas grandes.

---

## 🧱 Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) e [Expo Router](https://docs.expo.dev/router/introduction/)
- `expo-clipboard` para copiar a chave Pix
- `react-native-safe-area-context` para áreas seguras do aparelho
- JavaScript / TypeScript

---

## 🏗️ Arquitetura

O projeto é organizado por **responsabilidade**. Cada pasta tem um papel claro, e o código de interface fica separado dos dados e do tema visual.

```
sos-pet/
├── assets/                    # imagens do projeto (fotos, ícones)
└── src/
    ├── app/                   # ROTAS (Expo Router)
    │   ├── _layout.tsx        # layout raiz, sem cabeçalho nativo
    │   └── index.tsx          # tela única: monta todas as seções
    │
    ├── sections/              # SEÇÕES da página (blocos grandes)
    │   ├── Hero.js            # Início
    │   ├── Stats.js           # Números
    │   ├── About.js           # Sobre nós
    │   ├── Actions.js         # Ações
    │   ├── Donate.js          # Quero doar
    │   └── index.js
    │
    ├── components/            # COMPONENTES reutilizáveis
    │   ├── common/            # Button, Photo, Typography
    │   ├── layout/            # Header, Marquee, Footer
    │   └── PixCard.js         # QR Code + chave Pix + copiar
    │
    ├── theme/                 # cores e tipografia
    ├── config/constants.js    # dados fixos: chave Pix, menu, números, passos
    └── assets/images.js       # mapa central das imagens
```

### Camadas

1. **Rotas (`app/`):** o `index.tsx` é a única tela. Ele organiza a ordem das seções e controla a rolagem do menu.
2. **Seções (`sections/`):** cada bloco da landing page é um componente independente.
3. **Componentes (`components/`):** peças pequenas e reutilizáveis, usadas pelas seções. Botão, foto com placeholder, títulos, cabeçalho, faixa animada, rodapé e cartão Pix.
4. **Tema e dados (`theme/`, `config/`, `assets/`):** tudo que muda com frequência fica centralizado. Para trocar uma cor, o texto de um número ou a chave Pix, basta editar um arquivo só.

### Fluxo de dados

```
config/constants.js ─┐
theme/colors.js ─────┼──► components ──► sections ──► app/index.tsx ──► tela
assets/images.js ────┘
```

Não há backend: os dados são estáticos e ficam no próprio app. O doador faz o Pix pelo aplicativo do banco dele, e a ONG recebe direto na conta.

### Navegação por seções

Cada seção é envolvida por uma `View` com `onLayout`, que guarda a posição vertical dela. Quando o usuário toca em um item do menu, o `ScrollView` rola até essa posição, descontando a altura do cabeçalho fixo.

---

## ▶️ Como rodar

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior e o app **Expo Go** no celular.

```bash
# 1. Instale as dependências
npm install

# 2. Instale o pacote de clipboard
npx expo install expo-clipboard

# 3. Inicie o projeto
npx expo start
```

Escaneie o QR Code do terminal com o Expo Go (Android) ou com a câmera (iOS).

---

## ⚙️ Configuração

### Chave Pix
Edite `src/config/constants.js`:

```js
export const PIX_KEY = 'sua-chave-pix-aqui';
```

### Imagens
Coloque as fotos em `assets/images/` e ligue em `src/assets/images.js`:

```js
hero: require('../../assets/images/hero.png'),
```

Enquanto uma imagem for `null`, o app mostra um bloco colorido com emoji no lugar.

### Cores
Edite `src/theme/colors.js`.

### Contato e rodapé
Preencha Instagram e CNPJ em `src/components/layout/Footer.js`.

---

## 🛣️ Próximos passos

- [ ] Fotos reais dos animais e da equipe
- [ ] QR Code oficial do Pix
- [ ] Fontes personalizadas (Oswald / Bebas Neue)
- [ ] Links para Instagram e WhatsApp da ONG
- [ ] Galeria de animais disponíveis para adoção
- [ ] Publicação nas lojas (Google Play e App Store)

---

## 🐶 Sobre a ONG

A **SOS Pet Banabuiú** atua desde 2013 e já mudou a vida de mais de 500 animais em situação de rua.

> Proteger, cuidar e dar novas oportunidades a animais que precisam de ajuda.

---

## 📄 Licença

Defina a licença do projeto (por exemplo, MIT) ou mantenha o arquivo `LICENSE` já presente no repositório.
