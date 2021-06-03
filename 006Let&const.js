// Are let & const declarations hoisted? 
// Temporal Dead Zone?
// What is difference between SyntaxError vs ReferenceError vs TypeError? 

//***************
// ReferenceError -> if no variable present then we get it 
// ReferenceError -> if variable with **let** or **const** is being accessed before initial  
// SyntaxError -> if let is being reInitilized in block, if const is not initialized
// TypeError ->  if const is being reInitilized 
//***************


// Are let & const declarations hoisted? 
// Yes , they are different then var , they are in temporal dead zone 

// console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization 
                   //  -> as a is let it has separate Memory space , hence it will give
                   // ref error 
// console.log(b); // undefined --> as b is var it is sent to GLOBAL scope and hoisted 
// console.log(z);

/**

console.log(b);
 console.log(a);
 let a = 10;
 var b = 100;

 */

// SyntaxError // Uncaught SyntaxError: Identifier 'a' has already been declared

/**

 let a = 10; 
 let a = 1000; 
 
 */

// Const SytaxError //Uncaught SyntaxError: Missing initializer in const declaration
/**
 
 const a ;
 a = 1000 ;
 
 */

 // const TypeError // 006Let&const.js:41 Uncaught TypeError: Assignment to constant variable
 /**
  const b = 10; 
  b = 100; 
  */

//***************
// What is a block in JS ? 
// a block used to combine multiple statements 
//***************

{} //<-- this is a block 
if(true)true;
if(true)console.log("one statement");
if(true){};
/**
{
    var a =10;
    let b =20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
 */

//***************
// What is Shadowing in JS ? 
// this happens with var variables, local modification will effect the GLOBAL value
//***************
/**
var a =10000;
{
    var a =10;
    let b =20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
*/

//***************
// shawdowing in let and Const
//***************
/**
let b =10000;
{
    var a =10;
    let b =20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);
const c =10000;
{
    var a =10;
    let b =20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(c);
 */

//***************
// legal showdowing
//***************
let a = 20;
{
    let a = 2000;
}
//***************
// legal showdowing
//***************
const b = 20;
{
    const b = 2000;
}
//***************
// illegal showdowing
//***************
/*
let a = 20;
{
    var a = 2000;
}
*/
let functionScope = 20 ; 
function x(){
    var functionScope = 200;
}
