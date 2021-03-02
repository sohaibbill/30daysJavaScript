//Undefined
//not defined, because it is not assigned to a value yet
let myName;
console.log(myName);


//null 
// -> null , means no value
let empty = null;
console.log(empty);


//Operators

//Assignment operators
let nameywa = "sohaib";
let country = "jordan";

console.log(nameywa,country);

/**
 * Assignment Operators
 *  = 
 * +=
 * -=
 * *=
 * /=
 * %=
 * **=
 */

/**
  * Arithmetic Operators
Arithmetic operators are mathematical operators.
Addition(+): a + b
Subtraction(-): a - b
Multiplication(*): a * b
Division(/): a / b
Modulus(%): a % b
Exponential(**): a ** b
*/

let numOne = 10,
    numTwo = 20;

let sum = numOne + numTwo;
let diff = numOne - numTwo;
let multip = numOne * numTwo;
let div = numOne / numTwo;
let reminder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum,diff,multip,div,reminder,powerOf);



console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false 

/**
 * Logical Operators
The following symbols are the common logical operators: &&(ampersand) ,
||(pipe) and !(negation). The && operator gets true only if the two operands are true.
The || operator gets true either of the operand is true.
The ! operator negates true to false and false to true.
 */


 // && ampersand operator example

const and1 = 4 > 3 && 10 > 5         // true && true -> true
const and2 = 4 > 3 && 10 < 5         // true && false -> false
const and3 = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check1 = 4 > 3 || 10 > 5         // true  || true -> true
const check2 = 4 > 3 || 10 < 5         // true  || false -> true
const check3 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let checks = 4 > 3                     // true
let checkss = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarrieds = !false                // true

//Increment Operator
let count = 0;
console.log(count++);
console.log(count);
count = 0;
console.log(++count);
console.log(count);

//Decrement Operator
count = 0;
console.log(count--);
console.log(count);
count = 0;
console.log(--count);
console.log(count);


/**
 * Ternary Operators
Ternary operator allows to write a condition.
Another way to write conditionals is using ternary operators. Look at the following examples:
 */

 let hasMoney =true;
 hasMoney ? console.log("buy a car") : console.log("please don't");
 hasMoney ? console.log("give me please") : console.log("pleeeeeeease give me");

 let num = 10;
 num > 0 ? console.log(`${num} is postive number`) : console.log(`${num} is negtive number`)