//How would you check whether an array contains only digits?

function isDigits(array) {
    return array.every(a => {
        return typeof(a) === 'number';
    })
}

let arr1 = [1, 3, 4, 5, 66];
let arr2 = ["hello", 1, 2];
console.log(isDigits(arr1), isDigits(arr2));
