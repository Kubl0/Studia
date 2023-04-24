const tablica3=[2,4,5];

let test=true;
let test1=true;

for(let i=0;i<3;i++)
    if(tablica3[i]<=0)
        test=false;

if(test==false)
    console.log("Wszystkie liczby powinny byc dodatnie");
else
    test1=true
    if(tablica3[0]>=tablica3[1]+tablica3[2])
        test1=false;
    if(tablica3[1]>=tablica3[0]+tablica3[2])
        test1=false;
    if(tablica3[2]>=tablica3[1]+tablica3[0])
        test1=false;

if(test1==true)
    console.log("Mozna utowrzyc trojkat");
else   
    console.log("Nie mozna utworzyc trojkata");
