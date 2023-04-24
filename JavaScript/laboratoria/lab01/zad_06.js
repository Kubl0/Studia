const array=[1, 5, 6, 5, 5, 1, 5];

for(let i=0;i<array.length;i++){
    let wart=array[i];
    let ilosc=0;
    for(let j=0;j<array.length;j++){
        if(array[j]==wart)
            ilosc++
    }
    if(ilosc>1)
        console.log(array[i], ' wystepuje',ilosc, 'razy')
    else
        console.log(array[i], ' wystepuje',ilosc, 'raz')
}