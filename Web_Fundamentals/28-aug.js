function isPrime(num) {
    if (num == 2) {
        return true;
    } else {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true
    }
}

function reversiblePrime(n) {
    if (n == 0) {
        return 2
    }
    var i = 2;
    var count = 0;
    var lastPrime = 2;
    while (count < n) {
        i++;
        var check = false
        for (var x = 2; x < i; x++) {
            // console.log("i: ", i, ", x: ", x, ", count: ", count)
            if (i % x == 0) {
                check = true
            }
        }
        var reversedNum = reverseString(i)
        // console.log("reversedNum: ", reversedNum, "isPrime ", isPrime(reversedNum))

        if (check == false && isPrime(reversedNum)) { // the number is a prime
            lastPrime = i
            // console.log('There is a prime', i)
            count++;
        }
    }
    // console.log("The", n, "th-Reversible: ", i)
    return i;
}


function reverseString(str) {
    str = str.toString()
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

console.log(reversiblePrime(40))