// in this lecture we learn about , different opreators in javascript, conditional satemants ,alert and prompt
// Arthemetic Opreators
let a = 10;
let b = 5;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus (Remainder)
let exponent = a ** b; // Exponentiation (a raised to the power of b)
console.log("Sum:", sum); // Output: Sum: 15
console.log("Difference:", difference); // Output: Difference: 5
console.log("Product:", product); // Output: Product: 50
console.log("Quotient:", quotient); // Output: Quotient: 2
console.log("Remainder:", remainder); // Output: Remainder: 0
console.log("Exponent:", exponent); // Output: Exponent: 100000
// Assignment Operators
let x = 10;
let y = 5;
x += y; // Equivalent to x = x + y
console.log("After += :", x); // Output: After += : 15
x -= y; // Equivalent to x = x - y
console.log("After -= :", x); // Output: After -= : 10
x *= y; // Equivalent to x = x * y
console.log("After *= :", x); // Output: After *= : 50
x /= y; // Equivalent to x = x / y
console.log("After /= :", x); // Output: After /= : 10
x %= y; // Equivalent to x = x % y
console.log("After %= :", x); // Output: After %= : 0
x **= y; // Equivalent to x = x ** y
console.log("After **= :", x); // Output: After **= : 0
// Comparison Operators
let num1 = 10;
let num2 = 5;
let isEqual = num1 === num2; // Strict equality (checks value and type)
let isNotEqual = num1 !== num2; // Strict inequality (checks value and type)
let isGreater = num1 > num2; // Greater than
let isLess = num1 < num2; // Less than
let isGreaterOrEqual = num1 >= num2; // Greater than or equal to
let isLessOrEqual = num1 <= num2; // Less than or equal to
console.log("Is Equal:", isEqual); // Output: Is Equal: false
console.log("Is Not Equal:", isNotEqual); // Output: Is Not Equal: true
console.log("Is Greater:", isGreater); // Output: Is Greater: true
console.log("Is Less:", isLess); // Output: Is Less: false
console.log("Is Greater or Equal:", isGreaterOrEqual); // Output: Is Greater or Equal: true
console.log("Is Less or Equal:", isLessOrEqual); // Output: Is Less or Equal: false
// Logical Operators
let condition1 = true;
let condition2 = false;
let andCondition = condition1 && condition2; // Logical AND
let orCondition = condition1 || condition2; // Logical OR
let notCondition = !condition1; // Logical NOT
console.log("AND Condition:", andCondition); // Output: AND Condition: false
console.log("OR Condition:", orCondition); // Output: OR Condition: true
console.log("NOT Condition:", notCondition); // Output: NOT Condition: false
// Conditional Statements
let age = 18;
if (age >= 18) {
    console.log("You are an adult."); // Output: You are an adult.
}
else if (age >= 13) {
    console.log("You are a teenager."); // Output: You are a teenager.
} else {
    console.log("You are a child."); // Output: You are a child.
}
// Ternary Operator
let isAdult = (age >= 18) ? "You are an adult." : "You are not an adult.";
console.log(isAdult); // Output: You are an adult.
// Switch Statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // Output: Wednesday
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
// Alert and Prompt
let userName = prompt("Enter your name:"); // Prompt example
console.log("Hello, " + userName + "!"); // Output: Hello, [user's name]!Ahsan
// Alert example
alert("Welcome to the JavaScript tutorial!");



// Practice Question: get user to input a number using promt ('Enter a number:') and then check if the number is even or odd using conditional statements. Display the result using alert.

let number= prompt("Enter a number:");
if (number %5===0){
    alert("The number is multiple of 5");
}
else if(number %2 ===0){
    alert("The number is multiple of 2");
}
else{
    alert("BUzzzzzz");
}