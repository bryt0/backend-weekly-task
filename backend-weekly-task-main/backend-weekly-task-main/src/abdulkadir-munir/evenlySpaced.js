
function evenlySpaced(a, b, c) {
  
     if ((a - b === b - c) || (a - c === c - b) || (a - b === c - a)) {
        return true;
    } else {
        return false;
    }
}


console.log(evenlySpaced(2,4,6)) 
console.log (evenlySpaced(3,6,12)) 

