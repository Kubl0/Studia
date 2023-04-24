const process = (wyn1, wyn2) => {
    return wyn1+wyn2
}


const result = (funTab1, funTab2, process) => {

    let [arr1, arr2] = []
    if(funTab1.length>=funTab2.length)
        [arr1,arr2]=[funTab1, funTab2]
    else
        [arr1,arr2]=[funTab2, funTab1]  

    const wynik = [];
    let fun2 = 0

    arr1.forEach((fun, index) => {
        if(arr2[index]!==undefined){
            fun2 = arr2[index]
        }
        else{
            fun2 = () => 0 
        }

      Promise.all([fun(), fun2()]).then((result) => {
        const [w1, w2] = result;
  
        wynik.push(process(w1, w2));
  
        if (wynik.length == arr1.length) {
          console.log(wynik);
        }
      });
    });
  };



const tab1 = [
    () => new Promise((resolve) => {
        resolve(1)
    }),

    () => new Promise((resolve) => {
        resolve(2)
    }),

    () => new Promise((resolve) => {
        resolve(3)
    })
]


const tab2 = [
    () => new Promise((resolve) => {
        resolve(4)
    }),

    () => new Promise((resolve) => {
        resolve(5)
    }),

    () => new Promise((resolve) => {
        resolve(6)
    }),

    () => new Promise((resolve) => {
        resolve(7)
    })
]

result(tab1, tab2, process);




