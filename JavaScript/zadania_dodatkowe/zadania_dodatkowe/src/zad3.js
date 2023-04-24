
function razem(promiseTab, callback) {
    const result = promiseTab.map(async (func) => {
        return await func();
    });
    return callback(result)
};

(async () => {
    console.log(
        await razem([async() => 10, async() => 11], async(result) => {
        return await result.reduce(async (acc,curr) => {
            return (await acc) + (await curr)
        }, Promise.resolve(0));
    }))
})();

