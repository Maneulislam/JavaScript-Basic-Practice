// Reverse


let numbers = [1, 2, 3, 4, 5, 6]

let rev = numbers.reverse();

console.log(rev);


// ------------------------------------------------
// ------------------------------------------------



let rev_num = [];

for (let num of numbers) {
    let reverse = rev_num.unshift(num);

}
console.log(rev_num);



// -------------------------------------------
// ------------------------------------------------



let reverse_number = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    let num = numbers[i];

    reverse_number.push(num);
}
console.log(reverse_number);