
const seriale = require('./series')

const list = seriale.series

const miniseries = list.filter(el => el.seasons==1).reduce(function(prev, curr){
    let obj = {name: curr.name, year: curr.startYear, type: curr.type}
    prev.push(obj)
    return prev
}, [])

const series1 = list.filter(el => el.startYear<2010).reduce(function(prev,curr){
    let obj = {id: curr.id, name: curr.name, startYear: curr.startYear,endYear:curr.endYear,
                type: curr.type.toString(), seasons: curr.seasons}
    if (obj.endYear==null){
        delete obj.endYear
    }
    prev.push(obj)
    return prev 
}, [])

const series2 = list.filter(el => el.startYear>=2010 && el.startYear<2020).reduce(function(prev,curr){
    let obj = {id: curr.id, name: curr.name, startYear: curr.startYear,endYear:curr.endYear,
                type: curr.type.toString(), seasons: curr.seasons}
    if (obj.endYear==null){
        delete obj.endYear
    }
    prev.push(obj)
    return prev 
}, [])

const series3 = list.filter(el => el.startYear>=2020).reduce(function(prev,curr){
    let obj = {id: curr.id, name: curr.name, startYear: curr.startYear, endYear:curr.endYear,
                type: curr.type.join(", "), seasons: curr.seasons}
    if (obj.endYear==null){
        delete obj.endYear
    }
    prev.push(obj)
    return prev 
}, [])

series1.sort((a, b) => (a.startYear > b.startYear) ? 1 : (a.startYear === b.startYear) ? ((a.endYear > b.endYear) ? 1 : -1) : -1 )
series2.sort((a, b) => (a.startYear > b.startYear) ? 1 : (a.startYear === b.startYear) ? ((a.endYear > b.endYear) ? 1 : -1) : -1 )
series3.sort((a, b) => (a.startYear > b.startYear) ? 1 : (a.startYear === b.startYear) ? ((a.endYear > b.endYear) ? 1 : -1) : -1 )




const series = []
series.push(series1, series2, series3)


//console.log(miniseries) 
console.log(series)