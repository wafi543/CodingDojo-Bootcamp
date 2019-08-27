function resetNegatives(arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
}

resetNegatives([1,2,-1,-3])

function moveForward (arr) {
    for (var i=0; i<arr.length; i++) {
        if (i == arr.length-1) {
            arr[i] = 0
        }else {
            arr[i] = arr[i+1]
        }
    }
    return arr
}

console.log(moveForward([1,2,3]))

function returnReversed (arr) {
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

console.log(returnReversed([[1,2,3]]))


function repeatTwice (arr) {
    var newArr = []
    for (var i=0; i<arr.length; i++) {
        newArr.push(arr[i])
        newArr.push(arr[i])
    }
    return newArr
}

console.log(repeatTwice([4,"Ulysses", 42, false]))