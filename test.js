const companies = [
  { name: "Company 2", category: "Retail", start: 1981, end: 2004 },
  { name: "Company 10", category: "Retail", start: 2010, end: 2028 },
  { name: "Company 3", category: "Auto", start: 1982, end: 2007 },
  { name: "Company 8", category: "Technology", start: 1987, end: 2022 },
  { name: "Company 7", category: "Auto", start: 1996, end: 2019 },
  { name: "Company 6", category: "Finance", start: 1985, end: 2016 },
  { name: "Company 1", category: "Finance", start: 1980, end: 2001 },
  { name: "Company 4", category: "Auto", start: 1983, end: 2010 },
  { name: "Company 9", category: "Finance", start: 1998, end: 2025 },
  { name: "Company 5", category: "Retail", start: 1994, end: 2013 },
];

console.log(companies);
companies.sort((a,b)=> a.start - b.start);
console.log(companies);


const arr = [9,8,6,3,5,4,2,7,0,1] ;
console.log(arr);
// arr.sort();
console.log(arr);

arr



console.log(arr);
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

arr.forEach((a,i)=>{
  console.log(i +"::"+a)
})

// const someAddSqureRootOfTimes100 = arr.reduce((a) => Math.round(Math.sqrt(a*100)),0);

// pure function 
function addPure(a, b) {
  return a + b;
}
console.log(addPure(5, 5));

// impure function
function addImpure(a, b) {
  return a + b + Math.random();
}
console.log(addImpure(5, 5));

function addFixed(a) {
  return function (b) {
    return a + b;
  }
}
console.log(addFixed(5)(5));

var addFive = addFixed(5);
var addTen = addFixed(10);
// console.log(addFive());

// Function composition
// The act or mechanism of combining simple function to build more complicated ones. 
function compose(f, g) {
  return function (x) {
    return f(g(x));
  }
}2

function trim(str) {
  return str.replace(/^s*|\s*$/g, '');
}

function capitalize(str) {
  return str.toUpperCase();
}

let convert = compose(trim, capitalize);
const convertedVal = convert("            ad  b  sadfasdf sdf      ");
console.log(convertedVal);
// Unary functions are easier to compose. Curring helps us to perform function compositions. 

// Functional programming manages complexity via compositions as opposed to day

// anonymous function
console.log(
  function () {
    return "hi"
  }
);