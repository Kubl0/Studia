"use strict";
const getRandomNumber = () => {
    return Math.floor(Math.random() * 1000);
};
const getNumber = (cb) => {
    setTimeout(() => {
        cb(getRandomNumber());
    }, getRandomNumber() * 5);
};

const asyncSort = (dim) => {
    let arr =[]
    
    for(let i=0;i<dim;i++){
        getNumber((result) => {
            arr.push(result)
            if(arr.length===dim){
                console.log(arr.sort().reverse())
            }
        })
    }
};

asyncSort(5)

