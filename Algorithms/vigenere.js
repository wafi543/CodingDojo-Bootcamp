class VigCipher {
    constructor(key, alphabet) {
        this.key = key;
        this.alphabet = alphabet;
      }
}

function generateMatrix (alphabet) {
    var matrix = [[]]
    var index = 0
    for (var i=0; i<alphabet.length;i++) {
        var arr = []
        for (var j=0; j<alphabet.length;j++) {
            arr.push(alphabet.charAt(index%alphabet.length))
            index++
        }
        matrix.push(arr)
        // console.log(""+arr)
        // console.log("")
        index++
    }
    ascii = alphabet.charCodeAt(0)
    matrix.shift()
    return matrix
}

// var matrix = generateMatrix('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
var matrix = generateMatrix('abcdefghijklmnopqrstuvwxyz')
var ascii = 97


function encode (message, key) {
    message = message.toLowerCase()
    key = key.toLowerCase()
    while (key.length < message.length) {
        key += key
    }
    console.log(message)
    console.log(key)

    var result = ""
    for (var i=0; i<message.length; i++) {
        var col = message.charCodeAt(i) % ascii
        var row = key.charCodeAt(i) % ascii
        result += matrix[col][row]
    }
    return result.toLowerCase()
}

function decode (message, key) {
    while (key.length < message.length) {
        key += key
    }
    var result = ""
    
    for (var z=0; z<message.length;z++) {
        for (var i=0; i<matrix[0].length; i++) {
            if(matrix[0][i] == key.charAt(z)) {
                for (var j=0; j<matrix[i].length; j++) {
                    if (matrix[i][j] == message.charAt(z)) {
                        result += String.fromCharCode(j+ascii)
                        break
                    }
                }
            }
        }
    }
    return result
}
// console.log(encode('mysecretcodeiwanttosecure','password'))
console.log(encode('attackatdawn','lemon'))
console.log(decode('laxxhsj','password'))