//How would you go about finding all the permutations of a given array?

function permute(nums) {
    let result = [];

    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums];

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
        let remainingNumsPermuted = permute(remainingNums);

        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
            result.push(permutedArray);
        }
    };

    return result;
};
    
console.log(permute([1,2,3]));
