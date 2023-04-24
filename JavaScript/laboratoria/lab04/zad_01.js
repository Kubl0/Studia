
function func1(arg){
    const liczba=arg
    function func2(arg){
        let suma=arg+liczba;
        return suma;
    }
    return func2(liczba);
}

console.log(func1(7))