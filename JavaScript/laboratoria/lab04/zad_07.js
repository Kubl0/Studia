function palindrom(array){
    let dl=array.length
    let test=true

    for(let i=0;i<dl/2;i++){
        if(array[i]!=array[dl-i-1]){
            test=false
        }
    }
    if(test==true){
        return 'Jest';
    }
    else{
        return 'Nie jest';
    }
}

console.log(palindrom([1,2,3,3,2,1]))