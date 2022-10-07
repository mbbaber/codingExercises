// How do you print the first non-repeated character from a string ?

function printFirstNRC(str) {
    let hash = {};
    for (let i = 0; i < str.length; i++) {
        let key = str[i];
        if (hash[key]) {
            hash[key] += 1;
        } else {
            hash[key] = 1;
        }
    }
    let asArray = Object.entries(hash);
    let [ result ] = asArray.filter(([key, value]) => value === 1);
    return result;
}

STR = 'maggie';
console.log(printFirstNRC(STR));