function sumToOne(num) {
    var numStr = num.toString();
    var sum = 0;
    if (numStr.length == 1) {
        return num;
    }else {
        for (var i=0; i<numStr.length; i++) {
            sum += parseInt(numStr.charAt(i));
        }
        return sumToOne(sum);
    }
}

// console.log(sumToOne(5656745676478));


function extractDigit (num, digit) {
    var numStr = num.toString(); 
    var lastIndex = numStr.length - 1;
    if (digit > lastIndex) {
        return 0
    }else {
        return numStr.charAt(lastIndex-digit);
    }
}

console.log(extractDigit(18254546549,3))