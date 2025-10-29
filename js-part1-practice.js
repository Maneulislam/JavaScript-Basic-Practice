

// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    let f = celsius * (9 / 5) + 32;
    return f;
}
console.log(celsiusToFahrenheit(20));


// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

let numbers = [5, 6, 11, 12, 98, 5, 11, 11];


function repeatedCount(numbers, find) {
    let count = 0;
    for (let number of numbers) {
        if (find === number) {
            count++;
        }
    }
    return count;
}

console.log(repeatedCount(numbers, 5));




// Task-3:
// Write a function to count the number of vowels in a string.


function vowelCounts(string) {
    let count = 0;

    for (let str of string.toLowerCase()) {
        if ('a' == str | 'e' == str | 'i' == str | 'o' == str | 'u' == str) {
            count++;
        }
    }
    return count;
}
let string = 'Write a function ';
console.log(vowelCounts(string));


// Task-4:
// Write a function to find the longest word in a given string.

let input = "I am learning Programming to become a programmer";

function longestWord(input) {

    let words = input.split(' ');
    let longest = '';
    for (let word of words) {

        if (word.length > longest.length) {
            longest = word;
        }

    }
    return longest;
}

console.log(longestWord(input));






// Task-5:
// Generate a random number between 10 to 20.

let rand = Math.random() * (10) + 10;

console.log(rand);

