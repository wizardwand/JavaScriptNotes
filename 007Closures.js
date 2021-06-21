/**
 Uses Of Closures:
 - Module Design Pattern
 - Currying
 - Functions like once
 - memoize
 - maintaining state in async world
 - setTimeouts
 - Iterators
 - and many more 
 */

//***************
//  ? 
//  
// function a() {
//   var num1 = 10;
//   function b() {
//     console.log(num1);
//     function c() {
//       console.log(num1);
//     }
//     c();
//   }
//   b();
// }
// a();
//***************

//***************
// want is closure  ? 
//  
// function a() {
//   var num1 = 24;
//   function b() {
//     console.log(num1);
//   }
//   return b;
// }
// var z = a();
// console.log(z);
// z();
//***************

function x() {
  var a = 7;
  return function y() {
    var b = 10; 
    console.log(a);
    return function z() {
      console.log(a,b);
    }
  }
}
x()();
x()()();

// function a() {
//   var num1 = 24;
//   return function b() {
//     console.log(num1);
//   }
// }
// var z = a();
// console.log(z);
// z();

//***************
// Interview questions  ? 
//  
//***************

// q 1 
// function a() {
//   var num1 = 24;
//   function b() {
//     console.log(num1);
//   }
//   num1 = 1990;
//   return b;
// }
// var z = a();
// console.log(z);
// z();

// q2 
// Problem will print hi 6 , 5 times 
function callTimeOut() {
  for (var i = 1; i < 6; i++) {
    setTimeout(() => {
      console.log("Hi " + i);
    }, 5000);
  }
}

// solution 1 => use let as it is blocked scope 
// function callTimeOut() {
//   for (let i = 1; i < 6; i++) {
//     setTimeout(() => {
//       console.log("Hi "+i);
//     }, 5000);
//   }
// }

function callTimeOut() {
  for (var i = 1; i < 6; i++) {
    function close(i) {
      setTimeout(() => {
        console.log("Hi " + i);
      }, i * 1000);
    }
    close(i);
  }
}
callTimeOut();

function z() {
  for (var i = 0; i < 10; i++) {
    function setI(a) {
      setTimeout(() => {
        console.log("hi "+a);
      }, a * 1000);
    }
    setI(i);
  }
}
z();