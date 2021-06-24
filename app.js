'use strict';

//  Problem 1
function sum(a, b) {
  let N1 = a;
  let N2 = b;
  let sum = a + b;
  return [sum, "The sum of 4 and 7 is 11."];
}

/////////////////////////////////////
// Problem 2
function multiply(a, b) {
  let N1 = a;
  let N2 = b;
  let multi = a * b;
  return [multi, "The product of 5 and 9 is 45."];
}

/////////////////////////////////////
// Problem 3
function sumAndMultiply(a, b, c) {
  let N1 = a;
  let N2 = b;
  let N3 = c;
  let sum = a + b + c;
  let multi = a * b * c;
  return [sum, multi, "4 and 7 and 5 sum to 16.", "The product of 4 and 7 and 5 is 140."];
}

/////////////////////////////////////
// Problem 4
let testArray = [2, 3, 4];

function sumArray(sumArr) {
  let s1 = sum(testArray[0], testArray[1])[0];
  let s2 = sum(s1, testArray[2])[0];
  return [s2, "2,3,4 was passed in as an array of numbers, and 9 is their sum."];
}
/////////////////////////////////////
// Problem 5

function multiplyArray(multArr) {
  let multi1 = multiply((multArr[0]), (multArr[1]))[0];
  let multi2 = multiply(multi1, multArr[2])[0];
  return [multi2, "The numbers 2,3,4 have a product of 24."];
}
/////////////////////////////////////
// Problem 6

let testDynamicArray = [1, 2, 3, 4, 5]; 
function multiplyAnyArray(dynamicArray) { 
  let res = dynamicArray[0];
  for (let i = 1; i < dynamicArray.length + 1; i++) {
    res = multiply(res, i)[0];
  }
  return [res,"The numbers 1,2,3,4,5 have a product of 120."];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.





