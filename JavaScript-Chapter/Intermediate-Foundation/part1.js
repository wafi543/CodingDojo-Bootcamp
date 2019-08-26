function sigma(num) {
    var sum = 0;
    for (var i=1; i<=num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sigma(5));

function factorial(num) {
    var sum = 1;
    for (var i=1; i<=num; i++) {
        sum *= i;
    }
    return sum;
}
console.log(factorial(5));

function fibonacci(num){
    var x = 1;
    var y = 0;
    var temp;
  
    while (num >= 0){
      temp = x;
      x = x + y;
      y = temp;
      num--;
    }
  
    return y;
  }

  console.log(fibonacci(15));

  function secondToLast (arr) {
      if (arr.length < 2) {
          return null;
      }else {
          return arr[arr.length-2];
      }
  }

  console.log(secondToLast([42, true, 4, "Liam", 7]));

  function nthToLast (arr,num) {
      if (arr.length < num) {
          return null;
      }else {
          return arr[arr.length-num];
      }
  }

  console.log(nthToLast([5,2,3,6,4,9,7],3))

  function secondLargest (arr) {
      var minVal = 0;
      var temp = 0;
      for (var i=0; i<arr.length; i++) {
        for (var j=0; j<arr.length; j++) {
            if (arr[j+1] < arr[j]) {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
      }
      if (arr.length < 2) {
          return null;
      }else {
        return arr[arr.length-2];
      }
  }

  console.log(secondLargest([42,1,4,3.14,7]));

  function doubleTrouble (arr) {
      var newArr = [];
      for (var i=0; i<arr.length; i++) {
          newArr.push(arr[i]);
          newArr.push(arr[i]);
      }
      return newArr;
  }

  console.log(doubleTrouble([4, "Ulysses", 42, false]));