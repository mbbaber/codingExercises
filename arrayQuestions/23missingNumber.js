//How do you find the missing number in a given integer array of 1 to 10?

function missingNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]+1 !== arr[i+1]) {
            return arr[i]+1;
        };
    };
};

function missingNumber2(arr) { // try sumTotal = sumArray
    let sumArray = 0;
    arr.forEach(n => {
        sumArray += n;
    })
    let sumTotal = ((arr.length+1)*(arr.length+2))/2 // parentheses are important
    return sumTotal - sumArray;
}

console.log(missingNumber2([1,2,3,4,6,7,8,9,10]));

function missingNumber3(arr) { // try with a reduce
    const sumArr = arr.reduce((total, item) => {
        return total + item;
    }, 0)
    const sumTotal = (arr.length+1)*((arr.length+2)/2);
    return sumTotal - sumArr
}

console.log(missingNumber3([1,2,3,4,6,7,8,9,10]))