// How do you check if two strings are anagrams of eachother ?

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let hash = {};
    str1.split('').forEach(s => {
        hash.hasOwnProperty(s) ? hash[s] += 1 : hash[s] = 1;
    });
    str2.split('').forEach(s => {
        if (!hash.hasOwnProperty(s)) {
            return false;
        } else if (hash[s] > 1) {
            hash[s] -= 1;
        } else {
            delete hash[s]
        }
    });
    return Object.keys(hash).length == 0;
};

STR1 = 'maggie'
STR2 = 'aggmie'
STR3 = 'aggmil'

console.log(isAnagram(STR1, STR2));
console.log(isAnagram(STR1, STR3));