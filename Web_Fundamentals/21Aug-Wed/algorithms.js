function coinChange (cents) {
    var mod25 = cents % 25;
    var centsOfQuarters = cents - mod25; // mod25 = 19
    var quarters = centsOfQuarters / 25;

    var mod10 = mod25 % 10; // mod10 = 9
    var centsOfDimes = mod25 - mod10;
    var dimes = centsOfDimes / 10;

    var mod5 = mod10 % 5; // mod5 = 4
    var centsOfNickels = mod10 - mod5;
    var nickels = centsOfNickels / 5;

    console.log("quarters = " , quarters);
    console.log("dimes = ", dimes);
    console.log("nickels = ", nickels);
    console.log("pennis = ", mod5);
}

// coinChange(94);

function fib (num) {
    if (num < 0) {
        return 0;
    }else if (num == 0 || num == 1) {
        return num;
    }
    return fib(num-1) + fib(num - 2);
}

console.log("fib = ", fib(14));
