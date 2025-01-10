console.log('hi')


//object literal syntax
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw')
    }
}

// object oriented programming oop
circle.draw()

// factory function
function createCircle(radius, x, y, isVisible, draw) {
    return {
        radius: radius,
        location: {
            x: x,
            y: y
        },
        isVisible: isVisible,
        draw: function () {
            console.log('drawing')
        }
    }
};

const circle2 = createCircle(1, 2,3, false)
circle2.draw()

//factory function -> uses camel notation
//constructor function -> uses pascal notation
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}

const circle3 = new Circle(1);
