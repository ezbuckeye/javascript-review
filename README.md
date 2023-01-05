# JavaScript Review

This repo contains my study notes and learning projects contained in the course [The Complete JavaScript Course 2023: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/).

## JavaScript Notes

### JavaScript Fundamentals

- Data types(dynamic typing)
  - Object
  - Primitive
    - Number (floating point numbers)
    - String
    - Boolean
    - Undefined  
      `let children;`
    - Null
    - Symbol (ES2015): Value that is unique and cannot be changed
    - BigInt (ES2020): Larger integers than the Number type can hold
- let, const and var
  - modern
    - `let` => variables
    - `const` => constants => cannot be empty
    - _use const first, change it to be let only when we have to change its value_
  - `var` (behaves like let)
- Basic Operators
  - Math Operators
    - `x++;` / `--x;` works in JS
    - `2**3`: 2 to the power of 3
    - `+` could be used to concatenate strings
  - Comparison Operators
  - Other Operators
    - `typeof` operator  
      `console.log(typeof true);` => boolean
- Associativity of operators
  - assignment operator: right-to-left  
    `x = y = 3;`
  - exponentiation: right-to-left  
    `x = 2**2**3;`
- Strings and Template literals(ES6)
  - use template literals to add variable into the string
    ```
    `I'm ${firstName},  a ${year-birthYear} year old ${job}!`;
    ```
  - use template literals to create multiple line string
    ```
    `Hello
    World`
    ```
- if/else Statements

  ```
  if(){

  }else if{

  }else{

  }
  ```

- Type Conversion and Coercion
  - type conversion
    - convert string to number  
      `Number('1999')`
      - if the parameter is invalid, e.g., 'Edison', the return value would be NaN (typeof => number)
    - convert number to string  
      `String(23)`
  - type coercion
    - number to string  
      `console.log("I am " + 23 + " year old");`
    - string to number  
      `console.log("23" - "10" * 3); // -7 (number)`
- Truthy and Falsy Values  
  5 FALSY VALUE
  - 0
  - NaN
  - ''
  - undefined
  - null
- Equality Operators
  - equality operator
    - strict equality operator (doesn't do type coercion)  
      `console.log(18 === '18'); // false`
    - loose equality operator (does type coercion)  
      `console.log(18 == '18'); // true`
  - unequality operator
    - `console.log(23 !== '23'); // true (strict)`
    - `console.log(23 != '23'); // false (loose)`
  - use `===` as much as possible, since the other might introduce some weird bugs
- Logical Operators
  - `&&`
  - `||`
  - `!`
- Switch Statement
  ```
  switch(day){
    case 'monday':
    case 'tuesday':
    case 'thursday':
    case 'friday':
      console.log("study");
      console.log("work out");
    case 'wednesday':
      console.log("study");
    case 'saturday':
    case 'sunday':
      console.log("play basketball");
      console.log("swim");
      console.log("hangout");
    default:
      console.log("not a valid day");
  }
  ```
- The Conditional(Ternary) Operator
  - perform as action(statement)  
     `age >= 18 ? console.log("I like to drink wine ") : console.log("I like to drink water");`
  - produce a value(expression)  
    const drink = age >= 18 ? "wine" : "water";
- Activating Strict Mode  
   `use strict; // first line of the file`

  - forbid us to do certain things
  - provide error messages

        ```
        //e.g.
        let hasDriversLicense = false;
        if (passTest) hasDriversLicense = true;
        if (hasDriversLicense) console.log("I can drive :D");

        const interface = "Audio";
        const private = 534;
        ```

- Functions

  - Function Declarations

    - basics
      ```
      function logger() {
        console.log("My name is Jonas");
      }
      logger();
      ```
    - with parameters and return value

      ```
      function fruitProcessor(apples, oranges) {
        const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
        return juice;
      }

      const appleJuice = fruitProcessor(5, 0);
      ```

  - Function Expressions
    ```
    const logger = function() {
      console.log("My name is Jonas");
    }
    logger();
    ```
    - we could call function declarations before its definition but not function expressions
  - Arrow Functions(ES6)

    - one-liner  
      `const calcAge3 = (birthYear) => 2037 - birthYear;`
    - multiple lines(needs to write `return` explicitly)

      ```
      const yearsUntilRetirement = (birthYear, firstName) => {
        const age = 2037 - birthYear;
        const retirement = 65 - age;
        return `${firstName} retires in ${retirement} years`;
      };

      console.log(yearsUntilRetirement(1991, 'Jonas'));
      ```

    - don't have a `this` keyword

- Arrays

  - Syntax
    - literal syntax  
      `const friends = ["Michael", "Steven", "Peter"]; // literal syntax`
    - new keyword  
      `const years = new Array(1991, 1984, 2008, 2020);`
    - examples
      - `console.log(friends[0]); // index && 0-based`
      - `console.log(friends.length); // length property`
      - `friends[2] = "Jay"; // array is mutatable`
      - `const edison = [firstName, "zhang", 2037 - 1999, friends]; // could contain expressions of different types`
  - Array Operations

    - add elements (return the length of new array)

      - **push**

        ```
        const friends = ["Michael", "Steven", "Peter"];
        const newLength = friends.push("Jay");
        ```

      - **unshift**

        ```
        friends.unshift("John");
        ```

    - remove elements (return the popped element)

      - **pop**

        ```
        const popped = friends.pop();
        ```

      - **shift**
        ```
        friends.shift();
        ```

    - **indexOf** (strict equality check)
      1. if exists => return the index(0-based)
      2. otherwise => -1
    - **includes** (strict equality check)
      1. if exists => return true
      2. otherwise => false
