

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Imagens](#imagens)
  - [Feito Com](#feito-com)
- [Conectando ao Github API](#conectando-ao-github-api)
- [Explorando](#explorando)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Visão geral](#vis%C3%A3o-geral)

- [Licença](#licen%C3%A7a)
- [Contato](#contato)

## Sobre o Projeto

Esse projeto consiste em um aplicativo que lista os principais repositórios do github, nele você pode obter informaçãos gerais de uma forma rápida e prática além de poder criar uma lista com o seus repositórios preferidos.

### Imagens
Algumas imagens das principais telas do aplicativo.
<div class="row">
  <img src="https://i.ibb.co/5RSryDD/trendings.png" width="30%" height="30%" />
  <img src="https://i.ibb.co/SmqwYJc/details.png" width="30%" height="30%" />
  <img src="https://i.ibb.co/jhk0CZL/favorites.png" width="30%" height="30%" />
<div>


### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando Javascript e React;

- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em Javascript;

- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - O React Native Vector Icons surgiu da necessidade da utilizaçaão de icones para estilizaçaã da interface;


- [Apollo Client](https://www.apollographql.com/docs/react/) - O Apollo Client é uma biblioteca completa de gerenciamento de estado para aplicativos JavaScript. Basta escrever uma consulta GraphQL, e o Apollo Client cuidará de solicitar e armazenar em cache seus dados, bem como atualizar sua interface do usuário.

- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;

- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
- [Eslint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

### Conectando ao Github API

1. Para se conectar com a api do github é bem simples. Primeiro certifique-se de ter um token de acesso, caso não tenha [clique aqui](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

2. Com o token "em mãos" acesse o arquivo: `src/services/apollo.js`

3. Abrindo o arquivo procure por:

```javascript
const authLink = new ApolloLink((operation, forward) => {
  const token = "ADICIONE_AQUI_SEU_TOKEN";

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });
  return forward(operation);
});
```
4. Agora apenas substitua constante "token" pelo seu.

## Explorando
Vamos da uma olhada mais de perto nos arquivos do projeto e suas funções.

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
SkillopayChallenge
├── src/
│   ├── components/
│   │   └── nomeComponente
│   │       ├── index.js
│   │       └── styles.js
│   ├── images/
│   │   └── example.png
│   ├── pages/
│   │   └── nomePagina
│   │       ├── index.js
│   │       └── styles.js
│   ├── queries/
│   │   └── index.js
│   ├── resolvers/
│   │   └── index.js
│   ├── services/
│   │   └── apollo.js
│   ├── styles/
│   │   └── colors.js
│   │   ├── general.js
│   │   ├── index.js
│   │   └── metrics.js
│   ├── utils/
│   │   └── index.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── LICENSE
├── package.json
└── README.md
```


### Visão geral

Uma breve explicação de como o template do projeto foi estruturado, para assim facilitar seu compreendimento.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;


  - **images** - Diretório para armazenar imagens em geral que possam ser utilizadas na aplicação, esse diretório pode ser renomeado para `assets` e dentro de `assets` criar um novo diretório para guardar somente as imagens, assim é possível ter um diretório para guardar todo tipo de arquivo, e não apenas imagens;

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **pageName** - Diretório exemplo de uma página cujo nome é **Main**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

      - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;
      - **styles.js** - Arquivo com a estilização da página, responsável por "dar vida" a nossas telas :)

  - **componenets** - Essse Diretório segue o mesmo padrão descrito no "PageName", entretanto para componentes gerais da aplicação.

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **apollo.js** - Arquivo com a configuração da biblioteca Apollo-boost;

  - **queries** - Esse diretório centraliza todas as "queries" para que que possam ser reutilizadas e alteradas facilmente;

  - **styles** - Esse diretório é responsável em conter os estilos globais, utilizando em todo o desenvolvimento;

  - **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

  - **routes.js** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigator disponibilizados na biblitoeca React Navigation;

- **.editorconfig** - Arquivo destinado à configuração do Plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **dependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências que devem ser instaladas na aplicação, vale lembrar que as dependências que já vem por padrão no projeto como `react` e `react-native` não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **devDependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências de desenvolvimento que devem ser instaladas na aplicação, vale lembrar que as dependências de desenvolvimento que já vem por padrão no projeto como `@babel/core`, `eslint`, entre outras, não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **jsconfig.json** - Arquivo de configuração do Javascript no Editor, ele é o responsável por ativar o Auto Complete de códigos Javascript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.



## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.



## Contato

Matheus Daeuble - [Github](https://github.com/matheusdaeuble) - **matheusdaeuble@gmail.com.br**
