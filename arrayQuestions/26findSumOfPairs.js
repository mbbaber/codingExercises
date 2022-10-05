// How do you find all pairs of an integer array whose sum is equal to a given number?

function findPairsOfSum(arr, sum) {
    let pairs = [];
    let ps = [];
    for (let i = 0; i < arr.length; i++) {
        let p1 = arr[i];
        let p2 = sum - p1;
        if ((arr.indexOf(p2) !== -1) && 
            (ps.indexOf(p1) == -1) && (ps.indexOf(p2) == -1)) {
            pairs.push([p1, p2]);
        }
        ps.push(p1);
        ps.push(p2);
    }
    return pairs;
}

const ARR = [1, 5, 2, 4, 3, 3, 5, 1]
console.log(findPairsOfSum(ARR, 6));