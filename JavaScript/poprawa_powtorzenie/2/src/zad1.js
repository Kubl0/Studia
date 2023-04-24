const books = require('./books.js');

const result = books.booksArray.reduce((acc, book) => {
  const { title, author } = book;

  if(Array.isArray(book.genre)==true){
    book.genre.map(genre => {
        acc[genre]
            ? acc[genre].push({title, author})
            : acc[genre] = ([{title, author}])
    })
  }else{
    acc[book.genre]
        ? acc[book.genre].push({title, author})
        : acc[book.genre] = ([{title, author}])
  }

  return acc;
}, {});

console.log(result);