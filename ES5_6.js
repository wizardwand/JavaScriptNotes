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

const ages = [19, 22, 25, 28, 31, 1, 4, 7, 10, 13, 16, 1];

// forEach

// Print all the companies 
// for (let i = 0; i < companies.length; i++) {
//   const element = companies[i];
//   console.log(element);
// }


// companies.forEach(company => {
//   // console.log(company);
//   console.log(company.name);
//   // print Auto company
//   if (company.category === 'Auto') {
//     console.log(company);
//   }
// });

// filter

// Print companies with Category Auto

// for (let i = 0; i < companies.length; i++) {
//   if('Auto' === companies[i].category){
//     console.log(companies[i]);
//   };
// }

// const autoCompanies = companies.filter(function (company){
//   if (company.category === 'Auto') {
//     return true;
//   }
// });
// console.log(autoCompanies);

// const nintiescompanies = companies.filter((company) =>{
//   if(company.start >= 1990 && company.start < 2000){
//     return true;
//   }
// });
// console.log(nintiescompanies);

// map
// Create new Array from Existing Array based on fields that we want 

// Create an Array of Company names 
// traditional Approach 
// let retailComapnies = [];
// for (let i = 0; i < companies.length; i++) {
//   const company = companies[i];
//     retailComapnies.push(company.name);
// }
// console.log(retailComapnies);

// const arrayOfCompanyNames = companies.map(function (company) {
//     return `${company.name} ${company.category}`;
// });
// console.log(arrayOfCompanyNames);


// const arrayOfCompanyNames = companies.map(company => `${company.name} ${company.category}`);
// console.log(arrayOfCompanyNames);

// square root all ages
// const ageSquareRoot = ages.map((age) => {
//   return Math.sqrt(age);
// })
const ageSquareRoot = ages.map(age => Math.sqrt(age));
// console.log(ageSquareRoot);

const ageTimesTwo = ages.map(age => age * 2);
// console.log(ageTimesTwo);

// times ten and Square root
const timesTenAndSquareRoot = ages
  .map(age => age * 10)
  .map(age => Math.sqrt(age));
// console.log(timesTenAndSquareRoot);


// sort
// Sorted companies with start 

// companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

//THis is print sort before and after... why ????
// console.log(companies);
companies.sort((a, b) => a.start - b.start).toString;
// console.log(companies);

// sort Ages 
const sortedAges = ages.sort((a, b) => a - b);
// console.log(sortedAges);


// reduce

// Add all The ages in the ages array

//// Traditional
// let totalAge = 0;
// for (let i = 0; i < ages.length; i++) {
//   const age = ages[i];
//   totalAge += age;
// }
// console.log(totalAge);

//// ES5
// const totalAge = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);
// console.log(totalAge);

//// ES6 
const totalAge = ages.reduce((total, age) => total + age, 0);
console.log(totalAge);