'use strict';

/* 
Zadanie 1.1
Za pomocÄ funkcji fetch wykonaj zapytanie metodÄ GET pod nastÄpujÄcy url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdĹş, czy response jest poprawny (status rĂłwny 200). JeĹli tak, to zwrĂłÄ response, w przeciwnym wypadku wypisz bĹÄd w konsoli.
Jako nastÄpny callback - uĹźyj destrukturyzacji obiektĂłw, aby wypisaÄ w konsoli zmiennÄ 'body' i 'headers'.
*/

const fetch = require('node-fetch')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        //console.log(response)
        response.json().then(json => {
               json.reduce((acc, curr) => {
                   console.log(curr.id,"\n",curr.title,"\n",curr.body)
                   console.log()
               })
        })
    }).catch(response => {
        if(response.status==200)
            console.log('Error')
    })


/* 
Zadanie 1.2 
StwĂłrz funkcjÄ, ktĂłra przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

NastÄpnie wysyĹa taki obiekt za pomocÄ funkcji fetch pod url: https://jsonplaceholder.typicode.com/todos
JeĹli dodanie zakoĹczy siÄ sukcesem - wyĹwietli w konsoli komunikat 'Dodano' i wyĹwietli id dodanego obiektu. W przeciwnym wypadku wypisze bĹÄd.
*/

function send(object){
    fetch('https://jsonplaceholder.typicode.com/todos',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => response.json())
    .then(data => {
        console.log('Dodano:', data.id)
    })
    .catch((err) => {
        console.log('Error:', err)
    })
}

const user = {
    idUser: 1,
    title: 'abc',
    completed: true
}
send(user)