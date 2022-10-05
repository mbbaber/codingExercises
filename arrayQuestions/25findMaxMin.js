// how do you find the largest and smallest integer in an unsorted array?

function findMinMax(arr) {
    let currentMin = arr[0], currentMax = arr[0];
    arr.forEach(num => {
        currentMin = (num < currentMin) ? num : currentMin;
        currentMax = (num > currentMax) ? num : currentMax;
    })
    return [currentMin, currentMax];
}

const ARR1 = [5, 6, 1, 0, 8];
const ARR2 = [5, 6, 1, 0, -5];

console.log(findMinMax(ARR1), findMinMax(ARR2));