// practice with map, filter, and reduce

const { arrayBuffer } = require("stream/consumers");

// square every value in an array

ARR = [1, 2, -3, -5, 3, 4, 5]

let result = ARR.map(a => a*a);
console.log(result);

// If the given input is an array of numbers, return the sum of all the positives ones. 

let result1 = ARR.filter(a => a > 0).reduce((acc, num) => acc + num, 0);
console.log(result1) // 15

// calculate the mean alues of the numbers in an array

let sum = ARR.reduce((acc, cur) => {
   return acc + cur
}, 0);
let result2 = sum/ARR.length
console.log(result2);

// The given input is a string of multiple words with a single space between each of them.
const input = 'George Raymond Richard Martin';

let arr = input.split(' ');
let result3 = '';
arr.map(m => {
    result3 += m[0]
})
console.log(result3)

// Find the difference in age between the oldest and youngest family members
// and return their respective ages and the age difference.

const input1 = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];

let ages = input1.map(i => i.age);
console.log([(Math.min(...ages)), (Math.max(...ages)), (Math.max(...ages)) - (Math.min(...ages))])
