// Now here we are going to lear about complete events lister and event handler
// in JavaScript. We will learn how to create event listeners and handle events in a web page.  
// We will also learn about different types of events and how to use them effectively in our web applications.
// We will cover the following topics:
// 1. What are events in JavaScript?
// 2. How to create event listeners?
// 3. How to handle events in JavaScript?
// 4. Different types of events in JavaScript
// 5. Best practices for using events in JavaScript
// 6. Examples of using events in JavaScript
// 7. Common pitfalls and how to avoid them
// 8. Conclusion and next steps
// 9. References and further reading
// 10. Q&A session
// Event Listener= The mechanism that listens for an event (e.g. addEventListener)
// Event Handler= The function that is executed when the event occurs (e.g. onclick, onmouseover)
// Example of adding an event handler to a button



let btn1=document.querySelector("#click-event");
btn1.onclick = function() {
    alert("Button clicked!");
};

// Example of adding an event listener to a button
// let btn2= document.getElementById("dbclick-event");btn2.addEventListener("dblclick", () => {
//   alert("Button double-clicked!");
// });



// Example of adding an event listener to a button with parameters
// the browser automatically passes an Event object to your handler function when the specified event occurs

// let btn3 = document.querySelector("#hover-event");
// btn3.addEventListener("mouseover", function(event) {
//     alert("Button hovered over!");
//     console.log("Event type: " + event.type);
//     console.log("Event target: " + event.target);
// });



// Example of focus-event an event listener
// let inputField = document.querySelector("#focus-event");
// inputField.addEventListener("focus", function(event) {
//     alert("Input field focused!");
//     console.log("Event type: " + event.type);
//     console.log("Event target: " + event.target);
// });

// Example of blur-event an event listener


// ============= Practice Exercise =============
// Create a button that changes the background color of the page when clicked
let currentColor = "white";
let modeBtn = document.querySelector("#mode-event");
modeBtn.addEventListener("click",function() {
    if (currentColor === "white") {
        console.log("Changing background color to black");
        document.body.style.backgroundColor = "#333";
        currentColor = "black";
    } else {
        console.log("Changing background color to white");
        document.body.style.backgroundColor = "white";
        currentColor = "white";
        }
})