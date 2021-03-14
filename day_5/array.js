//arrays 

const fruts = ['banana','apple','orange','manga'];
const marks = [90,99,85,80,90,45];
const webTicks = ['javascript','php','sql','python','java','c#','c'];

const user = [
    'sohaib bilal',
    28,
    {
        work:"web dev",
        experince:3
    }
]

console.log(`my fav fruits is ${fruts}`);
console.log(user);


// Creating an array using split

let gameEngine = "unity";
let spilted = gameEngine.split('');
console.log(spilted);

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

let techCompany = companiesString.split(',');
console.log(techCompany);

console.log(fruts[0],fruts[2]);

let lastIndex = spilted.length - 1;
console.log(spilted[lastIndex]);


// Modifying array element

fruts[0] = "pineapple";
console.log("after been modified",fruts);

// Methods to manipulate array

// Array Constructor
const arr = Array(); // creates an empty array
console.log(arr);

const eightEmptyArray = Array(8);
console.log(eightEmptyArray);

// Creating static values with fill
const fourValues = Array(4).fill("x");
console.log(fourValues);

// Concatenating array using concat
const firstArray = [1,2,3,4];
const secondArray = [5,6,7,8,9];
const thirdArray = firstArray.concat(secondArray);
console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);


const men = ["ahmad","khaled","sohaib"];
const women = ["salam","nour","toleen"];
const togother = men.concat(women);
console.log(togother);


// Getting array length
console.log(men.length,women.length,togother.length);
console.log(men.indexOf("sohaib"));
console.log(women.indexOf('salam'));
if (women.indexOf("mai") == -1) {
    console.log("she is not here");
}

console.log(women.lastIndexOf("toleen"));


// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
console.log(women.includes("mai"));
console.log(women.includes("nour"));

// Array.isArray:To check if the data type is an array
let myName = "sohaib";
console.log(Array.isArray(women));
console.log(Array.isArray(myName));

// toString:Converts array to string
console.log(women.toString());

// Joining array elements
/**
 * join: It is used to join the elements of the array,
 *  the argument we passed in the join method will be joined in the array and return as a string. By default,
 *  it joins with a comma, but we can pass different string parameter which can be joined between the items.
 */
console.log(women.join(""));
console.log(women.join(" "));
console.log(women.join("   "));
console.log(women.join("+"));

/**
 * Slice: To cut out a multiple items in range.
 * It takes two parameters:starting and ending position. It doesn't include the ending position.
 */

console.log(women.slice(1,2));
console.log(women.slice());
console.log(women.slice(0,women.length));

const nums = [1,2,3,4,5,6];
nums.push(10);
women.pop();
men.push("osama");
nums.shift();
nums.unshift(50);
nums.reverse();
console.log(men);
console.log(nums);
console.log(women);
console.log(nums.splice(2,1));

//Push: adding item in the end. To add item to the end of an existing array we use the push method.
//Add an element from the beginning
// pop: Removing item in the end.
//shift: Removing one array element in the beginning of the array.
//reverse: reverse the order of an array.
/**
 * sort: arrange array elements in ascending order.
 * Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
 */
// after sorting we can reverse it
men.sort();
console.log(men);
men.reverse();
console.log(men);

/**
 * Array of arrays
   Array can store different data types including an array itself. Let us create an array of arrays
 */
const arrarOfArray = [firstArray,secondArray];
console.log(arrarOfArray[0]);
console.log(arrarOfArray[1]);

