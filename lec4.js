// now we learn about js data types and methods of strings , object and arrays in javascript
// String Methods
let str = "Hello, World!";
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.length); // Output: 13
console.log(str.indexOf("World")); // Output: 7
console.log(str.slice(0, 5)); // Output: Hello  
console.log(str.replace("World", "JavaScript")); // Output: Hello, JavaScript!
console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ]
// string interpolation
let name = "Alice";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is Alice and I am 25 years old.
// Object Methods
let obj = { name: "Alice", age: 25, city: "New York" };
console.log(Object.keys(obj)); // Output: [ 'name', 'age', 'city'
console.log(Object.values(obj)); // Output: [ 'Alice', 25, 'New York' ]
console.log(Object.entries(obj)); // Output: [ [ 'name', 'Alice' ], [ 'age', 25 ], [ 'city', 'New York' ] ]
console.log(JSON.stringify(obj)); // Output: {"name":"Alice","age":25,"city":"New York"}
console.log(JSON.parse('{"name":"Bob","age":30,"city":"Los Angeles"}')); // Output: { name: 'Bob', age: 30, city: 'Los Angeles' }
// Array Methods    
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // Output: 5
console.log(arr.push(6)); // Output: 6 (new length of the array)
console.log(arr.pop()); // Output: 6 (removes the last element)
console.log(arr.shift()); // Output: 1 (removes the first element)
console.log(arr.unshift(0)); // Output: 5 (new length of the array) 
console.log(arr.slice(1, 3)); // Output: [ 2, 3 ] (extracts elements from index 1 to 2)
console.log(arr.splice(2, 1)); // Output: [ 3 ] (removes 1 element at index 2)
console.log(arr); // Output: [ 0, 2, 4, 5 ]
console.log(arr.includes(4)); // Output: true (checks if 4 is in the array)
console.log(arr.indexOf(2)); // Output: 1 (finds the index of 2)
console.log(arr.join(", ")); // Output: 0, 2, 4, 5 (joins array elements into a string)
// Practice Question: Create an object representing a book with properties like title, author, and year
let book = {
    title: "To Kill a Mockingbird",
    auther: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    isAvailable: true,
    getDetails: function() {
        return `${this.title} by ${this.auther}, published in ${this.year}. Genre: ${this.genre}. Available: ${this.isAvailable}`;
    }
};
console.log(book.getDetails()); // Output: To Kill a Mockingbird by Harper Lee,
// different types of printing methods in javascript
console.log("Hello, World!"); // Output: Hello, World!
console.warn("This is a warning message!"); // Output: This is a warning message!
console.error("This is an error message!"); // Output: This is an error message!
console.info("This is an informational message!"); // Output: This is an informational message!
console.debug("This is a debug message!"); // Output: This is a debug message!
