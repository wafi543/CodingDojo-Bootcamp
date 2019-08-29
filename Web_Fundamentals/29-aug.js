function multiplicative(num) {
    var numStr = num.toString();
    var result = numStr.charAt(0);
    for (var i = 1; i < numStr.length; i++) {
        result *= parseInt(numStr.charAt(i));
    }
    return result
}

function persistence(num) {
    if (num < 0) { return 0 }
    var count = 0;
    while (num.toString().length > 1) {
        console.log("num: ",num)
        console.log("multiplicated: ",multiplicative(num))
        num = multiplicative(num);
        count++;
    }
    return count;
}

console.log(persistence(356776547438598))

