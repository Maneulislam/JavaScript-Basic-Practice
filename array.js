
// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array


let fruits = ['mango', 'banana', 'apple', 'orange', 'grapes' ];

// console.log(fruits[3]);

fruits[2] = 'jambura';

// console.log(fruits);




// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output


let touristDestinations = ["Paris", "Tokyo", "New York"];
touristDestinations.push('Bandarban');
touristDestinations.push('cox bazar');

// console.log(touristDestinations);

touristDestinations.pop();
// console.log(touristDestinations);




// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.



let books = ["The Alchemist", "Harry Potter", "JavaScript", "1984"];

if(books.includes('JavaScript')){
    // console.log("Yes");
}




// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.



let numbers = [1, 2, 3, 4, 5];

// Non-array variables
let name = "Tonmoy";

if(Array.isArray(numbers)){
    // console.log("This is Array");
}
else{
        console.log("This is not Array");

}


if(Array.isArray(name)){
    console.log("This is Array");
}
else{
        // console.log("This is not Array");

}



// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().



books = ["The Alchemist", "Harry Potter", "JavaScript", "1984"];
console.log(books);

fruits = ['mango', 'banana', 'apple', 'orange', 'grapes' ];
console.log(fruits);


let Concat = books.concat(fruits) ;
console.log(Concat);
