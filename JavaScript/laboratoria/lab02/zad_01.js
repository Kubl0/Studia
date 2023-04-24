'use strict';

const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];

let uniqueNumbers=[];


for(let i=0;i<numbers.length;i++){
    let test=true;
    for(let j=0;j<i;j++){
        if(numbers[i]==uniqueNumbers[j]){
            test=false;
            break;
    }
}

    if(test==true){
        uniqueNumbers[uniqueNumbers.length]=numbers[i];
    }
}
for(let i=0; i<uniqueNumbers.length;i++)
    console.log(uniqueNumbers[i]);
