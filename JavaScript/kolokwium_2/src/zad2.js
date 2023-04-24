const poKolei = (fun1, fun2, fun3, cb) => {
    fun1().then((result) => {
        fun2(result).then((result) => {
            fun3(result).then((result)=>{
                cb(result);
            });
        });
    });
};

const fun1 = () => new Promise((resolve) => {
    resolve(1);
});

const fun2 = (init) => new Promise((resolve) => {
    resolve(init+2)
})


const fun3 = (init) => new Promise((resolve) => {
    resolve(init+3)
})


const cb = (result) => {
    console.log(result)
}

poKolei(fun1,fun2,fun3, cb)

  
  