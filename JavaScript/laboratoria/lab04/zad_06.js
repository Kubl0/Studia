function nwd(a,b){
    if(b!=0){
        return nwd(b, a%b);
    }
    return a
}

console.log(nwd(8,16))

