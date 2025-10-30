

// Task -1:
// Find the lowest number in the array below.

const heights1 = [167, 190, 120, 165, 137];
let low = heights1[0];

for (let height of heights1) {
    if (height < low) {
        low = height;
    }

}
console.log(low);


// Task -2:
// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallName(heights2) {
    let small = heights2[0];

    for (const height of heights2) {
        if (height.length < small.length) {
            small = height;
        }
    }
    return small;
}
console.log(smallName(heights2));


// Task-3:
// Your task is to calculate the total budget required to buy electronics:
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalLaptopPrice = laptopPrice * laptopQuantity;
    const totalTabletPrice = tabletPrice * tabletQuantity;
    const totalMobilePrice = mobilePrice * mobileQuantity;

    const totalMoney = totalLaptopPrice + totalTabletPrice + totalMobilePrice;

    return totalMoney;
}

console.log("Total Money Requred:", calculateElectronicsBudget(2, 2, 1));


// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
    let sum = 0;

    for (const phone of phones) {
        sum = sum + phone.price;
    }
    let avg = sum / phones.length;
    return avg;

}

console.log("The average price of phone : ", findAveragePhonePrice(phones));




// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 }
];


function totalSalaryPerMonth(employees) {
    let shahinIncrement = employees[0].experience * employees[0].increment;
    let shihabIncrement = employees[1].experience * employees[1].increment;
    let shoikotIncrement = employees[2].experience * employees[2].increment;
    let shohelIncrement = employees[3].experience * employees[3].increment;

    let shahinTotalSalary = employees[0].starting + shahinIncrement;
    let shihabTotalSalary = employees[1].starting + shihabIncrement;
    let shoikotTotalSalary = employees[2].starting + shoikotIncrement;
    let shohelTotalSalary = employees[3].starting + shohelIncrement;

    const provideTotalSalary = shahinTotalSalary + shihabTotalSalary + shoikotTotalSalary + shohelTotalSalary;

    return provideTotalSalary;



}

console.log("Total salary per month :", totalSalaryPerMonth(employees));