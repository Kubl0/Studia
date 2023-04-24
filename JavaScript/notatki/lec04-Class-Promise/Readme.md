## Temat przewodni
# Inheritance, ES6 Class, JavaScript Event Loop, Promise

## Poruszane zagadnienia

### Dziedziczenie (prototypowe) w JS i ES6 Class
1. Właściwość `prototype` i (ściśle prywatna, do specjalnych zastosowań) właściwość `__proto__`
2. Dziedziczenie obiektów i przesłanianie metod (ang. override)
3. Klasy w JavaScript (a konstruktory, wykorzystanie babel)
4. Dziedziczenie przy użyciu `extends`

### Concurrency model in JavaScript
1. Stack, Heap, Queue
2. JavaScript Event Loop
   1. Run-to-completion
3. Web API

### Promise (do kontynuacji na następnych zajęciach)
1. Przykłady na funkcje typu `callback`, funkcja `setTimeout()`
1. Użycie `Promise`
    1. Gwarancje
2. Promise API
    1. Stany `pending`, `fulfilled [settled]`, `rejected [settled]`
3. `Fetch` (w przeglądarce)
4. Axios (w node)

### Środowisko pracy
1. NodeJS
2. Yarn
2. BabelJS
3. ESlint
4. Nodemon
6. Axios

### Przydatne polecenia
```
> yarn add axios
```

### Materiały podstawowe, dokumentacje, tutoriale
- [Concurrency model and the event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
- [Use Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Promise API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JSON Placeholder](https://jsonplaceholder.typicode.com)
- [Web API Response)](https://developer.mozilla.org/en-US/docs/Web/API/Response)

### Materiały dodatkowe, ciekawostki, blogi
- [EventLoop visualization 1](http://latentflip.com/loupe/)
- [EventLoop visualization 2](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)
