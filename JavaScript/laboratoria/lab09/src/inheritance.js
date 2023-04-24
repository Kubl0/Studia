/* eslint-disable no-unused-vars */
'use strict';

const book = {
    title: "Potop",
    author: "Henryk Sienkiewicz"
}

//console.log(book.__proto__ === Object.prototype);
//console.log(book.__proto__.__proto__ === null);

const animals = ["dog", "cat", "rabbit", "hamster"];

//console.log(animals.__proto__ === animals.__proto__);
//console.log(animals.__proto__.__proto__ === Object.prototype);
//console.log(animals.__proto__.__proto__.__proto__ === null);

function Animal(animal) {
    this.animal = animal;
}

var dog = new Animal('dog');
var cat = new Animal('cat');

dog.whatIs = function () {
    console.log("It's a " + this.animal);
}

//dog.whatIs()

//console.log(dog.__proto__ === Animal.prototype);
//console.log(dog.__proto__ === cat.__proto__);


function CreateMovie(director, title, year){
    this.director=director;
    this.title=title;
    if(year!=undefined){
        this.year=year
    }
    else{
        this.year='unknown'
    }

    this.isOlder = function(){
        if(this.year>2000){
            return true
        }
        else{
            return false
        }
    }

    this.print = function(){
        console.log(this.director+": "+this.title+" ("+this.year+")")
    }
}
  
const film = new CreateMovie('abc','ABC',2000)  
const film2 = new CreateMovie('abc','ABC',2000) 

//film.print()
//film2.print()

//console.log(film.isOlder())

function CreateInstrument(name, type) {
    const instrument = Object.create({});
    instrument.name=name
    instrument.type=type

    instrument.printInstrument=function(){
        console.log(this.name+" "+this.type)
    }

   return instrument;
}

const gitara = new CreateInstrument('gitara','abc')
const jajo = new CreateInstrument('jajo', 'abc')

//gitara.printInstrument()
//jajo.printInstrument()  


// 1.6. 
// UzupeĹnij poniĹźszy konstruktor, ktĂłry tworzy obiekt dziedziczÄcy po Instrument. Wykorzystaj do jego stworzenia konstruktor z zadania poprzedniego.
// Zdefiniuj funkcjÄ setStrings(number), ktĂłra ustala liczbÄ strun w instrumencie (ta funkcja teĹź powinna byÄ wspĂłĹdzielona). NewStringInstrument powinien mieÄ teĹź dostÄp do funkcji, ktĂłra znajduje siÄ w Instrument.
// PodpowiedĹş: aby zmieniÄ wartoĹÄ zmiennej __proto__ naleĹźy uĹźyÄ - Object.setPrototypeOf(object, prototype) - naleĹźy uĹźyÄ tej funkcji dwa razy w tym rozwiÄzaniu. 

// function CreateStringedInstrument(name, type, stringsCount) {
//     const newStringedInstrument = ...

//     return newStringedInstrument;
// }


// const stringedInstrument = CreateStringedInstrument('gitara', 'strunowy', '3');
// stringedInstrument.printInstrument();
// stringedInstrument.setStrings(3);


// 1.7. 
// Przeanalizuj poniĹźszy kod i odpowiedz na umieszczone w nim pytania.

function Instrument(name, type) {
    this.name = name;
    this.type = type;
}

Instrument.prototype.printInstrument = function () {
    console.log("Instrument: " + name + ", typ: " + type);
}
function StringedInstrument(stringsCount, name, type) {
    Instrument.call(this, name, type);
    this.stringsCount = stringsCount;
}

StringedInstrument.prototype = Object.create(Instrument.prototype);

// a) StwĂłrz instancjÄ StringedInstrument.

// b) W jaki sposĂłb odwoĹaÄ siÄ do metod printInstrument i printStringedInstrument?

// c) ZastÄp wywoĹanie call() funkcjÄ apply() 

// 1.8.
// UtwĂłrz obiekt Animal z polem 'name' i funkcjÄ printName, po ktĂłrym bÄdÄ dziedziczyĹy Mammal (z polem age i funkcjÄ getAge) i Fish (z polem weight i funkcjÄ increaseWeight()) . 
// NastÄpnie stwĂłrz kolejne obiekty - Dog (z polem breed i nadpisaniem funkcji getAge(), ktĂłra tutaj bÄdzie najpierw wywoĹywaĹa funkcjÄ getAge() z klasy dziedziczonej, a nastÄpnie mnoĹźyĹa wynik razy 4 i wyĹwietlaĹa go) i Salmon (z funkcjÄ catch()), ktĂłre bÄdÄ dziedziczyĹy odpowiednio po Mammal i Fish.
// W razie problemĂłw wzoruj siÄ na rozwiÄzaniu z poprzedniego zadania.