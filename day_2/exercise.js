// hola هلو 
let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0,2));
console.log(challenge.substr(3,18));
console.log(challenge.includes('Script '));
console.log(challenge.split(""));
console.log(challenge.split(" "));
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(company.split(","));
console.log(challenge.replace("JavaScript","Python "));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf(30));
console.log(challenge.lastIndexOf("JavaScript"));
let b = 'You cannot end a sentence with because because because is a conjunction';
console.log(b.indexOf("because"));
console.log(b.lastIndexOf("because"));
console.log(b.search("because"));
console.log(challenge.trim(" "));
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript "));
console.log(challenge.match("a"));
let sinString = "";
console.log(sinString.concat( '30 Days of',"javascript"));
console.log(challenge.repeat(2));
console.log("There is no exercise better for the heart than reaching down and lifting people up.");
console.log(typeof parseInt('10') == typeof 10);
console.log(Math.round(parseFloat("9.8")) == 10 );
let p = "Python",
    j = "jargon",
    jargon = "I hope this course is not full of jargon";
console.log(p.match("on"),j.match('on'));
console.log(jargon.includes("jargon"));

let ranNum100 = Math.floor(Math.random() * 101);
let ranNum250 = Math.floor(Math.random() * 251);
let ranNumbt50n100 = Math.floor(Math.random() * 51) + 50;
console.log(ranNum100,ranNumbt50n100,ranNum250); 

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n");
