// How do you find the duplicate number on a given integer array?

function findDup(arr) {
    let hash = {}
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (hash[key]) {
            return key;
        } else {
            hash[key] = true;
        }
    }
};

const ARR1 = [1,2,3,3,8]
console.log(findDup(ARR1));
console.log(findDup([1,10,3,1,19]));

function findDup2(arr) {
    let result  = arr.filter((item, index) => arr.indexOf(item) !== index); //this is expensive
    return result[0];
}

console.log(findDup2(ARR1));