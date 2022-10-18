// how do you reverse words in a given sentence?

const STR = "I am trying to reverse this sentence";

let reversed = STR.split(' ').reduce((a, c) => c + ' ' + a);
console.log(reversed);