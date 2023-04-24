'use strict';

/* 
Zadanie 1.1

StwĂłrz projekt i doĹÄcz do niego bibliotekÄ axios.

NastÄpnie wykonaj zapytanie metodÄ GET za pomocÄ dodanej biblioteki pod nastÄpujÄcy url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdĹş, czy response jest poprawny (status rĂłwny 200). JeĹli tak, to zwrĂłÄ response, w przeciwnym wypadku wypisz bĹÄd w konsoli.
Jako nastÄpny callback - uĹźyj destrukturyzacji obiektĂłw, aby wypisaÄ w konsoli zmiennÄ 'data' i 'headers'.
*/

/* 
Zadanie 1.2 
StwĂłrz funkcjÄ, ktĂłra przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

NastÄpnie wysyĹa taki obiekt za pomocÄ funkcji post z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos
JeĹli dodanie zakoĹczy siÄ sukcesem - wyĹwietli w konsoli komunikat 'Dodano' i wyĹwietli id dodanego obiektu. W przeciwnym wypadku wypisze bĹÄd.
*/