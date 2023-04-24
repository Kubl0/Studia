/* eslint-disable no-unused-vars */

const BookCreator = function(name, pages){
    this.name=name;
    this.pages=pages;
}

BookCreator.prototype.print = function(){
    return this.name + " " + this.pages
}

const book = new BookCreator('Title', 123)

//console.log(book.print(), book.__proto__)
//console.log(BookCreator.prototype,book.__proto__)
//console.log(BookCreator.prototype===book.__proto__)

BookCreator.prototype.addReader = function(){
    undefined
}


class Book{
    constructor(title, pages){
        this.title=title;
        this.pages=pages;
    }

    print(){
        console.log(this.title)
        console.log(this.pages)
    }
}

const book2 = new Book('Title2', 123)

//book2.print()

const Person = (name, age) => ({
    name,
    age,
    addAge: function(){
        this.age++;
    },

    print: function(){
        console.log(this.name, this.age)
    }
})

const person1 = new Person('Adam', 20)

person1.addAge()

//person1.print()

Person.prototype.print = function(){
    return this.name
}

//console.log(person1.__proto__)

