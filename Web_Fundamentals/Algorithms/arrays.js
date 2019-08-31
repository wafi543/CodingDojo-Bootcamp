function greaterThanY (arr,y) {
    var count = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > y) {
            count += 1;
        }
    }
    return count;
}
console.log(greaterThanY([4,6,5,7],4))

function minMaxAvg (arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log(max,min,sum/arr.length)
}
minMaxAvg([45,43,4,7,8])


function replaceNegatives (arr) {
    var newArr = arr
    for (var i=0; i<newArr.length; i++) {
        if (newArr[i] < 0) {
            newArr[i] = "Dojo";
        }
    }
    return newArr;
}

console.log(replaceNegatives([1,2,-3,-5,5]))

function removeVals (arr,x,y) {
    arr.splice(x,y-x+1)
    return arr
}

console.log(removeVals([20,30,40,50,60,70],2,4))