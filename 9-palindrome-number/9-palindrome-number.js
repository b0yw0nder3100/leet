/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reverseA = x.toString().split('').reverse().join("")
    if (Number(reverseA) === x) {
        return true
    } else {
        return false
    }
};