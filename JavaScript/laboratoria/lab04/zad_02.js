
(function func1(napis){
    const words=napis.split(' ');
    const length=words.length;
    let max=0;

    for(let i=0;i<length;i++){
        if(words[i].length>words[max].length){
            max=i
        }

    }
    console.log(words[max])
})('Ala ma kota');
