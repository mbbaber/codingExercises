// write a method that takes a number and returns the number in the fibonacci series
// 2 ways to do this
let hash = {};

function fibRec(n) {
    if (n < 2) {
        return 1;
    }
    hash[n] = fibRec(n-1) + fibRec(n-2)
    return fibRec(n-1) + fibRec(n-2);
}

const fib = (n) => hash[n] ? hash[n] : fibRec(n);


console.log(fib(17), hash);