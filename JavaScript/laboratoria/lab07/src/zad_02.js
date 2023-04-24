/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const lp3 = require('./toplist')
const _ = require('lodash')


console.log(lp3)

function utwory(nazwa){
    let array=[];
    for(let i=0;i<lp3.length;i++){
        if(lp3[i].author==nazwa){
            array.push(lp3[i].song)
        }
    }
    return array
}

function zmiana(nazwa,miejsca){
    let array=[];
    for(let i=0;i<lp3.length;i++){
        if(lp3[i].author==nazwa){
            if(lp3[i].change>=miejsca){
                array.push(lp3[i].song)
            }
        }
    }
    return array
}

function sortuj(kier, n){
    let sortedArray=[]
    sortedArray=_.orderBy(lp3, ['change'], [kier]);
    sortedArray=_.dropRight(sortedArray, n)
    return sortedArray
}

function obiekt(){
    let obiekt = _.zipObject(['author', 'song'],[lp3[0].author, lp3[0].song])
    return obiekt
}


/*
console.log("1.")
console.log(utwory('Queen'))
console.log("2.")
console.log(zmiana('Pink Floyd', 10))
console.log(sortuj('asc', 5))
console.log(obiekt())
*/

function liczby(lista){
    let check=true
    for(let i=0;i<lista.length;i++){
        if(_.isNumber(lista[i])==false)
            check=false
    }
    if(check==true)
        for(let i=0;i<lista.length;i++){
            console.log(lp3[lista[i]])
    }
}

liczby([1,4,6,7])

