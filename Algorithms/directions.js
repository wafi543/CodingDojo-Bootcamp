function directions (arr) {
    var newArr = []
    var x = 0
    var y = 0
    var z = 0
    for (var i=0; i<arr.length; i++) {
        console.log(arr[i].toUpperCase())
        switch (arr[i].toUpperCase()) {
            case "NORTH":
                y++
                break;
            case "SOUTH":
                y--
                break;
            case "EAST":
                x++
                break;
            case "WEST":
                x--
                break;
            case "UP":
                z++
                break;
            case "DOWN":
                z--
                break;
        }
        console.log("x: ",x, "y: ",y, "z: ",z)
    }

    if (x > 0) {
        for (var i=1; i<=x; i++) {
            newArr.push("EAST")
        }
    }else if (x < 0) {
        for (var i=x; i>=-1; i--) {
            newArr.push("WEST")
        }
    }

    if (y > 0) {
        for (var i=1; i<=y; i++) {
            newArr.push("NORTH")
        }
    }else if (y < 0) {
        for (var i=y; i>=-1; i--) {
            newArr.push("SOUTH")
        }
    }

    if (z > 0) {
        for (var i=1; i<=z; i++) {
            newArr.push("UP")
        }
    }else if (z < 0) {
        for (var i=z; i>=-1; i--) {
            newArr.push("DOWN")
        }
    }

    return newArr
}

var test = directions(["NORTH", "EAST", "SOUTH", "WEST", "NORTH", "WEST","DOWN","EAST","NORTH","UP","EAST","UP"])
console.log(test)