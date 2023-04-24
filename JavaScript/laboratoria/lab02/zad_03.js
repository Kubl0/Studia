'use strict';

const testArray = [1, 2, null, [4, undefined, 11, 10], 6, [7, null, 0], null, 9]; 
let newArray=[]

for(let i=0;i<testArray.length;i++){
        if(testArray[i] instanceof Array)
            for(let j=0;j<testArray[i].length;j++)
                newArray[newArray.length]=testArray[i][j]
        else
        newArray[newArray.length]=testArray[i]
}

for(let i=0;i<newArray.length;i++)
    console.log(newArray[i])