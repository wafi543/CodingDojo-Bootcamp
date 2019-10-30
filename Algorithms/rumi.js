function time(s) {
    var yy = Math.floor(s / (3600 * 24 * 365))
    s = s % (3600 * 24 * 365)
    var m = Math.floor(s / (3600 * 24 * 30))
    s = s % (3600 * 24 * 30)
    var dd = Math.floor(s / (3600 * 24))
    s = s % (3600 * 24)
    var hh = Math.floor(s / 3600)
    s = s % 3600
    var mm = Math.floor(s / 60)
    s = s % 60
    var str = ''
    var arr = []

    if (yy > 0) { arr.push(yy + ' years') }
    if (m > 0) { arr.push(m + ' months') }
    if (dd > 0) { arr.push(dd + ' days') }
    if (hh > 0) { arr.push(hh + ' hours') }
    if (mm > 0) { arr.push(mm + ' minutes') }
    if (s > 0) { arr.push(s + ' seconds') }

    for (var i = 0; i < arr.length; i++) {
        if (i == arr.length - 1 && arr.length > 1) { str += ' and ' }
        else if (i > 0) { str += ', ' }
        str += arr[i]
    }

    return str
}

console.log(time(63))