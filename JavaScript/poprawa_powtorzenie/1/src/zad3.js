
function counter(min, max) {
    var count = min;
    return function() {
        if(count<=max){
            return count++}
        else{
            return undefined}    
    }
  }

const count = counter(5,7);

console.log(count());
console.log(count());
console.log(count());
console.log(count());

