function time (n) {
    var hh = Math.floor(n/3600)
    n = n % 3600
    var mm = Math.floor(n/60)
    n = n % 60
    if (hh < 10) {hh = '0' + hh}
    if (mm < 10) {mm = '0' + mm}
    if (n < 10) {n = '0' + n}
    return hh + ':' + mm + ':' + n
}

console.log(time(0))