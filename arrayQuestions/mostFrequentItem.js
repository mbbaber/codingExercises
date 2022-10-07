// write a function that takes a list as input and returns the most frequent item

function mostFrequentItem(arr) {
    let object = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        (object[key]) ? object[key] += 1 : object[key] = 1;
    }

    const [max] = Object.values(object).sort((a, b) => {b - a})

    return Object.keys(object).find(k => k == max);
};

console.log(mostFrequentItem([1, 2, 3, 3, 2, 1, 2, 6]))

