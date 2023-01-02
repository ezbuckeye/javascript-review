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
