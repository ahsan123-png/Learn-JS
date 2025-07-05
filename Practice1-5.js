
// Check the eligibility for voting based on age and CNIC status
// ==================================================
// function checkEligibility(age, hasCnic) {
//     if(age>= 18 && hasCnic){
//         console.log("You are eligible to vote.");
//     }
//     else if (age< 18){
//         console.log("You are not eligible to vote because you are under 18.");
//     }
//     else if (age>= 18 && !hasCnic) {
//         console.log("You are not eligible to vote because you do not have a CNIC.");
//     }
//     else {
//         console.log("You are not eligible to vote.");
//     }
    
// }
// let age = prompt("Enter your age:");
// let hasCnic = confirm("Do you have a CNIC?");
// checkEligibility(parseInt(age), hasCnic);

// ======================================
// function customFizzBuzz(n){
//     for(let i=1; i<=n; i++) {
//         if (i%3 ===0) {
//             console.log("Fizz");
//         }
//         else if (i % 5 === 0) {
//             console.log("Buzz");
//         }
//         else if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }

// number= prompt("Enter a number for FizzBuzz:");
// customFizzBuzz(parseInt(number));
// ======================================
// Write a function calculateTotal(cart) where cart is an array of prices.
// Return the total cost after applying:
function calculateTotal(cart) {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i];
        console.log(`Running total: ${total}`);
    }

    if (total > 1000) {
        let discount = total * 0.10; // 10% discount
        total += discount;
        console.log(`Your Total is ${total} after applying a 10% $${discount} tax.`);
    } else {
        let discount = total * 0.05; // 5% discount
        total += discount;
        console.log(`Your Total is ${total} after applying a 5% $(${discount}) tax.`);
    }
}

const cart = [200, 300, 150, 400];
calculateTotal(cart);