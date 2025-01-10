const person = {
    name: 'Mosh',
    age: 30
}

// for in better for objects, can be used in array
for (let key in person)
    console.log(person[key])

const colors = ['red', 'green', 'blue'];
for (let index in colors)
    console.log(colors[index])

// for of ideal for arrays
for (let color of colors)
    console.log(color)


const circle = {
    radius: 1,
    visible: true
}

for (let key in circle)
    console.log(circle[key])

// for (let property of circle)
//     console.log(key)
// returns error because object is not iterable


for (let key of Object.keys(circle))
    console.log(circle[key])


if ('name' in person)
    console.log('yes')
