'use strict';

// 2.1 StwĂłrz obiekt klasy Promise -> niech zakoĹczy siÄ powodzeniem (resolve) po 5 sekundach i zwrĂłci string 'UdaĹo siÄ!'. 
// Jako callback niech wypisze zwrĂłcony string w konsoli.

const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Udało się');
  }).then((string) => {
      console.log(string)
  })



// 2.2 Zmodyfikuj powyĹźszy kod tak, aby zamiast z sukcesem - promise zakoĹczyĹ siÄ poraĹźkÄ i zwracaĹ string 'PoraĹźka'.
// Skorzystaj z then() aby obsĹuĹźyÄ bĹÄd.

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'Porażka');
  }).then((string) => {
      console.log(string)
  }).catch(error => console.log(error))

// 2.3 Zamiast then(), zmodyfikuj powyĹźszy kod uĹźywajÄc catch()

const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'Porażka');
  }).then((string) => {
      console.log(string)
  }).catch(error => console.log(error))

// 2.4 Napisz funkcjÄ multiplyAsync(x,y), ktĂłra zwraca obiekt klasy Promise, koĹczÄcy siÄ poraĹźkÄ, gdy ktĂłryĹ za argumentĂłw jest niepoprawny (nie jest liczbÄ).
// W przeciwnym przypadku zwraca iloczyn dwĂłch liczb. Napisz callback, ktĂłry wypisuje wynik w konsoli.

function multiplyAsync(x, y){
    return new Promise((response, reject) => {
        if (typeof x!="number" || typeof y!="number")
            reject("Zly typ danych")
        
        response(x*y)
    });
};

multiplyAsync(5, 5)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

multiplyAsync("5", 5)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

