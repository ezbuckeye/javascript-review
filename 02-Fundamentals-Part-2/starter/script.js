"use strict";
/*********
strict mode

const passTest = true;
let hasDriversLicense = false;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

const interface = "Audio";
const private = 534;
*/

/*********
 Functions
 
function logger() {
  console.log("My name is Jonas");
}
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/

/*********
Function Expression vs Function Declaration

// Function Declaration
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(age1);

// Functino Expression
// const age2 = calcAge2(1991); // cannot be run
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);
 */

/*********
// Arrow function (one-liner function)
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

/*********
 * Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*********
Function Reviews

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

/*********
Array

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"]; // literal syntax
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //property
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = "edison";
const edison = [firstName, "zhang", 2037 - 1999, friends];
console.log(edison);
console.log(edison.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const y = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(y[0]);
const age2 = calcAge(y[1]);
const age3 = calcAge(y[y.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(y[0]), calcAge(y[1]), calcAge(y[y.length - 1])];
console.log(ages);
*/

/*********
Array Operations

const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove Elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  ["Michael", "Peter", "Steven"],
];

const edison = {
  firstName: "Edison",
  lastName: "Zhang",
  age: 2037 - 1999,
  job: "Architect",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(edison);

// dot vs. bracket notation
console.log(edison.lastName);
console.log(edison["lastName"]);

const nameKey = "Name";
console.log(edison["first" + nameKey]);
console.log(edison["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about edison? Choose between firstName, lastName, age, job, and friends"
);

if (edison[interestedIn]) {
  console.log(edison[interestedIn]);
} else {
  console.log("Wrong request!");
}

edison.location = "Columbus";
edison["hometown"] = "Wenzhou";
console.log(edison);

// Challenge
// "Edison has 3 friends, and his best friend is called Michael"
console.log(
  `${edison.firstName} has ${edison.friends.length} friends, and his best friend is called ${edison.friends[0]}`
);
