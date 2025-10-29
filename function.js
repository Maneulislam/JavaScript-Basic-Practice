
function sumArray(numbers) {
    let sum = 0;

    for (let number of numbers) {

        if (number % 2 === 0) {

            sum = sum + number;

        }
    }
    return sum;
}

let numbers = [5, 7, 10, 8, 2, 3];

let result = sumArray(numbers);
console.log(result);



// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(n1, n2, n3, n4) {
    return n1 * n2 * n3 * n4;
}
console.log(multiply(4, 5, 4, 5)
);


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEven(number) {
    if (number % 2 === 1) {
        let odd = number * 2;
        return odd;
    }
    else {
        let even = number / 2;
        return even;
    }
}

console.log(oddEven(11));

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers1) {
    let sum = 0;
    for (let number of numbers1) {
        sum = sum + number;
    }

    return sum / numbers1.length;
}

let numbers1 = [5, 7, 10, 8, 2, 3, 7];
console.log(make_avg(numbers1));

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(string) {
   let count = 0;

    for (let str of string) {
        if (str === '0') {
            count = count + str.length;
        }
    }

    return count;
}
console.log(count_zero('1001101010'));


// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function odd_even(number){
    if(number % 2 === 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
} 
odd_even(312);













function getMenu() {
 console.log("Burger, Pizza, Pasta");
}
getMenu();