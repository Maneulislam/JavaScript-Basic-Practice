

function highest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("Number 1 is Boss");
    }

    else if (num2 > num1 && num2 > num3) {
        console.log("Number 2 is Boss");
    }
    else {
        console.log("Number 3 is boss");
    }
}

let highestNumber = highest(1000, 2000, 300);




// -------------------------
// Min number
// -------------------------

const numbers = [75, 55, 44, 77, 88, 99, 111, 11, 2];


function minNumber(numbers) {

    let min = numbers[0];

    for (const number of numbers) {
        if (min > number) {
            min = number;
        }
    }
    return min;
}
console.log(minNumber(numbers));



// ------------------------------------
// ------------------------------------


function discount(quantity) {

    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;


    if(quantity<=100){
        let total = quantity *first100Price;
        return total;
    }

    else if(quantity<=200){
        first100Total = first100Price * 100;
        remainingQuantity = quantity - 100;
        remainingTotal = remainingQuantity* 90;

        total = first100Total + remainingTotal;
        return total;
    }
    else{
         first100Total = first100Price * 100;
         second100Total = second100Price *100;
        remainingQuantity = quantity - 200;
        remainingTotal = remainingQuantity* 70;

        total = first100Total + second100Total + remainingTotal;

        return total;
    }



}

console.log(discount(200));