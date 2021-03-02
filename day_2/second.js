let word = "javascript";
/** primitive data types are compare by its value 
 * here some examples
 */

 let num1 = 50,
     num2 = 50;

let pl1 = "php",
    pl2 = "javascript";

let isMarried = false,
    isWorking = true;

    console.log(num1 == num2);
    console.log(pl1 == pl2);
    console.log(isMarried ==isWorking);

/** NON-primitive data types are can modified 
 * here some examples
 */

 let ages = [10,20,15,23];
console.log("before modified",ages);
 ages[1] = 25;
 console.log("after modified",ages);


 // nom-primitive data types connot compared even if they has the same value

 let marks1 = [10,20,30];
 let marks2 = [10,20,30];
 console.log(marks1 == marks2);


 student1 = {
     name:"sohaib bilal",
     country:"jordan",
     age:20
 };

 student2 = {
    name:"sohaib bilal",
    country:"jordan",
    age:20
};

console.log(student1 == student2);

//two objects or arrays can be the same value if they refer to same underlying object or array

let arr = [20,30,30];
let arr2 = arr;
console.log(arr == arr2);

let student = {name:"sohaib",age:20};
let studentDub = student;
console.log(student == studentDub);

