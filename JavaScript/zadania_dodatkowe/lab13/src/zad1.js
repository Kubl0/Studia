const func1 = async(x,y) => x+y
const func2 = async(x,y) => x*y
const cb = (x,y) => x*y


const poKolei = (func1, func2, cb) => {
    Promise.all([func1(5,7), func2(2,3)]).then(response => {
        const [arg1, arg2] = response;
        console.log(cb(arg1, arg2))
    })
}

poKolei(func1,func2,cb)