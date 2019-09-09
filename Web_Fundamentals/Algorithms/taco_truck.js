function tacoTruck(arr) {
    var xMax = 0, yMax = 0
    var xMin = 0, yMin = 0
    var xTruck = 0, yTruck = 0
    var distance = 0
    var result = [0,0]
    // finding max coordinates
    for (var x = 0; x < arr.length; x++) {
        if (arr[x][0] > xMax) { xMax = arr[x][0] }
        if (arr[x][1] > yMax) { yMax = arr[x][1] }
        if (arr[x][0] < xMin) { xMin = arr[x][0] }
        if (arr[x][1] < yMin) { yMin = arr[x][1] }
    }
    // console.log(xMax, yMax, xMin, yMin)
    xTruck = xMin; yTruck = yMin

    for (var x = 0; x < arr.length; x++) {
        distance += Math.abs(arr[x][0] - xTruck) + Math.abs(arr[x][1] - yTruck)
    }

    while (xTruck <= xMax) {
        yTruck = yMin
        while (yTruck <= yMax) {
            var tmp = 0
            for (var x = 0; x < arr.length; x++) {
                tmp += Math.abs(arr[x][0] - xTruck) + Math.abs(arr[x][1] - yTruck)
            }
            if (tmp < distance) {
                distance = tmp
                result = arr[x]
                result = [xTruck,yTruck]
            }
            // console.log("xTruck: ", xTruck, ", yTruck: ", yTruck)
            // console.log("distance: ", distance)
            yTruck += 1
        }
        xTruck += 1
    }
    // console.log("distance: ",distance)
    // console.log("result: ",result)

    return result
}


console.log(tacoTruck([[10, 0], [-1, -10], [2, 4]]))