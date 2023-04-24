const tablica=[1,5,-3,2,11,15,23,-24,-33,56,4,22];

console.log("Tablica: ");
for(let i=0;i<tablica.length;i++){
    console.log(tablica[i]);
}

let min=tablica[0]

for(let i=0;i<tablica.length;i++){
    if(tablica[i]<min)
        min=tablica[i];
}

console.log("Najmniejsza:", min);

let max=tablica[0];

for(let i=0;i<tablica.length;i++){
    if(tablica[i]>max)
        max=tablica[i];
}

console.log("Najwieksza:", max);

const tablica2 = tablica.reverse();

console.log("Odwrocona tablica: ")
for(let i=0;i<tablica2.length;i++){
    console.log(tablica2[i]);
}