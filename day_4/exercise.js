// EX 1 
/**
 * Get user input using prompt(“Enter your age:”). If user is 18 or older , 
 * give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
 */

user = window.prompt("enter your age:");
console.log(user);
if (user > 18 ) {
    console.log('You are old enough to drive');
} else {
    console.log(`wait for ${ 18 -  user} years to turn 18`);
}


let Myage = 28,
    yourAge = window.prompt("enter your age");

    if (Myage < yourAge) {
        console.log(`You are ${yourAge - Myage} years older than me`);
    } else {
        console.log(`i'm ${Myage - yourAge } years older than you`);
    }

    let a = 4
    let b = 3

    if (a > b){
        console.log("a greater than b");
    }
    else {
        console.log("b greater than a");
    }

    a > b ? console.log("a greater than b") : console.log("b greater than a");

    let grade = 90;

    switch (true){
        case grade > 80: 
            console.log("A")
            break
            case grade > 70: 
            console.log("b")
            break
            case grade > 60: 
            console.log("C")
            break
            case grade > 50: 
            console.log("D")
            break
            default:
            console.log("F")
    }

    