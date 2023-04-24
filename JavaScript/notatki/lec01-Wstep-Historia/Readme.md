## Temat przewodni
# Historia i wprowadzenie do języka JavaScript

## Poruszane zagadnienia

### Historia
1. Początki - 1995
2. Lata 2000 - wojna przeglądarek i silników JS
3. Lata współczesne - standardy ES5 i ES6
4. Wsparcie przeglądarek i środowisk serwerowych

### Wprowadznie
1. Obiekty
2. Tablice

### Środowisko pracy
1. NodeJS
2. Yarn
2. BabelJS
3. ESlint
4. Nodemon

### Przydatne polecenia
```
Sprawdzenie wersji node i npm:
> node -v
> npm -v

Załadanie projektu: 
> yarn init -y

Dodawanie Babel do projektu, zobacz plik .babelrc
>  yarn add --dev @babel/core @babel/cli @babel/preset-env @babel/node

Uruchamianie Babel (po wypróbowaniu, dodanie skryptu "babel": "babel src -d es5out" w package.json)
> ./node_modules/.bin/babel src --out-dir es5out
> yarn babel

Dodawanie nodemon do projektu
> yarn add --dev nodemon

Dodawanie lintera
yarn add --dev eslint eslint-plugin-import eslint-config-airbnb-base 

Konfigurowanie lintera (zobacz plik .eslintrc.json)
./node_modules/.bin/eslint --init

Uruchamianianie lintera (po skonfigurowaniu skryptu "linter": "eslint src/index.js" w package.json)
yarn linter
```

### Materiały podstawowe, dokumentacje, tutoriale
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com)
- [Instalacja Yarn ](https://classic.yarnpkg.com/en/docs/install)
- [BabelJS](https://babeljs.io)
- [ESLint](https://eslint.org)
- [!!! Mozilla Developers Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [!!! MDN Arrrays dodaj do zakładek](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [ES5 / ES6 Compatibility Table](https://kangax.github.io/compat-table/es5/)

### Materiały dodatkowe, ciekawostki, blogi
- [A Brief History of JavaScript by auth0](https://auth0.com/blog/a-brief-history-of-javascript/)
- [A brief history of JavaScript artykuł na Medium.com](https://medium.com/@benastontweet/lesson-1a-the-history-of-javascript-8c1ce3bffb17)
- [Wpis na blogu Brendana Eich](https://brendaneich.com/2008/04/popularity/)
- [Story of NodeJs : How JavaScript took over the web artykuł na Medium.com](https://medium.com/@abhi_/riseofnode-60d8b17c8182)






