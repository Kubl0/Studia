**Zadanie 1.**

Wykorzystując asynchroniczną funkcję `getNum` (używającą pomocniczej funkcji `getRand`):

```javascript
const getRand = () => {
  return Math.floor(Math.random() * 1000);
};

const getNum = (cb) => {
  setTimeout(() => {
    cb(getRand());
  }, getRand() * 5);
};
```

zdefiniuj funkcję

```javascript
const asyncSort = (dim) => {
  // ...
};
```

która **równolegle** uruchamia `dim`-kopii funkcji `getNum`, a otrzymane wyniki (liczby) sortuje malejąco i tak otrzymaną tablicę zwraca jako wynik końcowy.

W rozwiązaniu nie możesz używać mechanizmu `Promise` ani `async-await`.

**Zadanie 2.**

**Nie** korzystając z mechanizmu `async-await`, napisz funkcję:

```javascript
const connect = (funTab, fun) => { ... };
```

spełaniającą poniższe warunki.

- Pierwszym argumentem funkcji `connect` jest tablica funkcji asynchronicznych, zwracających wartość liczbową.
- Drugim argumentem `connect` jest funkcja asynchroniczna, której jedynym argumentem jest wartość liczbowa, a wynikiem również wartość liczbowa.
- Funkcja `connect` powinna zapewnić, że wszystkie funkcje przekazane w parametrze `funTab` będą wykonywać się „równolegle”.
- Funkcja `connect` powinna zwracać pogrupowane wyniki w formacie:

```javascript
[
    [ wyn_1, fun(wyn_1) ],
    [ wyn_2, fun(wyn_2) ],
    [ wyn_3, fun(wyn_3) ],
    [ wyn_4, fun(wyn_4) ],
    [ wyn_5, fun(wyn_5) ],
    ...
]
```

gdzie `wyn_i` oznacza `funTab[i]()`.

**Zadanie 3.** **Nie** korzystając z Promise.all uzupełnij funkcję `razem`, która przyjmuje tablicę promise'ów. Funkcja ta ma uruchamiać wszystkie promisy równolegle i po wykonaniu wszystkich, uruchomić funkcję, która została przekazana jako callback.

```javascript
razem(promisesTab, callback) {

}
```
