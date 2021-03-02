let space = " ";
let firstName = "sohaib";
let lastName = "bilal";
let job = "web developer";
let country = "jordan";
let liveIn = "jordan";
let language = "arabic";
let city = "irbid";
let cityAge = 1000;

// string concatination
fullName = firstName + space + lastName;
console.log(fullName);

//Long Literal Strings  we use \ backslash as enter to make new line
//Escape Sequences in Strings

let paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";
console.log(paragraph);
console.log('hello from \'other world\''); // single qoutes
console.log('hello from \"other world\"');// double qoutes
console.log("day \t2 of coding"); // tab
console.log("not sure if this \n new line or.. never mind");
console.log('why we use \\ i don\'t know');

// template litreals
/**
 * To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string.
 * To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.
 */

console.log(`hello from ${fullName}`);
console.log(`hi this ${fullName} and \n my country is ${country}`);

//String Methods
// length method

console.log(fullName.length);
//find the third letter in full name
let thirdLetter = fullName[2];
console.log(thirdLetter); 
// last one
let lastLetter = fullName.length - 1;
console.log(fullName[lastLetter]);
//toUpperCase(): toLowerCase():
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
//substr(): It takes two arguments, the starting index and number of characters to slice.
console.log(fullName.substr(1,5));
//substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(fullName.substring(1,5));
//split(): The split method splits a string at a specified place.
console.log(paragraph.split(" "));
console.log(paragraph.split(","));
console.log(paragraph.split(""));

//trim
let trim = "    hola hola hola amigo  ";
console.log(trim);
console.log(trim.trim(' '));   //remove spaces at the beginning and the end of the string


/**
 * includes(): It takes a substring argument and it checks if substring argument exists in the string.
 *  includes() returns a boolean.
 *  If a substring exist in a string, it returns true, otherwise it returns false.
 */

 console.log(paragraph.includes('javascript'));// false cuz it's cas sensitve
 console.log(paragraph.includes('Python'));
 console.log(paragraph.includes('Py'));
 console.log(paragraph.includes('python')); // false cuz it's cas sensitve

//replace(): takes as a parameter the old substring and a new substring.
 let coun = "finland";
 console.log(coun);
 console.log(coun.replace('fin','new'));

 //charAt(): Takes index and it returns the value at that index
console.log(coun.charAt(2));

//charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
console.log(coun.charCodeAt());

console.log(coun.indexOf('finlan'));
console.log(paragraph.lastIndexOf('Python'));
let mine = "   hola ";
console.log(mine.concat(firstName,space,lastName).trim(" "));
console.log(mine.startsWith("   hola"));
console.log(mine.endsWith("a "));

/**
 * search: it takes a substring as an argument and it returns the index of the first match.
 * The search value can be a string or a regular expression pattern.
 */
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.';
console.log(string.search('Java'));

/**
 * match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like.
 * It starts with / sign and ends with / sign.
 */
console.log(string.match('Java'));
console.log(string.repeat(2));

console.log(typeof firstName);
console.log(typeof cityAge);


//String to Int
let a = "2050";
console.log(typeof parseInt(a));
console.log(typeof Number(a));
console.log(typeof +a);

//String to Float
console.log(typeof parseFloat(a));
console.log(typeof Number(a));
console.log(typeof +a);

let numm = 9.80;
console.log(typeof parseInt(numm),parseInt(numm));