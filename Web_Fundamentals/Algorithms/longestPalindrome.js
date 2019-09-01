/* 
Abdulaziz
Wafi
*/

function isPalindrome (txt) {
    var newTxt = txt.split("").reverse().join('') 
    return txt == newTxt
}

// console.log(isPalindrome("sos"))

function longestPalindrome (txt) {
    var longest = txt.charAt(0)

    for (var i=0; i<txt.length; i++) {
        for (var j=1; j<=txt.length; j++) {
            var tmp = txt.substring(i,j)
            // console.log(tmp)
            if (isPalindrome(tmp) && longest.length < tmp.length) {
                longest = tmp
                // console.log("isPalindrome = true, longest: ",longest)
            }
        }
    }

    return longest
}

console.log(longestPalindrome("Yikes! my favourite racecar erupted!"))