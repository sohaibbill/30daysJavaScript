let firstName = "Sohaib",
    lastName = "Bilal",
    country = "jordan",
    city = "irbid",
    age = 28,
    isMarried = false,
    year = 2021;
    let b =Boolean;
    console.log(typeof firstName, typeof lastName, typeof country, typeof city,typeof age, typeof isMarried, typeof year);

    console.log('10' == 10);
    console.log(parseInt(9.8) == 10);

    console.log(country == true, 1 == true,b == true);
    console.log("" == true, 0 == true,NaN == true);

    let height  = prompt("enter the hight");
    let base = prompt("enter the base");
    console.log("enter base:",base);
    console.log("enter height:",height);
    let area = 0.5 * base *height;
    console.log(`The area of the triangle is ${area}`);