function snail_sort(arr) {
    var newArr = []
    if (arr.length == 1) {return newArr}
    for (var z=0; z<arr.length;z++) {
        console.log("1. arr: "+arr)
        var first = arr.shift()
        console.log("2. shifting: "+first)
        console.log("arr after shifting: "+arr)
        for (var i=0; i<first.length;i++) {
            newArr.push(first[i])
        }
        console.log("3. newArr: "+newArr)
        for (var j=0;j<arr.length-1;j++) {
            var tmp = arr[j].pop()
            console.log("pop: "+tmp)
            newArr.push(tmp)
        }
        console.log("4. newArr: "+newArr)
        var last = arr.pop()
        console.log("pushing last array: "+last)
        for (var i=last.length-1; i>=0;i--) {
            newArr.push(last[i])
        }
        console.log("5. newArr: "+newArr)
        for (var j=arr.length-1;j>=0;j--) {
            var tmp = arr[j].shift()
            console.log("shift: ",tmp)
            newArr.push(tmp)
        }
        console.log("remaining arr: ",arr)
    }
    if (arr.length == 1) {
        if (arr[0].length == 1) {
            console.log("pushing last element: "+arr[0][0])
            newArr.push(arr[0][0])
        }
    }
    return newArr
}

var arr = [[1,2,3],[8,9,4],[7,6,5]]
var arr2 = [[5,7,9,8,9],[5,2,3,6,7],[1,7,6,2,8],[5,0,1,9,3],[1,2,3,4,5]]

console.log("newArr: "+snail_sort(arr2))