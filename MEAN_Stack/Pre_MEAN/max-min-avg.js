function maxMinAvg (arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;

    for (var i=0; i<arr.length; i++) {
        if (arr[i] > max) {max = arr[i]}
        if (arr[i] < min) {min = arr[i]}
        sum += arr[i]
    }
    return 'Max: '+max+', Min: '+min+', AVG: '+sum/arr.length
}



console.log(maxMinAvg([1, -2, 9, 4]))