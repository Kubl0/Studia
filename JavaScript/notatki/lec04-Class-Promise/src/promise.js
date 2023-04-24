
// Do wykonania w konsoli przegladarki

//fetch('axios').then(response => console.log(response))
//fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => console.log(json))

const axios = require('axios');


axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( response => console.log(response.data))
    .catch(error => console.log(error));

axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: "My title",
      body: "My body"
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error));

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

const req1 = axios.get("https://jsonplaceholder.typicode.com/posts/83");
const req2 = axios.get("https://jsonplaceholder.typicode.com/posts/34");

// Promise.all([req1, req2]).then( (values) => {
//   console.log(values.map(res => res.data.title));
// });

Promise.race([req1, req2]).then( (value) => {
  console.log(value.data.title);
});