function secondLargest(arr) {
  //arr = [10, 4, 21, 8, 16];
  let secondLargest = arr.sort(function (a, b) {
    return b - a;
  })[1];
  return secondLargest;
}
console.log(secondLargest([10, 4, 21, 8, 16, 30]));

/*Implement a function secondLargest(arr)
 that takes an array of numbers and returns 
 the second largest number.
 const digits = [10, 2, 11, 5, 38, 36, 20];

      const result = digits.sort(function (a, b) {
        return b - a;
      })[1];

      console.log(result);*/

module.exports = secondLargest;
