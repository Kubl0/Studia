const funTab = [async () => 1, async () => 2, async () => 3]
const fun = async(n) => n+1


const connect = (funTab, fun) => {
    const promises = funTab.map((el) => el())

    return Promise.all([...promises]).then((result) => {
        return result.map((res) => {
            return [res, fun(res)]
        })
    })
};

(async () => {
    console.log(await connect(funTab, fun))
})();
