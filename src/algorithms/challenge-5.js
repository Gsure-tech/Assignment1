function filterList(arr) {
  arr = [2, 4, "abu", 30, "sani", 28];
  return arr.filter((x) => typeof x === "number");
}
console.log(filterList());
/*
Implement the function filterList(arr) that
 takes a list of non-negative integers and 
 strings and returns a new list with 
 the strings filtered out.*/
module.exports = filterList;
