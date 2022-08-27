/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0
    let runsum = []
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        runsum.push(sum)
    }
    return runsum
};