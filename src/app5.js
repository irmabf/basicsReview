// Factory function
function createAddress(street, city, zipCode) {
    return {
       street: street,
       city: city,
       zipCode: zipCode,
       showAddress: function () {
           return `${street} ${city} ${zipCode}`
       }
    }
}

// constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode
}

const address = createAddress('Canuto Hevia', 'Pola de Lena', 33630)
console.log(address.showAddress())

console.log(new Address('calle', 'ciudad', 32323))

for (let key in address) {
    console.log(address[key])
}

const addressOne = new Address('a', 'b', 'c')
const addressTwo = new Address('z', 'b', 'c')


function deepEqual(object1, object2) {
    // Check if both values are objects
    if (typeof obj1 !== "object" || obj1 === null ||
        typeof obj2 !== "object" || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];

        if (areObjects)
    }
}

