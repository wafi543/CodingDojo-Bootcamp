function biggieSize (arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}

function printLowReturnHigh (arr) {
    var max = arr[0];
    var min = arr[0];
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    print(min);
    return max;
}

function printOneReturnAnother (arr) {
    for (var i=1; i<arr.length; i++) {
        console.log(arr[i]);
    }
    for (var i=0; i<arr.length; i++) {
        if (arr[i]%2 == 1) {
            return arr[i];
        }
    }
}

function doubleVision (arr) {
    var newArr = []
    for (var i=0; i<arr.length; i++) {
        newArr.push(arr[i]*arr[i]);
    }
    return newArr;
}

function countPositives (arr) {
    var count = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            count += 1;
        }
    }
    arr[arr.length-1] = count
    return arr;
}
console.log(countPositives([-1,1,1,1]));

function evensAndOdds (arr) {
    var odds = 0;
    var evens = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i]%2 == 1) {
            odds += 1;
        }else {
            evens += 1;
        }

        if (odds == 3) {
            odds = 0;
            console.log("That's odd!");
        }
        if (evens == 3) {
            evens = 0;
            console.log("Even more so!");
        }
    }
}

function incrementTheSeconds (arr) {
    for (var i=0; i<arr.length; i++) {
        if (i%2 == 1) {
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

function previousLengths (arr) {
    var newArr = [arr[0]];
    for (var i=1; i<arr.length; i++) {
        newArr.push(arr[i-1].length);
    }
    return newArr
}

console.log(previousLengths(["hello", "dojo", "awesome"]));

function addSeven(arr) {
    var newArr = [];
    for (var i=0; i<arr.length; i++) {
        newArr.push(arr[i]+7);
    }
    return newArr;
}

console.log(addSeven([1,2,3]));

function reverse(arr) {
    var lastIndex = arr.length - 1
    for (var i=0; i<arr.length; i++) {
        if (i < lastIndex-i) {
            var temp = arr[i];
            arr[i] = arr[lastIndex-i];
            arr[lastIndex-i] = temp;
        }
    }
    return arr
}

console.log(reverse([3,1,6,4,2]));

function makeNegative (arr) {
    var newArr = [];
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i] * -1);
        }else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(makeNegative([1,-3,5]));

function alwaysHungry (arr) {
    count = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            count += 1;
        }
    }
    if (count == 0) {
        console.log("I'm hungry");
    }
}

function swapTowardCenter (arr) {
    var lastIndex = arr.length-1;
    for (var i=0; i<arr.length; i+=2) {
        if (i < lastIndex-i) {
            var temp = arr[i];
            arr[i] = arr[lastIndex-i];
            arr[lastIndex-i] = temp;
        }
    }
    return arr;
}

console.log(swapTowardCenter([true,42,"Ada",2,"pizza"]));
console.log(swapTowardCenter([1,2,3,4,5,6]));

function scaleArray(arr, num) {
    for (var i=0; i<arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
}

console.log(scaleArray([1,2,3], 3));