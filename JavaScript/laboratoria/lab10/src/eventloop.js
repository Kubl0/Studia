'use strict';
// Zadanie 1.1. 

/* function helloWorld() {
    console.log('Hello world!');
}

setTimeout(() => {
    helloWorld();
}, 10)

console.log('No, hello universe!');
 */


// Zadanie 1.2. 

/* function start(){
    console.log('Start')

    setTimeout(() => {
        console.log('Koniec')
    }, 2000)
}

start()
*/


// Zadanie 1.3. 

/* function welcome(){
    console.log('Welcome')
}

setInterval(welcome, 1000)
*/


// Zadanie 1.4. 
// Napisz funkcjÄ, ktĂłra wypisuje 'Welcome' co sekundÄ, ale tylko przez 5 sekund. 
// PodpowiedĹş: uĹźyj clearInterval


/*
function welcome1(){
    setTimeout(() => {
        clearInterval(myinterval)
    }, 5500)

    const myinterval = setInterval(() => {
        console.log('welcome')
    }, 1000);
}

welcome1()
*/


// Zadanie 1.5. 
// Napisz funkcjÄ, ktĂłra przyjmuje trzy argumenty: funkcjÄ i dwie liczby. 
//Funkcja bÄdzie wywoĹaĹa podanÄ w argumencie funkcjÄ co x ssekund i automatycznie zatrzyma siÄ po upĹywie y sekund. 

function test(){
    console.log('Test')
}

function range(func, x, y){
    
    const interval=setInterval(func, x*1000)

    setTimeout(() => {
        clearInterval(interval)
    }, y*1000);

}

range(test,1,5)