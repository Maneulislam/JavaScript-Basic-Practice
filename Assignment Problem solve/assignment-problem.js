// Function Name Must be cashOut()

// রহিম একজন ছোট ব্যবসায়ী। প্রতিদিন বিক্রয়ের মাধ্যমে বিভিন্ন লেনদেন করতে হয় তাকে। একদিন তার দোকানে এক ক্রেতা আসে এবং বলে,
// "ভাই, ২০০০ টাকা ক্যাশ আউট করতে চাই। কত চার্জ কাটবে?"

// রহিম মনে মনে হিসাব করতে শুরু করল, কিন্তু হঠাৎ সে ভাবল—এভাবে বারবার হিসাব করা তো ঝামেলা! যদি একটা ফাংশন থাকত, মোট টাকার উপর ভিত্তি করে চার্জ বের করে দিত!
// এবং রহিম যেহেতু জানে যে তুমি প্রোগ্রামিং শিখছো, তাই তোমার কাছেই সাহায্য চাইছে।

// রহিমকে সাহায্য করো cashOut() নামে একটি ফাংশন বানিয়ে, যেখানে মোট টাকা ইনপুট নিয়ে ক্যাশ আউটের চার্জ বের করবে।

// Cashout Charge হবে - 1.75%


function cashOut(taka) {

    if (typeof taka === 'number' && taka > 0) {
        const percent = 1.75 / 100 * taka;
        return percent.toFixed(2);
    }
    else {
        return "Invalid"
    }
}

console.log(cashOut(1000));




// 🧩 Problem-02 : Detect email valid or not

// ⚠️ Function Name Must be validEmail()

// এবার তোমার কাজ হলো validEmail() নামে একটা ফাংশন তৈরি করা, যা একটি email ইনপুট নেবে
// এবং সেটি সঠিক নাকি ভুল তা যাচাই করে একটি boolean value (true/false) রিটার্ন করবে।

// ইমেইল ভ্যালিড হওয়ার শর্তগুলো হলো 👇

// ইমেইলের শুরুতে "." বা "-" এই স্পেশাল ক্যারেক্টারগুলো থাকা যাবে না।

// ইমেইলে মাঝখানে "@" থাকতে হবে।

// ইমেইলে কোনো স্পেস থাকা যাবে না।

// ইমেইলের শেষে ".com" থাকতে হবে।

// উপরের শর্তগুলো পূরণ হলে ইমেইলটি true আউটপুট হিসেবে রিটার্ন করবে,
// না হলে false আউটপুট হিসেবে রিটার্ন করবে।



function validEmail(email) {

    if (email[0] === '.' || email[0] === '_' || email[0] === '-' || email[0] === '@' || email[0] === '+') {
        return false;
    }
    else if (email.includes(' ')) {
        return false;
    }
    let atIndex = email.indexOf('@'); // find where '@' is
    if (atIndex === -1) {
        return false; // no '@' found
    }


    let lastPart = email.slice("-4");
    if (lastPart !== '.com') {
        return false;
    }

    return true;

}

let mail = "maneul@gmail.com";

console.log(validEmail(mail));






// Problem-03 : Who will Win (🥭 Mango / 🍌 Banana )

// ⚠️ Function Name Must be electionResult()

// বাংলাদেশের রাজনৈতিক ময়দানে চলছে টানটান উত্তেজনা! Mango-party আর Banana-party মুখোমুখি এক দারুণ নির্বাচনে! ভোট চলছে দেদারসে, কিন্তু গণনা করতে গিয়েই সবাই কনফিউজড! তাই, তোমাকে electionResult() নামে একটা ফাংশন লিখতে হবে, যা একটা Array Input নেবে এবং ভোটের গণনা করে জানিয়ে দেবে—"কে হচ্ছে বিজয়ী?"



function electionResult(votes) {
    let banana = [];

    let mango = [];

    if (Array.isArray(votes)) {

        for (let vote of votes) {
            if (vote === 'banana') {
                banana++;
            }
            else if (vote === 'mango') {
                mango++;
            }
        }
        if (mango === banana) {
            return "Draw"
        }
        else if (mango > banana) {
            return "Mango"
        }
        else if (mango < banana) {
            return "Banana"
        }

    }
    else {
        return "Invalid"
    }


}
const votes = ['banana', 'mango', 'mango', 'banana', 'no-vote', 'mango', 'banana', 'banana'];

console.log(electionResult(votes));




// Problem-04: Detect The Perfect Best Friend

// ⚠️ Function Name Must be isBestFriend()

// বন্ধুত্ব কি শুধু মুখের কথা? নাকি সত্যিকারের? 🤔 তোমাকে একটা isBestFriend() ফাংশন লিখতে হবে, যা চেক করবে দুই বন্ধু আসলে সাচ্চা কিনা! 🤝

// তোমার ফাংশন কে ২ বন্ধুর ডেটা দেওয়া হবে। যদি প্রথমজনের bestFriend এ যে ভ্যালু জয় তার রোল এর সাথে মিলে যায় এবং দ্বিতীয় জনের bestFriend এ যে ভ্যালু জনের রোল এর সাথে মিলে যায় তাহলেই আমরা বুঝব যে তারা দুইজন সত্যিকারের বেস্ট ফ্রেন্ড।

// ফাংশন টি ২ টি Input নেবে।

// ১ম input টি হবে একটা object।

// ২য় input টিও হবে একটা object।


function isBestFriend(friend1, friend2) {

    if (typeof friend1 === 'object' && typeof friend2 === 'object' && Array.isArray(friend1) !== true && Array.isArray(friend2) !== true) {

        if (friend1.roll === friend2.bestFriend && friend2.roll === friend1.bestFriend) {
            return true;
        }

        else {
            return false;
        }

    }
    else {
        return "Invalid";
    }

}


let friend1 = {
    name: "Mohon",
    roll: 1,
    bestFriend: 2,
}

let friend2 = {
    name: "Shuvo",
    roll: 2,
    bestFriend: 1,
}

console.log(isBestFriend(friend1, friend2));




// ⚠️ Function Name Must be calculateWatchTime()

// সুবাহ সারাদিন Tiktok দেখে সময় নষ্ট করে। কোন পড়াশোনা করেনা। সুবাহর বাবা সুবাহর এই সময় অপচয় নিয়ে অনেক দুশ্চিন্তায় আছেন। সুবাহর বাবা এমন একটি ফাংশন বানাতে চাচ্ছেন যাতে সুবাহ দৈনিক কত সময় ভিডিও দেখে অপচয় করে সেটা তিনি সুন্দর ভাবে দেখতে পারবেন।

// তোমার কাজ হচ্ছে সুবাহর বাবাকে calculateWatchTime() নামে একটি ফাংশন বানিয়ে দেওয়া যেটা একটি Array ইনপুট নিবে। Array তে সুবাহর ভিডিও দেখার সময়(second) গুলো Number আকারে স্টোর থাকবে। ফাংশনটি Array থেকে টোটাল সময় বের করে সেটোকে ঘন্টা, মিনিট এবং সেকেন্ডে কনভার্ট করে একটি অবজেক্ট হিসেবে রিটার্ন করবে।

function calculateWatchTime(watchTime) {

    let totalWatchTime = 0;



    for (let time of watchTime) {
        if (typeof time === 'number') {
            totalWatchTime = totalWatchTime + time;
        }
        else {
            return "Invalid"
        }
    }

    let convertHour = parseInt(totalWatchTime / 3600);
    let fraction1 = totalWatchTime % 3600;
    let convertMinute = parseInt(fraction1 / 60);
    let convertSecond = totalWatchTime % 60;


    return {
        hour: convertHour,
        minute: convertMinute,
        second: convertSecond
    }

}

let watchTime = [100, 20, 60, 60, 7250, 60];

console.log(calculateWatchTime(watchTime));

