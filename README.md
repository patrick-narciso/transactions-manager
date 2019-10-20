<div align="center">
<h1>Simulador de Transações Financeiras</h1>

<p>Simulador que permite que os usuários adicionem transações (sendo elas crédito ou débito), consultem a lista com todas as transações ordenadas e tenham acesso ao saldo total das suas transações.<p>

[![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/patrick-narciso/anticipation-calculator/blob/master/LICENSE)

</div>

## Desenvolvimento

### Tecnologias Utilizadas

- HTML 5
- CSS3
- React
- React Hooks
- Redux
- [Jest](https://jestjs.io/)
- [Webpack](https://webpack.js.org/)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Babel](https://babeljs.io/)

### Pré-requisitos

Para execução e desenvolvimento do projeto é necessário possuir o [Node](https://nodejs.org/en/)instalado em sua máquina.

### Setup Dev

Para ver o projeto rodando, primeiro clone o repositório.

```shell
git clone https://github.com/patrick-narciso/transactions-manager.git
```

Navegue até o diretório e instale as dependências do projeto.

```shell
cd transactions-manager/
yarn install
```

Feito isso, as dependências estarão instaladas. Agora, bastar executar o comando abaixo e abrirá uma aba no seu browser principal na porta 3000 com o projeto rodando.

```shell
yarn start
```

### Release

Para gerar uma versão basta executar

```shell
yarn run release
```

Feito isso, abrirá uma CLI interativa com algumas perguntas, após respondê-las será
feito um commit de release, gerada uma tag no repositório e lançado um release com a tag.

## Versionamento

Para versionamento está sendo utilizada semantic version [SemVer](http://semver.org/).

## Testes

Para execução de testes automatizados, basta executar

```shell
yarn test ou yarn test:watch
```

Para verificar cobertura de testes

```shell
yarn test:coverage
```

## Design Pattern

Para este projeto foi utilizado ao máximo o paradigma de programação funcional. Prezando
por dados imutáveis, funções puras, coesas e curtas. Foi utilizado também o padrão 'Redux Ducks' onde consiste em unificar actions, reducers e types de um mesmo módulo em um único arquivo tornando a aplicação mais escalável.

## Licensing

[MIT](LICENSE)
