"use strict"

class CoffeeShop{
    constructor(name, menu){
        this.name=name
        this.menu=menu
        this.orders=[]
    }

    addOrder(name){
        let check=0
        this.menu.forEach(element => {
            if(element.item==name) check=1
        });
        if (check==1){
            console.log('Order added!')
            this.orders.push(name)
        }
        else
            console.log('This item is currently unavaible')   
    }

    fulfillOrder(){
        if(this.orders.length==0){
            console.log('All orders have been fulfilled!')
        }
        else{
            console.log('The',this.orders[0],"is ready!")
            this.orders.shift()
        }
    }

    listOrders(){
        console.log(this.orders)
    }

    dueAmount(){
        let suma = this.orders.reduce((acc,curr) => {
            let id = this.menu.findIndex(x => x.item==curr)
            return acc+this.menu[id].price
        },0)

        console.log(suma)
    }

    cheapestItem(){
        let help = this.menu.sort((a,b) => a.price - b.price)

        console.log(help[0].item)
    }

    drinksOnly(){
        let drinks = this.menu.reduce((acc, curr) => {
            if(curr.type=="drink")
                acc.push(curr.item)
            return acc
        }, [])
        console.log(drinks)
    }

    foodOnly(){
        let food = this.menu.reduce((acc, curr) => {
            if(curr.type=="food")
                acc.push(curr.item)
            return acc
        }, [])
        console.log(food)
    }

}


const Sklep = new CoffeeShop('sklep', [{item: 'abc', type: 'drink', price: 2.59},{item: 'def', type: 'food', price: 3.59}])

Sklep.addOrder(1)

Sklep.fulfillOrder()
Sklep.fulfillOrder()

Sklep.addOrder(1)
Sklep.addOrder(1)
Sklep.addOrder(1)
Sklep.addOrder(1)

Sklep.listOrders()

Sklep.dueAmount()

Sklep.fulfillOrder()
Sklep.fulfillOrder()

Sklep.dueAmount()

Sklep.fulfillOrder()
Sklep.fulfillOrder()

Sklep.dueAmount()

Sklep.cheapestItem()

Sklep.drinksOnly()
Sklep.foodOnly()