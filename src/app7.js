function fizzbuzz(input) {
    if (typeof input !== 'number') {
        return "Not a number"
    }
    if(input % 3 === 0 && input % 5 === 0) {
        return "FizzBuzz"
    } else if (input % 3 === 0) {
        return "Fizz"
    } else if (input % 5 === 0) {
        return "Buzz"
    }
}

console.log(fizzbuzz(15))
console.log(fizzbuzz(10))
console.log(fizzbuzz(6))
console.log(fizzbuzz("a"))