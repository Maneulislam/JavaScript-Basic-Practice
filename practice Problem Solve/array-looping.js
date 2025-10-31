// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.


const colors = ['red', 'blue', 'green', 'yellow', 'orange']

let revColors = [];

for(let color of colors){
    let reverse = revColors.unshift(color);
}
console.log(revColors);



// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

    const numbers = [12, 98, 5, 41, 23, 78, 46];

    let evenNumber = [];

    for(let number of numbers){
        if( number % 2 === 0){
            let pu = evenNumber.push(number);
        }
        
    }
    console.log(evenNumber);




// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers1 = ['Tom', 'Tim', 'Tin', 'Tik']

let result = '';

for(let num of numbers1 ){
    result = result + num;
}
console.log(result);
    



// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

 const statement = 'I am a hard working person';

 let reverse = statement.split(' ').reverse('').join(' ');
 console.log(reverse);



// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.


let input = [1, 2, 3];
console.log("orginal : ", input);

let copy = [...input];
copy[0] = 99;
console.log("Copy : ", copy);






// Task 6
// Given an array of student objects, print each student’s name and marks.

 let student =[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

console.log(`${student[0].name} Scored ${student[0].marks},${student[1].name} Scored ${student[1].marks}`);






// Task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.

let input1 = [
  [1, 2],
  [3, 4],
  [5, 6]
]

 input1[1][0] = 99;


 console.log(input1);


