'use strict';
// Zadanie 1.1. 
// Dopisz do pomiÄdzy deklaracjÄ funkcji helloWorld a poleceniem console.log instrukcjÄ wywoĹania helloWorld() tak, aby na ekranie pojawiĹo siÄ jako pierwsze 'No, hello universe!'.
// Nie moĹźesz dopisaÄ nic za console.log()

function helloWorld() {
    console.log('Hello world!');
}

//setTimeout(helloWorld, 1)

//console.log('No, hello universe!');

// Zadanie 1.2. 
// Napisz funkcjÄ, ktĂłra wypisuje w konsoli 'Start!' i po dwĂłch sekundach wypisuje 'Koniec'.

function start_stop() {
    console.log("Start")

    setTimeout(() => {
        console.log("Stop")
    }, 2000);
}

//start_stop()

// Zadanie 1.3. 
// Napisz funkcjÄ, ktĂłra wypisuje 'Welcome' co sekundÄ w nieskoĹczonoĹÄ.


function welcome() {
    setInterval(() => {
        console.log("Welcome")
    }, 1000);
}

//welcome()

// Zadanie 1.4. 
// Napisz funkcjÄ, ktĂłra wypisuje 'Welcome' co sekundÄ, ale tylko przez 5 sekund. 
// PodpowiedĹş: uĹźyj clearInterval

function welcome2() {
    setTimeout(() => {
        clearInterval(welcome)
    }, 5100);
    const welcome = setInterval(() => {
        console.log("Welcome")
    }, 1000);

}

//welcome2()

// Zadanie 1.5. 
// Napisz funkcjÄ, ktĂłra przyjmuje trzy argumenty: funkcjÄ i dwie liczby. Funkcja bÄdzie wywoĹaĹa podanÄ w argumencie funkcjÄ co x ssekund i automatycznie zatrzyma siÄ po upĹywie y sekund. 
function test(){
    console.log("Test")
}

function welcome3(func,interval, time) {

    setTimeout(() => {
        clearInterval(welcome2)
    }, time*1000+100);

    const welcome2 = setInterval(func,interval*1000)

}

welcome3(test,1,3)