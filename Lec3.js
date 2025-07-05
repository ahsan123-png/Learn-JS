// in this lecture we are going to learn all kind of loops in javascript, like for loop, while loop, do while loop, for of loop, for in loop and break and continue statements with examples and details

// For Loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration:", i); // Output: For Loop Iteration: 0, 1, 2, 3, 4
}
// While Loop
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration:", j); // Output: While Loop Iteration: 0, 1, 2, 3, 4
    j++;
}
// Do While Loop
let k = 0;
do {
    console.log("Do While Loop Iteration:", k); // Output: Do While Loop Iteration: 0, 1, 2, 3, 4
    k++;
} while (k < 5);
// For...of Loop
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log("For...of Loop Fruit:", fruit); // Output: For...of Loop Fruit: apple, banana, cherry
}
// For...in Loop
const person = { name: "Alice", age: 25, city: "New York" };
for (const key in person) {
    console.log("For...in Loop Key:", key, "Value:", person[key]); // Output: For...in Loop Key: name Value: Alice, Key: age Value: 25, Key: city Value: New York
}
// Break Statement
for (let l = 0; l < 10; l++) {
    if (l === 5) {
        console.log("Breaking at:", l); // Output: Breaking at: 5
        break; // Exits the loop when l is 5
    }
    console.log("Loop Iteration:", l);
}
// Continue Statement
for (let m = 0; m < 10; m++) {
    if (m % 2 === 0) {
        console.log("Skipping even number:", m); // Output: Skipping even number: 0, 2, 4, 6, 8
        continue; // Skips the rest of the loop body for even numbers
    }
    console.log("Odd number:", m); // Output: Odd number: 1, 3, 5, 7, 9
}
// Practice Question: Create a loop that prints numbers from 1 to 10, but skips even numbers and stops when it reaches 7.

for (let i=0; i <= 7; i++){
    if (i%2===0){
        continue
    }
    else {
        console.log(i); // Output: 1, 3, 5
    }
}