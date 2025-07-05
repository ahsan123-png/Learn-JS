// Now we are learning Cmplete DOM in JavaScript. all the methods and properties of DOM in javascript  
// and how to use them in javascript
// DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing programming languages to manipulate the content, structure, and style of web pages. In JavaScript, the DOM can be accessed and modified using various methods and properties.
// The DOM provides a way to interact with HTML and XML documents, enabling developers to create dynamic and interactive web applications. Here are some key concepts and methods related to the DOM in JavaScript:
// 1. **Accessing Elements**: You can access elements in the DOM using methods like `getElementById`, `getElementsByClassName`, `getElementsByTagName`, and `querySelector`.
// ```javascript    
// // Accessing an element by ID
// let element = document.getElementById("myElement");
// // Accessing elements by class name
// let elements = document.getElementsByClassName("myClass");
// // Accessing elements by tag name
// let paragraphs = document.getElementsByTagName("p");
// // Using querySelector to select the first matching element
// let firstDiv = document.querySelector("div");
// // Using querySelectorAll to select all matching elements
// let allDivs = document.querySelectorAll("div");
// ```
// 2. **Creating Elements**: You can create new elements using `createElement` and append them to the DOM using methods like `appendChild`, `insertBefore`, or `replaceChild`.
// ```javascript
// // Creating a new paragraph element
// let newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new paragraph.";
// // Appending the new paragraph to the body
// document.body.appendChild(newParagraph);
// // Inserting the new paragraph before an existing element
// let existingElement = document.getElementById("existingElement");
// document.body.insertBefore(newParagraph, existingElement);
// // Replacing an existing element with the new paragraph
// let oldElement = document.getElementById("oldElement");

// document.body.replaceChild(newParagraph, oldElement);
// ```==================================================================
// Learn DOM manuplations
// Selecting with Id when we select an element with id we can use getElementById method
// This method returns the first element with the specified id.

let myElement = document.getElementById("myElement");

// selecting with class name when we select an element with class name we can use getElementsByClassName method
// This method returns a live HTMLCollection of elements with the specified class name.

let myElements = document.getElementsByClassName("myClass");

// Query selector is a powerful method that allows you to select elements using CSS selectors. It returns the first element that matches the specified selector.
let firstElement = document.querySelector(".myClass");

// now with some real time examples
// use . for class and # for id
const mainHeading = document.querySelector('.heading');
mainHeading.textContent = "JavaScript DOM Manipulation";
mainHeading.style.color = "crimson";
mainHeading.style.fontSize = "2.5rem";
// look at in html how we update value with DOM 
const subHeading = document.getElementById('low-heading');
subHeading.textContent = "Mastering HTML with JS";
subHeading.style.textDecoration = "underline";
subHeading.style.color = "teal";

const paragraph = document.querySelector('p');
paragraph.textContent = "DOM lets us dynamically update content!";
paragraph.style.backgroundColor = "#f0f0f0";
paragraph.style.padding = "10px";

