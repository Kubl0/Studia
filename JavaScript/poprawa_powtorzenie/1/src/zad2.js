const _ = require('lodash')


const object1 = {
    id: 2,
    name: 'Przyjaciele',
    startYear: 1994,
    endYear: 2004,
    type: ["Komedia"],
    seasons: 10
};
  
const object2 = {
    id: 2,
    name: 'Przyjaciele edytowany',
    startYear: 1994,
    endYear: 2010,
    type: ["Komedia"],
    seasons: 10
};

function detectChanges(original, modified) {
    const keys = Object.keys(original)

    const change = keys.reduce((acc,key) => {
        if(JSON.stringify(original[key])==JSON.stringify(modified[key])){
            return acc
        }
        else{
            return acc.concat([[key, modified[key]]])
        }
    },[])

    console.log(change)

}

detectChanges(object1, object2);

const object3 = {
    value: {
      field: "old value"
    },
    name: 'test'
}
  const object4 = {
    value: {
      field: "new value"
    },
    name: 'test'
}

detectChanges(object3, object4)