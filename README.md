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
  - `typeof` operator  
    `console.log(typeof true);` => boolean
- Associativity of operators
  - assignment operator: right-to-left  
    `x = y = 3;`
  - exponentiation: right-to-left  
    `x = 2**2**3;`
