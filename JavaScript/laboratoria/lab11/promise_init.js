'use strict';

const promise = new Promise((resolve, reject) => {
    const result = 2+2 
    if(result>2){
        console.log('Resolve')
        resolve(result)
    }
    else
      reject('Error')
});

promise.then((response) => {
    console.log(response)
}).catch((err) => {
    console.log('err')
})
console.log('Test')

//yarn add node-fetch@2
//npm install node-fetch@2

const fetch = require('node-fetch')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        //console.log(response)
        response.json().then(json => console.log(json))
    }).catch(err => {
        console.log('error', err)
    })
