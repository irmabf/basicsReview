// speed limit 70

// if <= 70 -> Ok

// every 5 km above speed, get one point

// more 12 suspended
//180km suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < (speedLimit + 5)) {
        return "OK"
    } else {
        const points = Math.floor((speed - speedLimit));
        if (points >= 12) {
            return "License suspended"
        } else {
            return `Points: ${points}`;
        }
    }
}

console.log(checkSpeed(70));
console.log(checkSpeed(71));
console.log(checkSpeed(76));