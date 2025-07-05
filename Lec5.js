// Now here we are goint ot learn abou all  kinds of functions and see where to use which function with all methods and properties of functions in javascript
// Functions in js 
const myfunctions = function() {
    console.log("Functions in JavaScript are blocks of code designed to perform a particular task. They are executed when they are called or invoked.");
    console.log("Functions can take parameters and return values. They can be defined using function declarations, function expressions, or arrow functions.");
}

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
// Function Expression
const add = function(a, b) {
    return a + b;
}
// Arrow Function
const multiply = (x, y) => x * y;
// Higher-Order Function
const processNumbers = (arr, operation) => {
    return arr.map(operation);
}
// Callback Function
const logResult = (result) => {
    console.log(`The result is: ${result}`);
}
// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This is an IIFE that runs immediately.");
})();
// Function with Default Parameters
function greetUser(name = "Guest") {
    return `Welcome, ${name}!`;
}
// Function with Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
// Function with Spread Operator
function combineArrays(...arrays) {
    return [].concat(...arrays);
}
// Function with Destructuring
function displayUser({ name, age }) {
    return `User: ${name}, Age: ${age}`;
}

// functions(); // Call the function to see the output