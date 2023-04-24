/* eslint-disable no-unused-vars */
const list=[
    {
      id: 1,
      name: 'Czarnobyl',
      startYear: 2019,
      endYear: 2019,
      type: ["Dramat"],
      seasons: 1
    },
    {
      id: 2,
      name: 'Przyjaciele',
      startYear: 1994,
      endYear: 2004,
      type: ["Komedia"],
      seasons: 10
    },
    {
      id: 3,
      name: 'Dr House',
      startYear: 2004,
      endYear: 2012,
      type: ["Dramat", "Komedia"],
      seasons: 8
    },
    {
      id: 4,
      name: 'Jak poznaĹem waszÄ matkÄ',
      startYear: 2005,
      endYear: 2014,
      type: ["Komedia"],
      seasons: 9
    },
    {
      id: 5,
      name: 'Lucyfer',
      startYear: 2016,
      endYear: 2021,
      type: ["Fantasy", "KryminaĹ"],
      seasons: 6
    },
    {
      id: 6,
      name: 'Dobre miejsce',
      startYear: 2016,
      endYear: 2020,
      type: ["Komedia"],
      seasons: 4
    },
    {
      id: 7,
      name: 'Emily w ParyĹźu',
      startYear: 2020,
      endYear: null,
      type: ["Dramat", "Komedia", "Romans"],
      seasons: 2
    },
    {
      id: 8,
      name: 'Szpital New Amsterdam',
      startYear: 2018,
      endYear: null,
      type: ["Dramat"],
      seasons: 4
    },
    {
      id: 9,
      name: 'Kompania braci',
      startYear: 2001,
      endYear: 2001,
      type: ["Dramat", "Wojenny"],
      seasons: 1
    }, 
    {
      id: 10,
      name: 'Outlander',
      startYear: 2014,
      endYear: null,
      type: ["Dramat", "Kostiumowy", "Romans", "Sci-Fi"],
      seasons: 6
    },
    {
      id: 11,
      name: 'House of Cards',
      startYear: 2013,
      endYear: 2018,
      type: ["Dramat", "Polityczny"],
      seasons: 6
    },
    {
      id: 12,
      name: 'Brooklyn 9-9',
      startYear: 2013,
      endYear: 2022,
      type: ["Komedia kryminalna"],
      seasons: 8
    },
    {
      id: 13,
      name: 'Biuro',
      startYear: 2005,
      endYear: 2013,
      type: ["Komedia"],
      seasons: 9
    },
    {
      id: 14,
      name: 'Rick i Morty',
      startYear: 2013,
      endYear: null,
      type: ["Komedia", "Przygodowy", "Sci-Fi", "Animacja dla dorosĹych"],
      seasons: 9
    },
    {
      id: 15,
      name: 'Squid Game',
      startYear: 2021,
      endYear: null,
      type: ["Dramat", "Thriller"],
      seasons: 9
    },
    {
      id: 16,
      name: 'Dom z papieru',
      startYear: 2017,
      endYear: 2021,
      type: ["Thriller", "Akcja"],
      seasons: 9
    }, 
    {
      id: 17,
      name: 'Gambit krĂłlowej',
      startYear: 2020,
      endYear: 2020,
      type: ["Dramat"],
      seasons: 1
    }, 
    {
      id: 18,
      name: 'Ania, nie Anna',
      startYear: 2017,
      endYear: 2019,
      type: ["Dramat"],
      seasons: 3
    }, 
    {
      id: 19,
      name: 'W garniturach',
      startYear: 2011,
      endYear: 2019,
      type: ["Dramat"],
      seasons: 9
    },
    {
      id: 20,
      name: 'Pacyfik',
      startYear: 2010,
      endYear: 2010,
      type: ["Dramat", "Wojenny"],
      seasons: 1
    }
  ]

function miniseries(list){
const miniseries = list.reduce(function(prev,curr){
    if(curr.seasons==1){
        let obj={name:curr.name,type:curr.type,year:curr.startYear}
        prev.push(obj)
    }
    return prev
}, [])

miniseries.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
return miniseries
}

console.log(miniseries(list))

function series(list){

const a = list.reduce(function(prev,curr){
    if(curr.startYear<2010 && curr.seasons>1){
        curr={id: curr.id, name: curr.name, startYear: curr.startYear, endYear: curr.endYear, type: curr.type.toString(), seasons: curr.seasons}
        prev.push(curr)
    }
    return prev
}, [])

const b = list.reduce(function(prev,curr){
    if(curr.startYear>=2010 && curr.endYear<2020 && curr.seasons>1){
        curr={id: curr.id, name: curr.name, startYear: curr.startYear, endYear: curr.endYear, type: curr.type.toString(), seasons: curr.seasons}
        prev.push(curr)
    }
    return prev
}, [])

const c = list.reduce(function(prev,curr){
    if(curr.startYear>=2020){
        curr={id: curr.id, name: curr.name, startYear: curr.startYear, endYear: curr.endYear, type: curr.type.toString(), seasons: curr.seasons}
        prev.push(curr)
    }
    return prev
}, [])

a.sort(function(a, b){
    if(a.year < b.year) { return 1; }
    if(a.year > b.year) { return -1; }
    return 0;
})
b.sort(function(a, b){
    if(a.year < b.year) { return 1; }
    if(a.year > b.year) { return -1; }
    return 0;
})
c.sort(function(a, b){
    if(a.year < b.year) { return 1; }
    if(a.year > b.year) { return -1; }
    return 0;
})

let result=[]
result.push(a)
result.push(b)
result.push(c)
return result
}

console.log(series(list))




