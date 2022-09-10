/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let myArray = [];
    for( i = 1; i < n + 1; i++){
        if (i % 5 === 0 && i % 3 === 0){
            myArray.push("FizzBuzz")
        }
        else if (i % 5 === 0){
            myArray.push("Buzz")
        }
        else if(i % 3 === 0) {
            myArray.push("Fizz")
        } else {
            myArray.push(`${i}`);
        }
    }
    return myArray
};