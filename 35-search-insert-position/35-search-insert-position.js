/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        console.log(mid)
        let key = nums[mid]
        if (target === key) {
            return mid
        }
        else if (key < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return end + 1
};