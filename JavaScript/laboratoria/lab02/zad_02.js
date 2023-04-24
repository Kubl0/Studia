'use strict';

const array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];
let sorted=[]

for(let i=0;i<array.length;i++){
        if(typeof array[i]=='number'){
            sorted[sorted.length]=array[i]
        }
}
for(let i=0;i<array.length;i++){
    if(typeof array[i]=='string'){
        sorted[sorted.length]=array[i]
    }
}

for(let i=0;i<sorted.length;i++)
    console.log(sorted[i])