let i=0
function startCounter(){
    window.licznik = setInterval(() => {
        i++
        console.log(i)
    }, 1000);

    return i
}

function stopCounter(){
    clearInterval(window.licznik)
}

function clearCounter(){
    i=0
}
