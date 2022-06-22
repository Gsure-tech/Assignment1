function filterArray(arr) {
  let numArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numArr.push(arr[i]);
    }
  }
  return numArr;
}
console.log(filterArray([1, 2, "aasf", "hello", "1", 22, "123", 123]));
/*
Implement a function filterArray(arr) 
that takes an array of non-negative integers
 and strings and return a new array without 
 the strings.*/

module.exports = filterArray;
