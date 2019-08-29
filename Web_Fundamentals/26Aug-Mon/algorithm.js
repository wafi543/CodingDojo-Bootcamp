function messyMath (num) {
    var sum = 0;
    for (var count=0; count<=num; count++) {
        if (num/3 == count) {
            return -1;
        }else {
            if (count%3 == 0) {
                continue;
            }else if (count%7 == 0) {
                sum += (count*2)
            }else {
                sum += count;
            }
        }
    }
    return sum;
}

console.log(messyMath(900));


function mostSignDigit (num) {
    var numStr = num.toString();
    for (var i=0; i<numStr.length;i++) {
        if (numStr.charAt(i) == 0) {
            continue;
        }else if (numStr.charAt(i) == ".") {
            continue;
        }else {
            return numStr.charAt(i);
        }
    }
}

console.log(mostSignDigit(67.89));