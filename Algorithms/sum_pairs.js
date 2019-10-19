function check (arr, sum) {
    if (arr.length == 2) {return arr}
    for (var i=1; i<arr.length-1; i++)  {
        for (var j=i+1; j<arr.length-1; j++) {
            console.log('checking...')
            if (arr[i] + arr[j] == sum) {
                console.log('found '+arr[i] + ','+arr[j])
                var a = arr.splice(i, j-i+1)
                return check(a , sum)
            }
        }
    }
    return [arr[0],arr[arr.length-1]]
}

function sum_pairs (arr, sum) {
    for (var i=0; i<arr.length; i++)  {
        for (var j=i+1; j<arr.length; j++) {
            if (arr[i] + arr[j] == sum) {
                console.log('found arr['+i+']:'+arr[i] + ',arr['+j+']: '+arr[j])
                var a = arr.splice(i, j-i+1)
                console.log('a: '+a)
                return check(a , sum)
            }
        }
    }
}

console.log(sum_pairs([10,5,2,3,7,5], 10))
// console.log(sum_pairs([11,3,7,5], 10))
// console.log(sum_pairs([4,3,2,3,4], 6))
// console.log(sum_pairs([0,0,-2,3], 2))