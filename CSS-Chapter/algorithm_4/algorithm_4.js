function countGreaterThanY (arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count += 1;
        }
    }
    return count
}

console.log(countGreaterThanY([3,7,26,5,6,17,4,3,44,5,6,78,17], 13));


function minMaxAvg (arr) {
    var min = arr[0];
    var max = arr[0];
    var avg = arr[0];
    var sum = 0
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(min);
    console.log(max);
    console.log(avg);
}


minMaxAvg([3,6,5,34,55,7,100,-4])


function replaceNegative (arr) {
    var newArr = [];
    for (var i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            newArr[i] = "Dojo";
        }else {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}

var a = replaceNegative([3,6,-4,8,1,-9])
console.log(a);

function shortening (arr,x,y) {
    for (var i=x; i<=y; i++) {
        arr.splice(i, 1);
    }
    return arr;
}

var b = shortening([20,30,40,50,60,70],2,4);
console.log(b);