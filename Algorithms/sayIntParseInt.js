function process (str) {
    var nums = {"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9,"ten":10,"eleven":11,"twelve":12,"thirteen":13,"fourteen":14,"fifteen":15,"sixteen":16,"seventeen":17,"eighteen":18,"nineteen":19,"twenty":20,"thirty":30,"fourty":40,"fifty":50,"sixty":60,"seventy":70,"eighty":80,"ninety":90}
    var arr = str.split(" ")
    var total = 0
    for (var i=0; i<arr.length; i++) {
        if (arr[i] == 'million') {
            total *= 1000000
        }else if (arr[i+1] == "hundred") {
            total += (nums[arr[i]] * 100)
        }else if (arr[i] == "thousand") {
            total *= 1000
        }else if (arr[i].includes("-")) {
            var s = arr[i].split("-")
            var num = nums[s[0]]+nums[s[1]]
            total += num
        }else if (arr[i] == "hundred") {
            continue
        }else {
            total += nums[arr[i]]
        }
        return total
    }
}


// process("two hundred three thousand")
// process('six hundred sixty-six thousand six hundred sixty-six')
// process('one million')
process('five hundred thousand three hundred')
