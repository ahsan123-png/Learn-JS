// we are going to know what is promise in javascript and how to use it. and what is fetch api in javascript.
// Fetch API is a modern way to make HTTP requests in JavaScript, replacing the older XMLHttpRequest.
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// A Promise can be in one of three states: pending, fulfilled, or rejected.
// The Fetch API returns a Promise that resolves to the Response object representing the response to the request.
// The Fetch API is used to make network requests similar to XMLHttpRequest (XHR).
// The Fetch API is built into modern browsers and provides a more powerful and flexible feature set than XHR.
// The Fetch API is promise-based, meaning it returns a Promise that resolves to the Response object.

const url ="https://datausa.io/api/data?drilldowns=Nation&measures=Population";
let promise = fetch(url);
console.log(promise);

// we use asynchronous function to handle the promise returned by fetch.
// we also know about await how it works with promises. and whats the purpose of await in asynchronous functions.
// The await keyword can only be used inside an async function, and it pauses the execution of the function until the Promise is resolved or rejected.
const getData = async () => {
    console.log("Fetching data...");
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let data = await response.json();
        // console.log(data.data[2]["ID Nation"]);   // when we want to access a specific property in the data object
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
getData();