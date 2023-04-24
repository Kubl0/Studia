"use strict"

import {hogwardArray} from "./potter.js"

const resultArray = hogwardArray.reduce((acc, curr) => {
    if(curr.house!=""){
        if (acc[curr.house] === undefined) acc[curr.house]=[]
    if(curr.hogwartsStudent==true)
        acc[curr.house].push({name: curr.name, type: 'Student'})
    if(curr.hogwartsStaff==true)
        acc[curr.house].push({name: curr.name, type: 'Staff'})
    if(curr.hogwartsStudent==false && curr.hogwartsStaff==false)
        acc[curr.house].push({name: curr.name, type: 'None'})}
    else{
        if (acc['noHouse'] === undefined) acc['noHouse']=[]
    if(curr.hogwartsStudent==true)
        acc['noHouse'].push({name: curr.name, type: 'Student'})
    if(curr.hogwartsStaff==true)
        acc['noHouse'].push({name: curr.name, type: 'Staff'})
    if(curr.hogwartsStudent==false && curr.hogwartsStaff==false)
        acc['noHouse'].push({name: curr.name, type: 'None'})}

    return acc

}, {});

console.log(resultArray)