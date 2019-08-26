function from1To255 () {
    var arr = []
    for (var i=1; i<=255; i++) {
        arr.push(i);
    }
    return arr;
}

function sumEven1000 () {
    var sum = 0;
    for (var i=1; i<=1000; i++) {
        if (i%2 == 0) {
            sum += i;
        }
    }
    return sum;
}

function sumOdd5000 () {
    var sum = 0;
    for (var i=1; i<=5000; i++) {
        if (i%2 == 1) {
            sum += i;
        }
    }
    return sum;
}

function sumArr (arr) {
    var sum = 0;
    for (var i=0; i< arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function findMax (arr) {
    var max = arr[0];
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

function findAverage (arr) {
    var sum = 0;
    for (var i=0; i< arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function arrOdd () {
    var odd = [];
    for (var i=1; i<=50; i++) {
        if (i%2 == 1) {
            odd.push(i);
        }
    }
    return odd;
}

function greaterThanY (arr,y) {
    var count = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > y) {
            count += 1;
        }
    }
    return count;
}

function squareArr (arr) {
    for (var i=0; i<arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

function noNegatives (arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

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
    return [max,min,sum/arr.length]
}

function swapFirstLast (arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}

function replaceNegatives (arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
