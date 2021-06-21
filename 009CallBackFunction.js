// // Blocking the main thread
// setTimeout(() => {
//   console.log("timer called!" + new Date());
// }, 5000);

// // What is a callback function in JavaScript 
// function x(y) {
//   console.log("x called!" + new Date());
//   y();
// }

// x(function y() {
//   console.log("y called!" + new Date());
// });

// JavaScript is a synchronous and single-threaded language

// Power of Callbacks? 

// Deep about Event listerners 
// document.getElementById("clickMe")
//   .addEventListener("click", function xyz() {
//     console.log("Button Clicked!");
//   });

// Closures Demo with Event Listeners
 
document.getElementById("clickMe")
  .addEventListener("click", function xyz() {
    console.log("Button Clicked!", ++count);
  });
//  Scope Demo with Event Listerners 

//  Garbage Collection & removeEventListeners 
