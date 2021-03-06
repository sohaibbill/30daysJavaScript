/**
 * Date Object
Time is an important thing. We like to know the time a certain activity or event.
In JavaScript current time and date is created using JavaScript Date Object.
The object we create using Date object provides many methods to work with date and time.
The methods we use to get date and time information 
from a date object values are started with a word get because it provide the information.
getFullYear(), getMonths(), getDate(), getDay(), getHours(), getMinutes, getSeconds(),
getMilliseconds(), getTime(), getDay()
 */

 const now = new Date();
 console.log(now);
 console.log(now.getFullYear());
 console.log(now.getMonth());
 console.log(now.getDay());
 console.log(now.getHours());
 console.log(now.getMinutes());
 console.log(now.getSeconds());
 console.log(now.getMilliseconds());
 console.log(now.getDay());
 console.log(now.getTime());

 //more human readable
 console.log(`${now.getFullYear()}/${now.getMonth()+1}/${now.getDay()}\n${now.getHours()}:${now.getMinutes()}`);
