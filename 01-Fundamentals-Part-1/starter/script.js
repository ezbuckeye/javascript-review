/************************
Values and Variables
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "M";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/************************
Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/************************
Basic Operators

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";
console.log(job);

lastName = "Schmedtmann";
console.log(lastName);
*/

/************************
Operators

// Math operators
const now = 2037;
const ageEdison = now - 1999;
const ageMom = now - 1975;
const ageDad = now - 1971;
console.log(ageEdison, ageMom, ageDad);

console.log(ageEdison * 2, ageEdison / 10, 2 ** 3); // 2**3: 2 to the power of 3

const firstName = "Edison";
const lastName = "Zhang";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 => 25
x *= 4; // x = x * 4 => 100
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageMom > ageDad); // >, <. >=, <=
console.log(ageEdison >= 18);

const isFullAge = ageEdison >= 18;

console.log(now - 1999 > now - 2001);
*/

/************************
Operator Precedence

const now = 2037;
const ageEdison = now - 1999;
const ageMom = now - 1975;
const ageDad = now - 1971;

console.log(now - 1999 > now - 2001);

console.log(2 ** (25 - 10 - 5));

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);
console.log(2 ** (2 ** 3)); // 256

const averageAge = (ageMom + ageDad) / 2;
console.log(ageMom, ageDad, averageAge);
*/

/************************
Template Literals

const firstName = "Edison";
const job = "student";
const birthYear = 1999;
const year = 2037;

const edison =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(edison);

const edisonNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(edisonNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);
*/

/************************
IF/Else Statements

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1999;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/************************
Type Conversion and coercion
// type conversion
const inputYear = "1999";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Edison"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " year old");
console.log("23" - "10" * 3);

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);
*/

/************************
Truthy and Falsy Values

console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED");
}
*/

/************************
Equality Operators

const age = "18";
if (age === 18) console.log("You just became an adult(strict)");

if (age == 18) console.log("You just became an adult(loose)");

const favourite = Number(prompt("What's your favourite number?"));
// const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?");
*/

/************************
Logical Operators

const hasDriversLiscense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLiscense && hasGoodVision);

console.log(hasDriversLiscense || hasGoodVision);

console.log(!hasDriversLiscense);

// if (hasDriversLiscense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C

console.log(hasDriversLiscense && hasGoodVision && isTired);

if (hasDriversLiscense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

/************************
Swith Statement

const day = "frida";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}
*/

const age = 21;
// age >= 18
//   ? console.log("I like to drink wine ")
//   : console.log("I like to drink water");
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
