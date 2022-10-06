// Find duplicate numbers in an array if the array has multiple duplicates

function findDups(arr) {
    let hash = {}
    let dups = []
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (hash[key] && dups.indexOf(key) == -1) {
            dups.push(key);
        } else {
            hash[key] = true;
        }
    }
    return dups;
};

const ARR = [1, 1, 2, 3, 5, 2, 5, 7, 8, 7, 7, 105]
console.log(findDups(ARR));
