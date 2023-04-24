const funcTab1 = [async() => 1+1, async() => 2+2]
const funcTab2 = [async() => 2+2, async() => 3+3]





const grupuj = (funcTab1, funcTab2, cb) => {
    const funcTab = funcTab1.length >= funcTab2.length ? funcTab1 : funcTab2;
    funcTab.forEach((func,index) => {
        const temp = 
            funcTab2[index] === undefined ? async () => 0 : funcTab2[index]
        
        Promise.all([func(), temp()]).then((res) => {
            const [x, y] = res;
            console.log(cb(x, y));
    });
});
};

grupuj(funcTab1, funcTab2, (x,y) => x+y)
grupuj(funcTab1, funcTab1.slice(0,1), (x,y) => x+y)