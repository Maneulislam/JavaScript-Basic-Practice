/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let age  = 60;

let price = 800;
let discount;
let payTaka;

if(age < 10){
    console.log("Free");
}

else if(age >=15 && age <= 50){
    discount = (800 * 50) / 100;
    payTaka = price - discount;
    console.log(payTaka);
}


else if(age >= 60){
    discount = (800 * 15) / 100;
        payTaka = price - discount;

    console.log(payTaka);
}

else{
    console.log(price);
}