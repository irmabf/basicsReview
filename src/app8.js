function maxOf(numberOne, numberTwo) {
    return Math.max(numberOne, numberTwo);
}

function maxOf2(numberOne, numberTwo) {
   if (numberOne > numberTwo) {
       return numberOne;
   } else {
       return numberTwo;
   }
}

function maxOf3(numberOne, numberTwo) {
    return (numberOne > numberTwo) ? numberOne : numberTwo;
}
console.log(maxOf(2, 4));
console.log(maxOf(2, 4));
console.log(maxOf2(4, 2));
console.log(maxOf2(4, 2));