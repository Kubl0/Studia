/* eslint-disable no-unused-vars */

function getCounter(min, max){
    for(let i=min;i<=max+1;i++){
        if(i>max){
            console.log(undefined)
        }
        else
            console.log(counter(i))
    }
}

function counter(liczba){
    return liczba
}

getCounter(5,7)