function rollOne () {
    return Math.floor(Math.random() * 6) + 1;
}


function playFives (sum) {
    for (var i=1; i<= sum; i++) {
        var output = rollOne();
        
        if (output == 5) {
            console.log("you have got", output , "That's good luck!")
        }else {
            console.log(output)
        }
    }
}

// playFives(4);

function playStatistics () {
    var min = 6, max = 0;
    for (var i=1; i <= 8; i++) {
        var output = rollOne()
        if (output > max) {max = output}
        if (output < min) {min = output}
    }
    console.log("min: ",min, "max: ",max)
}

// playStatistics();


function playStatistics2 () {
    var min = 6, max = 0, sum = 0;
    for (var i=1; i <= 8; i++) {
        var output = rollOne()
        console.log(output)
        sum += output;
        if (output > max) {max = output}
        if (output < min) {min = output}
    }
    console.log("min: ",min, "max: ",max)
    console.log("sum: ",sum)
}

// playStatistics2()


function playStatistics3 (num) {
    var min = 6, max = 0, sum = 0;
    for (var i=1; i <= num; i++) {
        var output = rollOne()
        console.log(output)
        sum += output;
        if (output > max) {max = output}
        if (output < min) {min = output}
    }
    console.log("min: ",min, "max: ",max)
    console.log("sum: ",sum)
}

// playStatistics3(10)

function playStatistics4 (num) {
    var min = 6, max = 0, sum = 0;
    for (var i=1; i <= num; i++) {
        var output = rollOne()
        console.log(output)
        sum += output;
        if (output > max) {max = output}
        if (output < min) {min = output}
    }
    console.log("min: ",min, "max: ",max)
    console.log("avg: ",sum/num)
}

playStatistics4(5)