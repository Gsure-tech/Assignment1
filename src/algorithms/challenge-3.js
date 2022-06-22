function sumMix(arr) {
  const values = [2, "21", 19, "5"];
  const sum = values.reduce((c, a) => Number(c) + Number(a));
  return sum;
}
console.log(sumMix());
/*
 # Challenge 3
 Implement the function sumMix(arr) that
  given an array of integers as strings and
   numbers, returns the sum of the array
    values as if all were numbers.*/

module.exports = sumMix;
