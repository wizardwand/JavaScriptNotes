// What is a difference with ? 
// Function Statement vs 
// Function Expression vs 
// Function Declaration ?

// Major difference is hoisting for F statement and F Expression

a();
// b(); //

// Function Statement && Function Declaration 
function a(param1) {
  console.log("a called!");
  if (param1) {
    param1()
  }
}

// Function Expression
var b = function () {
  console.log("b called!");
}

// anonymous function 
a(
  // Difference between Parameters and Arguments ? 
  // this is argument
  function () {
    console.log("I am anonymous Function");
  }
)

// Named Function Expression
var c = function xyz() {
  console.log("xyz called!");
};
// xyz();//xyz is not defined
c();

// Functions are first class citizens or  First Class Function  both are same 
// ====> ability to use functions as values is First Class Function 
// ====> passing anonymous function, passing function as parameter to function , return 

// Arrow Functions
let hi = () => {
  console.log("hi");
}
hi()
