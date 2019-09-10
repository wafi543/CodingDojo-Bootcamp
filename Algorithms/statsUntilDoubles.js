function rollOne () {
    return Math.floor(Math.random() * 20) + 1;
}

function statisticsUntilDoubles () {
    var min = 80
    var max = 0
    var sum = 0
    var before = 0
    var count = 0

    while (true) {
        var output = rollOne()
        sum += output
        count ++
        if (output > max) {max = output}
        if (output < min) {min = output}
        console.log(output)
        if (output == before) {
            console.log("min: ",min,"max: ",max, "avg: ",sum/count)
            console.log("number of rolls: ",count)
            console.log("output: ",output,"before: ",before)
            if (count < 5) {console.log("you are lucky man")}
            break
        }else {
            before = output
            continue
        }
    }
}

statisticsUntilDoubles()