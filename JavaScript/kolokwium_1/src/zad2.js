/* eslint-disable no-unused-vars */

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
    if(original!=modified){
        console.log('y')
    }
}

detectChanges(object1,object2)