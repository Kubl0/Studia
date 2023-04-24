/* eslint-disable no-unused-vars */

const arr = [
    { key: 0, x: [4,5,6], y: [1,2,3,4]},
    { key: 0, x: [1], y: [] }
]   

let result = arr.reduce((prev, curr) => {
    let suma=curr.x.length+curr.y.length
    return suma+prev
}, 0);

console.log(result)