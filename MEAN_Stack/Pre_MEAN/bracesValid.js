function bracesValid(str) {
    var matches = { '(':')', '{':'}', '[':']' };
    var arr = [];
    var check;

    for (var i=0; i<str.length; i++) {
        check = str[i];
    
        if (matches[check]) { // opening braces
            arr.push(check);
        } else { // closing braces
          if (check !== matches[arr.pop()]) {
            return false;
          }
        }
      }
      return arr.length === 0;
}


console.log(bracesValid("{{()}}[]"))