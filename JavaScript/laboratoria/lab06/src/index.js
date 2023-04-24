/* eslint-disable no-unused-vars */

const games = [
    {
        title: 'Grand Theft Auto V',
        year: 2013,
        imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/2019/JdvqcPlTYMxXrA1QQJm6TbDX.png'
    },
    {
        title: 'Fallout 4',
        year: 2015,
        imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/2419/BWMVfyxONkIAlAJVQd96qPuN.png'
    },
    {
        title: 'Wiedźmin 3: Dziki Gon',
        year: 2014,
        imageUrl: 'https://cdn-1.cdp.pl/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/w/i/wied_min-3-dziki-gon-pc-digi_2.jpg'
    },
    {
        title: 'Civilization VI',
        year: 2017,
        imageUrl: ''
    },
    {
        title: 'Cyberpunk 2077',
        year: 2020,
        imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1615811936'
    },
    {
        title: 'Jazz Jackrabbit 2',
        year: 1998,
        imageUrl: ''
    },
    {
        title: 'The Neverhood',
        year: 1996,
        imageUrl: ''
    }, 
    {
        title: 'Diablo II',
        year: 2020,
        imageUrl: 'https://i.ytimg.com/vi/H7qtOC0Bn2k/maxresdefault.jpg'
    }
]

const result = games.reduce((previousValue, currentValue) => {
    if(previousValue.length<4 && currentValue.imageUrl!=""){
        return [...previousValue, currentValue.imageUrl]
    }
    else{
        return previousValue
    }
}, []);


const listaZakupow = [{
    produkt: "chleb",
    typ: "pieczywo",
    ilosc: 2,
    cena: 3.6,
    jednostka: "sztuk"
},
{
    produkt: "jabłka",
    typ: "owoce",
    ilosc: 6,
    cena: 2.5,
    jednostka: "kg"
},
{
    produkt: "mleko",
    typ: "nabiał",
    ilosc: 3,
    cena: 2.9,
    jednostka: "litry"
},
{
    produkt: "kawa",
    typ: "napoje",
    ilosc: 1,
    cena: 24,
    jednostka: "sztuk"
},
{
    produkt: "kefir",
    typ: "nabiał",
    ilosc: 2,
    cena: 2.4,
    jednostka: "sztuk"
},
{
    produkt: "woda",
    typ: "napoje",
    ilosc: 6,
    cena: 1.9,
    jednostka: "sztuk"
},
{
    produkt: "marchewka",
    typ: "warzywa",
    ilosc: 2,
    cena: 4,
    jednostka: "kg"
},
{
    produkt: "banan",
    typ: "owoce",
    ilosc: 1,
    cena: 4.6,
    jednostka: "kg"
},
{
    produkt: "herbata",
    typ: "napoje",
    ilosc: 2,
    cena: 8,
    jednostka: "sztuk"
},
{
    produkt: "ziemniaki",
    typ: "warzywa",
    ilosc: 5,
    cena: 3.5,
    jednostka: "kg"
},
{
    produkt: "jogurt",
    typ: "nabiał",
    ilosc: 8,
    cena: 1.4,
    jednostka: "sztuk"
}
]

const result2 = 



console.log(result)
console.log(result2)