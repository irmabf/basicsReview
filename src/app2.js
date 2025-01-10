let x = { value: 10};
let y = x;

x.value = 20

// console.log(y)


let number = 10;

function increase(number) {
    number++;
    console.log(number)
}

increase(number)
console.log(number)
console.log(number)

let object = {value: 50 }

function increase2(object) {
    object.value++;
    console.log(object)
}
increase2(object)
console.log(object)

