// hoisting
// console.log(a); // undefined
//  var a = 10;
// console.log(a); // 10   


// hoisting with function

// myFunction(); // Output: "Hello from myFunction!"

// console.log(myFunction); // [Function: myFunction]  
// console.log(myFunction2); // Undefined
// console.log(myFunction3); // Undefined


// function myFunction() {
//   console.log("Hello from myFunction!");
// }

// var myFunction2 = () => {
//     console.log("Hello from arrow function myFunction2!"); 
// }

// var myFunction3 = function() {
//     console.log("Hello from function expression myFunction3!"); 
// }



// // //OBJECT LITERAL
// // const obj = {
// //     age: 25,
// //     name: "John",   }
// // console.log(obj); // { age: 25, name: 'John' }

// //copy reference values

// // const obj1 =[1,3,5,6,4];
// // var b=[...obj1];
// // console.log(b); // [ 1, 3, 5, 6,

// // //for each loop

// // obj1.forEach((element) => {
// //     console.log(element+5); // 1 3 5 6 4
// // });

// // const stud=["SB", "Ravi", "Sita", "Ram"];
// // stud.forEach((val)=>{
// //     console.log(val); // SB, Ravi, Sita, Ram
// // })

// // //for in loop

// // for (let key in obj) {
     
// //     //  console.log(obj[key]); // age 25, name John
// //      console.log(key,obj); // age 25, name John
// // }

// ******FUNCTIONS*******

// a(); // Hello, World!
// b(); // ReferenceError: Cannot access 'b' before initialization

// Function Statement or Function Declaration

// function a() {
//     console.log("Hello, World!"); 
// }

// Function Expression
// const b = function() {
//     console.log("Hello from function expression!");
// }

// Anonymous Function

// function () // SyntaxError: Function statements require a function name
// {  
//     console.log("Hello from anonymous function!");
// }


// Named Function Expression

// const c = function myNamedFunction() {
//     console.log("Hello from named function expression!");
// }
// c(); // Hello from named function expression!
// myNamedFunction(); // ReferenceError: myNamedFunction is not defined (because it's not accessible outside the function expression)

// IIFE (Immediately Invoked Function Expression)

// (function() {
//     console.log("Hello from IIFE!"); 
// })(); // Hello from IIFE!

// Diff between Parameter and Argument

// function sum(a,b) { // 'a,b' is a parameter
//     console.log(a+b); 
// }
// sum(10,20); // '10' and '20' are arguments, Output: 30

// function with default parameters

// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`); 
// }
// greet(); // Output: Hello, Guest!
// greet("Alice"); // Output: Hello, Alice!


// First Class Functions

// Def - The ability of function to be used as values and can be passed as arguments to other functions and can be returned from the functions this ability is called first-class functions


// function greet() {
//     console.log("Hello, World!"); 
// }
// function callGreet(func) {                
//     func(); // Calls the passed function
// }
// callGreet(greet); // Output: Hello, World!


// // //Arrow Function

// Def - Arrow functions are a concise syntax for writing function expressions in JavaScript. They are often used for shorter functions and do not have their own 'this' context, making them useful in certain situations like callbacks and array methods.

// this keyword in arrow function

// const obj = {
//     name: "John",
//     regularFunction: function() {
//         console.log("Regular Function:", this.name); // 'this' refers to the obj, Output: John
//     }, 
//     arrowFunction: () => {
//         console.log("Arrow Function:", this.name); // 'this' does not refer to the obj, Output: undefined
//     }
// };
// obj.regularFunction(); // Regular Function: John
// obj.arrowFunction(); // Arrow Function: undefined        


// let greet = () => console.log("Good Morning!");
// greet();

// add = (a, b) => a + b;
// console.log(add(5, 10)); // 15

// //arrow function with multiple parameters
// const multiply = (a, b, c) => {
//     return a * b * c;
// };
// console.log(multiply(2, 3, 4)); // 24

// let div = (a, b) => (a / b);
// console.log(div(10, 2)); // 5

// setTimeout(() => {    
//     console.log("We are inside setTimeout!");
// }, 2000); // This is an arrow function used as a callback in setTimeout!

//Call Back Function

// Def - A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows you to handle asynchronous operations and ensures that certain code runs only after a specific task is finished.

// function x(){
//     console.log("Function x called");
// }
// x(function y(){
//     console.log("This is a callback function y called inside function x");
// });


// function sum(a, b, callback){
//     let result = a + b;
//     callback(result); // Call the callback function with the result
// }
// function displayResult(result){ // This is the callback function that will be called after the sum is calculated
//     console.log("The result is: " + result);
// }
// sum(10,39, displayResult); 


// setTimeout(printName,2000) // This will call the printName function after 2 seconds
// function printName(){
//     console.log("Shantanu");
// }

// setTimeout(() => {
//     console.log("This is a callback function executed after 2 seconds");
// }, 2000); // This is a callback function executed after 2 seconds

// // setTimeout with function
// function delayedFunction() {
//     console.log("This is a delayed function executed after 3 seconds");
// }   
// setTimeout(delayedFunction, 3000); // This is a delayed function executed after 3 seconds

// Callback Hell aka Pyramid of Doom

// Def - Callback hell refers to a situation where multiple nested callback functions are used, making the code difficult to read and maintain. It often occurs when dealing with asynchronous operations that depend on the results of previous operations, leading to deeply nested and complex code structures. 

//Example: menu ->  groceries -> cook -> tables -> serve -> eat

// menu(function(){
//     groceries(function(){
//         cook(function(){
//             tables(function(){
//                 serve(function(){
//                     eat(function(){
//                         console.log("All done!");
//                     })
//                 })
//             })
//         })
//     })
// })


// Solution to Callback Hell - Promises and Async/Await


// //Maths

// // console.log(Math.PI); // 3.141592653589793
// // console.log(Math.sqrt(16)); // 4    
// // console.log(Math.random()); // Random number between 0 and 1
// // console.log(Math.floor(4.7)); // 4
// // console.log(Math.ceil(4.1)); // 5   
// // console.log(Math.max(10, 20, 30)); // 30
// // console.log(Math.min(10, 20, 30)); // 10
// // console.log(Math.pow(2, 3)); // 8 (2 raised to the power of 3)
// // console.log(Math.abs(-5)); // 5 (absolute value of -5)
// // console.log(Math.round(4.5)); // 5 (rounds to the nearest integer)
// // console.log(Math.trunc(4.9)); // 4 (truncates the decimal part)
// // console.log(Math.sign(-10)); // -1 (indicates negative number)
// // console.log(Math.sign(0)); // 0 (indicates zero)
// // console.log(Math.sign(10)); // 1 (indicates positive number)
// // console.log(Math.floor(Math.random() * 100)); // Random integer between 0 and 99

// // const bal=new Number(1000.00000);
// // console.log(bal); // [Number: 1000]
 
// // console.log(bal.toFixed(2)); // 1000.00
// // console.log(bal.toLocaleString()); 
// // console.log(bal.toExponential(2)); // 1.00e



// // //array methods


// // const numbers = [1, 2, 3, 4, 5];
// // //map method
// // const doubled = numbers.map(num => num * 2);
// // console.log(doubled); // [2, 4, 6, 8, 10]

// // //filter method
// // const evenNumbers = numbers.filter(num => num % 2 === 0);
// // console.log(evenNumbers); // [2, 4]

// // //find method
 
// // const find = numbers.find(  num => num ===2);
// // console.log(find); // 2

// // //findIndex method
 
// // const findIndex = numbers.findIndex(  num => num ===4);
// // console.log(findIndex); // 1

// // //reduce method

// // const num=[1, 2, 3, 4, 55,4,56,3, 6, 7, 8, 9];
// // let newNum= num.reduce((num1,num2) => {
// //     return num1 + num2;
// // });
// // console.log(newNum); // 15

// // //some method
// // const hasEven = numbers.some(num => num % 2 === 0);
// // console.log(hasEven); // true (because there are even numbers in the array)

// // //every method
// // const allEven = numbers.every(num => num % 2 === 0);
// // console.log(allEven); // false (not all numbers are even)

// // //sort method
// // const sortedNumbers = num.sort((a, b) => a - b);
// // console.log(sortedNumbers); // [1, 2, 3, 4, 4, 6, 7, 8, 9, 55, 56]

// // //reverse method
// // const reversedNumbers = num.reverse();
// // console.log(reversedNumbers); // [9, 8, 7, 6, 4, 55, 4, 3, 2, 1]

// // //splice method
// // const fruits = ['apple', 'banana', 'orange', 'grape'];
// // fruits.splice(2, 1, 'kiwi'); // Removes 'orange' and adds 'kiwi'
// // console.log(fruits); // ['apple', 'banana', 'kiwi', 'grape

// // //slice method
// // const slicedFruits = fruits.slice(1, 3); // Slices from index 1 to 2
// // console.log(slicedFruits); // ['banana', 'kiwi']

// // //concat method
// // const moreFruits = ['mango', 'pineapple'];
// // const allFruits = fruits.concat(moreFruits);
// // console.log(allFruits); // ['apple', 'banana', 'kiwi', 'grape', 'mango', 'pineapple']

// // //join method
// // const fruitString = allFruits.join(', ');
// // console.log(fruitString); // 'apple, banana, kiwi, grape, mango, pineapple'

// // //includes method
// // const hasApple = allFruits.includes('apple');
// // console.log(hasApple); // true (because 'apple' is in the array)

// // //indexOf method
// // const indexOfBanana = allFruits.indexOf('banana');
// // console.log(indexOfBanana); // 1 (index of 'banana' in the array)

// // //lastIndexOf method
// // const lastIndexOfGrape = allFruits.lastIndexOf('grape');
// // console.log(lastIndexOfGrape); // 3 (last index of 'grape' in the array)

// // //findLast method
// // const lastEvenNumber = numbers.findLast(num => num % 2 === 0);
// // console.log(lastEvenNumber); // 4 (last even number in the array)

// // //event listener
// // document.getElementById("myButton").addEventListener("click", function() {
// //     alert("Button clicked!");
// // });
// // //event listener with arrow function

// // document.getElementById("myButton").addEventListener("click", () => {
// //     alert("Button clicked with arrow function!");
// // }   );
// // //event listener with named function
// // function handleClick() {
// //     alert("Button clicked with named function!");
// // }   
// // document.getElementById("myButton").addEventListener("click", handleClick);

// // //event listener with anonymous function
// // document.getElementById("myButton").addEventListener("click", function() {
// //     alert("Button clicked with anonymous function!");
// // });

// // //onclick event
// // document.getElementById("myButton").onclick = function() {
// //     alert("Button clicked with onclick event!");
// // };  

// // //onblur event
// // document.getElementById("myInput").onblur = function() {
// //     alert("Input field lost focus!");
// // }

// // //onchange event
// // document.getElementById("mySelect").onchange = function() {
// //     alert("Selected option changed!");
// // }   

// // //onmouseover event
// // document.getElementsByClassName("myDiv").onmouseover = function() {
// //     alert("Mouse over the div!");
// // }   

// //synchronous and asynchronous code

// const synchronousFunction = () => {
//     console.log("This is a synchronous function.");
// }       
// synchronousFunction(); // This is a synchronous function.

// const asynchronousFunction = () => {
//     setTimeout(() => {
//         console.log("This is an asynchronous function executed after 2 seconds.");
//     }, 2000);
// }   
// asynchronousFunction(); // This is an asynchronous function executed after 2 seconds.

// // // Promises


// // const myPromise = new Promise((resolve, reject) => {
// //     const success = false; // Change this to false to see the rejection case
// //     if (success) {
// //         resolve("Promise resolved successfully!");
// //     } else {
// //         reject("Promise rejected.");
// //     }
// // });


// // myPromise
// //     .then((message) => {
// //         console.log(message); // Promise resolved successfully!
// //     })
// //     .catch((error) => {
// //         console.error(error); // Promise rejected.
// //     });

// // Async/Await
// const asyncFunction = async () => {

//     try {
//         const result = await myPromise;
//         console.log(result); // Promise resolved successfully!
//     } catch (error) {
//         console.error(error); // Promise rejected.
//     }
// }
// asyncFunction(); // This will execute the async function and handle the promise

// // Fetch API
// const fetchData = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data); // { userId: 1, id: 1, title: '...', body: '...' }
//     } catch (error) {
//         console.error('Fetch error:', error); // Fetch error: ...
//     }       
// }
// fetchData(); // This will fetch data from the API and log it to the console 








