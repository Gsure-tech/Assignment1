function sumTwoSmallestNums(arr) {
  arr = [10, 20, 4, 7, 5];
  var ordered = arr.sort(function (a, b) {
    return a - b;
  });
  var result = 0;
  var i = 0;
  for (i = 0; i < ordered.length; i++) {
    if (i === 0) {
      result += ordered[0];
    }
    if (i === 1) {
      result += ordered[1];
    }
  }
  return result;
  //Code here
}
console.log(sumTwoSmallestNums());
/*# Challenge 4
Implement the function sumTwoSmallestNums(arr) 
that takes an array of numbers and returns
 the sum of the two lowest positive numbers.*/
module.exports = sumTwoSmallestNums;
