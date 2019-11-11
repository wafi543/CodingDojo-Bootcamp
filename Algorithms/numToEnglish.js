function numToEnglish (num) {
    var nums = {1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"fourty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety"}
    var result = ""

    var tens = num % 100
    num -= tens
    if (tens > 0) {
        if (tens < 20) {
            result += nums[tens]
        }else {
            var digit = tens % 10
            tens -= digit
            var tensStr = nums[tens]
            if (digit > 0) {
                tensStr += "-" + nums[digit]
            }
            result = result + tensStr
        }
    }

    var hundreds = num % 1000
    num -= hundreds
    if (hundreds > 0) {
        var hundredsStr = nums[hundreds.toString()[0]] + " hundred"
        if (tens > 0) {result = hundredsStr + " and " + result}
        else {result = hundredsStr}
    }

    if (num < 1000) {return result}
    
    var previousCheck = hundreds
    var dictionary = {1000:"thousand",1000000:"million",1000000000:"billion",1000000000000:"trillion",1000000000000000:"quadrillion"}
    for (var i=1000; i<=1000000000000000; i = i*1000) {
        var modulus = num % (i*1000)
        num -= modulus
        modulus = modulus / i
        if (modulus > 0) {
            var str = numToEnglish(modulus) + " " + dictionary[i]
            if (previousCheck > 0) {result = str + " and " + result}
            else {result = str}
        }
        previousCheck = modulus
    }
    return result
}


// numToEnglish(899755499322566138)
// numToEnglish(3368)
// console.log(numToEnglish(100110001101))
console.log(numToEnglish(1886540865456840555))