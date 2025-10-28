/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */


// let num = 1;

// while (num <= 60) {
//     console.log("I will invest at least 6 hrs every single day for next 60 days!", num);
//     num++;
// }




/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

// let num = 61;

// while(num <= 100){
//     if(num % 2 === 1){
//         console.log(num);
//     }
//     num++;
// }



/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */


// let num = 78;

// while(num <= 98){
//     if(num % 2 === 0){
//         console.log(num);
//     }
//     num++;
// }




/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */


// let num = 81;

// let sum = 0;

// while(num <= 131){
//     if(num % 2 === 1){
//        sum = sum + num;
//        console.log(sum);
//     }
//     num++;
// }



// Subtask-2:

// Display sum of all the even numbers from 206 to 311.

//  */



// let num = 206;

// let sum = 0;

// while(num <= 311){
//     if(num % 2 === 0){
//        sum = sum + num;
//        console.log(sum);
//     }
//     num++;
// }



/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */


// let num = 0;

// let multiply;

// while(num <= 100){
//     multiply = num * 5;
//     console.log(multiply);
//     num++;
// }



/***

Implement a countdown timer that counts down from 21 to 15.

 */


// let num = 21;

// while(num >= 15){
//     console.log(num);
//     num--;
// }



// continue


let n = 0;

while(n < 15){
    n++;
    if(n % 5 !== 0){
        continue;
    }
    console.log(n);
}