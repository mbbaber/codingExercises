// How can a string be reversed using recursion?

const STR = 'maggie';

console.log(STR.split('').reduce((a, c) => c + a));
