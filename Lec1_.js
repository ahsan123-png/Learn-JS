// Variables let / Const / var
// Variables are used to store data values.
// In JavaScript, there are three ways to declare variables: let, const, and var.
// 1. let: Used to declare variables that can be reassigned later.
// 2. const: Used to declare variables that cannot be reassigned.
// 3. var: An older way to declare variables, which has function scope and can be reassigned.
let name = "John";
let age = 30;
let isStudent = true;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(isStudent); // Output: true

const pi = 3.14;
console.log(pi); // Output: 3.14

// data types in JS
// JavaScript has several data types, including:
// 1. String: Represents text, enclosed in single or double quotes.
let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!
// 2. Number: Represents numeric values, both integers and floating-point numbers.
let score = 95;
console.log(score); // Output: 95
// 3. Boolean: Represents a logical value, either true or false.    
let isPassed = true;
console.log(isPassed); // Output: true
// 4. Undefined: Represents a variable that has been declared but not assigned a value.
let notAssigned;
console.log(notAssigned); // Output: undefined
// 5. Null: Represents an intentional absence of any value.
let emptyValue = null;
console.log(emptyValue); // Output: null
// 6. Object: Represents a collection of key-value pairs.
let person = {
    name: "Alice",
    age: 25,
    isStudent: false
};
console.log(person); // Output: { name: 'Alice', age: 25, isStudent: false }
// 7. Array: Represents an ordered list of values.
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]


// Practice test 
// print the details of a product list in amazon
const item={
    name:'iPhone 14',
    price: 999.99,
    category: 'Electronics',
    inStock: true,
    features: ['5G', '128GB', 'A15 Bionic chip'],
}
// print a single item from object 
console.log(item.name);
// print a single item from array
console.log(item.features[0]); // Output: 5G