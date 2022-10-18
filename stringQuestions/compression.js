// implement a function to perform basic string compression using the counts of repeated letters. 
//If the compressed string is bigger than the original, return the original

const STR1 = "aabcccccaaa"  //"a2b1c5a3"
const STR2 = "abcdefgh" // "abcdefgh"

function compression(str) {
    let currentLetter = str[0];
    console.log(currentLetter)
    let currentCount = 0;
    compressedStr = "";
    str.split("").map((s, i) => {
        if (s != currentLetter) {
            compressedStr += currentLetter + currentCount;
            currentLetter = s;
            currentCount = 1;
        } else {
            currentCount++;
        }
        if (i === str.length-1) {
            compressedStr += currentLetter + currentCount;
        }
    });
    return compressedStr.length > str.length ? str : compressedStr;
};

console.log(compression(STR1))
console.log(compression(STR2))