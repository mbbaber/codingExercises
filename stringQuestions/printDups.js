// how do you print duplicate characters from a string?

const { addAbortSignal } = require("stream");

const STR = 'maggiebaber';
let dups = []
let letters = STR.split('').reduce((acc, cur) => {
    if (!acc.includes(cur)) {
        acc.push(cur);
    } else {
        console.log('here')
        dups.push(cur)
    }
    return acc
}, [])

console.log(letters, dups);