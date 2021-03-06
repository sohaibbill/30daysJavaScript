/**
 * Conditions can be implementing using the following ways:
if
if else
if else if else
switch
ternary operator
 */
let a = 10,
    b = 20,
    isCloudy = true;

    if (a > 0){
        console.log(`${a} : is a postive number`);
    }

    if (a == b) {
    console.log("hello");
    } else if (a != b){
        console.log(Math.floor(b+2));
    }

    if(isCloudy){
        console.log("you shuold whear a a jacket");
    }

    switch  (a){
        case 10:
            console.log("thats true")
            break
        case 20:
            console.log("cool")
            break
        default:
            console.log("thats not cool")
    }


    isCloudy ? console.log("rain a coat ") : console.log("never mind..");
