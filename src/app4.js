const circle = {
    radius: 1,
    draw: function() {
        console.log('draw')
    }
}

const another = {}

for (let key in circle) {
    another[key] = circle[key]
}

console.log(another)

const another2 = Object.assign({}, circle);

const another3 = { ...circle }
