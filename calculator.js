
function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    let sub = num1 - num2;
    return sub;
}


function multiply(num1, num2) {
    let mul = num1 * num2;
    return mul;
}


function divide(num1, num2) {
    let div = num1 / num2;
    return div;
}



function calculator(num1, num2, operation) {
    if (operation === 'add') {
        return add(num1, num2);
    }

    else if (operation === 'subtract') {
        return subtract(num1, num2);
    }

    else if (operation === 'multiply') {
        return multiply(num1, num2);
    }

    else if (operation === 'divide') {
        return divide(num1, num2);
    }

    else {
        return "Operation needed"
    }


}

console.log(calculator(20, 5, 'multiply'));
