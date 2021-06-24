'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here

function sum(a, b) {
  let number1= a;
  let number2= b;
  let sum= number1 + number2;
  let return_message= `The sum of ${number1} and ${number2} is ${sum}.`;
  return [sum, return_message];
}

// Here is the test for sum(); uncomment it to run it

testSum(4, 7);
// console.log(sum(2,8));

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here

function multiply(a, b) {
  let number1= a;
  let number2= b;
  let multi= number1 * number2
  let return_message= `The product of ${number1} and ${number2} is ${multi}.`;
  return [multi, return_message];
}

// Here is the test for multiply(); uncomment it to run it

testMultiply(5,9);
// console.log(multiply(5, 8));

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here

function sumAndMultiply(a, b, c) {
 let number1= a;
 let number2= b;
 let number3= c;
 let sum= number1 + number2 + number3;
 let multi= number1 * number2 * number3;
 let sum_return_message= `${number1} and ${number2} and ${number3} sum to ${sum}.`;
 let multi_return_message= `The product of ${number1} and ${number2} and ${number3} is ${multi}.`;
 return [sum, multi, sum_return_message, multi_return_message];
}

// Here is the test for sumAndMultiply(); uncomment it to run it

testSumAndMultiply(4,7,5);
// console.log(sumAndMultiply(1, 5, 3));

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) {
 let Array_name = sumArr;
 let first_sum= sum(Array_name[0], Array_name[1])[0];
 let Array_sum= sum(first_sum, Array_name[2])[0];
 let return_message= `${Array_name[0]},${Array_name[1]},${Array_name[2]} was passed in as an array of numbers, and ${Array_sum} is their sum.`;
return[Array_sum, return_message];
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);
// console.log(sumArray([0, 5, 10]));

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) {
  let Array_name= multArr;
  let first_multi= multiply(Array_name[0], Array_name[1])[0];
  let Array_multi= multiply(first_multi, Array_name[2])[0];
  let return_message= `The numbers ${Array_name[0]},${Array_name[1]},${Array_name[2]} have a product of ${Array_multi}.`;
  return[Array_multi, return_message];
}

// Here is the test for multiplyArray(); uncomment it to run it

testMultiplyArray(testArray);
// console.log(multiplyArray([1, 5, 2]));

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1, 2, 3, 4, 5]; 

function multiplyAnyArray(dynamicArray) {
  let Array_name=dynamicArray;
  var multi_dummy = 1;
  var track_dummy = '';
  let return_message_p1= 'The numbers ';
  let return_message_p2=  Array_name[0];
  let return_message_p4= ' have a product of 120.';

  for (let i=0; i<Array_name.length; i++){
    multi_dummy= Array_name[i] * multi_dummy;
    if (i>0){
      track_dummy = track_dummy + ',' + Array_name[i];
    }
  }
  let return_message_p3= track_dummy;
 
  let return_message= return_message_p1 + return_message_p2 + return_message_p3 + return_message_p4;

  return [multi_dummy, return_message];
}

// Here is the test for multiplyArray(); uncomment it to run it

testMultiplyAnyArray(testDynamicArray);
// console.log(multiplyAnyArray(testDynamicArray));

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
