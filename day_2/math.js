// math object in js 
//In JavaScript the Math Object provides a lots of methods to work with numbers.

let PI = Math.PI;
console.log(PI);


// Rounding to the closest number
// if above .5 up if less 0.5 down rounding
console.log(Math.round(PI));               // 3 to round values to the nearest number
console.log(Math.round(9.81));              // 10

console.log(Math.floor(PI)); // Round Down
console.log(Math.ceil(PI)); // Round Up

console.log(Math.min(10,20,30,-20)); // find min value
console.log(Math.max(10,20,30,-50,50)); // find max value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10
const randNum2 = Math.floor(Math.random() * 11);
console.log(randNum2);


//abs value
console.log(Math.abs(-50));
// power 
console.log(Math.pow(20,3));
console.log(Math.E);
//square root 
console.log(Math.sqrt(16));

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(20));

//Trigonometry
console.log(Math.cos(90));
console.log(Math.sin(60));


//Random Number Generator
//Now, let us see how we can use random() method to generate a random number between 0 and 10:
const numBetween0to20 = Math.floor(Math.random() * 21 );
console.log(numBetween0to20);