//  inch to feet convert

function inchToFeet(inch) {
    let feet = inch / 12;
    let feetFraction = parseInt(feet);
    let remaining = inch % 12;

    let result = feetFraction + ' Feet ' + remaining + ' inch'
    return result;
}

// console.log(inchToFeet(75));



// ---------------------------------------------------------------------
// Leap year
// ---------------------------------------------------------------------


function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        console.log("This is Leap Year");
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        console.log("This is Leap Year");
    }
    else {
        console.log("This is NOT Leap Year");

    }
}

isLeapYear(1900);



// -----------------------------------
// Average of Odd number
// -----------------------------------


function oddAvg(numbers) {

    let odds = [];

    for (let number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
    console.log(odds);

    let sum = 0;
    for (let odd of odds) {
        sum = sum + odd;
    }
    let length = odds.length;

    const avg = sum / length;
    return avg;
}

let numbers = [8, 5, 4, 7, 9, 2, 3];

console.log(oddAvg(numbers));




// -----------------------------------
// Remove duplicate element in an Array
// -----------------------------------


function noDuplicate(numbers1) {

    let unique = [];

    for (let number of numbers1) {
        if (unique.includes(number) === false) {
            unique.push(number);
        }
    }
    return unique;

}

let numbers1 = [1, 3, 4, 7, 3, 10, 7, 4];

const result = noDuplicate(numbers1);

console.log(result);



// --------------------------------
// Swap and Destructing
// --------------------------------


let a = 10;
let b = 20;
console.log(a, b);

let temp = a;

a = b;
b = temp;

console.log(a, b);



let x = 50;
let y = 100;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);