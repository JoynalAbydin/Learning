
function hightNumber() { // creating a function
var max = number[0]; //ধরে নেই 1st index is big
for (let i = 0; i < number.length; i++) 
//সকল ভেলুর প্রিন্ট এর জন্য উপরে লুপ নিয়েছি
    if (max<number[i]) { //চেক করা হচ্ছে প্রথম সংখ্যার থেকে বড় সংখ্যা
        max = number[i]; //চেক করা শেষে যেটা বড় সেটা সিলেক্ট করবে
    }
    return max; // এখানে সিলেক্টেড সংখ্যাটি ফাংশনে রিটার্ন করবে
  }


var number = [10,50,42,5,30,15,60,9]; //making numbers
var high = hightNumber(number); //number ke hightNumber a raka hoyece
//পুরা ফাংশন কে একটা ভেলেুতে রাখা হয়েছে 
document.write('Here Hight Number is = '+high+'<br>');

document.write('<br>Another Function Here<br><br>');


// var num = [];
// for (var x =0; x<5; x++){
//     num[x]= parseInt(prompt('Enter a number: '));
//     }
// document.write('You input = ' +num+' ');

// function rcvNum() {
//     var maxNum = num[0];
//     for (let j = 0; j < num.length; j++) {
// if (maxNum<num[j]){
//     maxNum = num[j]
// }        
//     }
//     return maxNum;
// }
// var resultNum = rcvNum(num);
// document.write('<br> Here Big Number Is = '+resultNum);


//-------------------------------------------------
var num = [];

// Input numbers
for (var x = 0; x < 5; x++) {
    num[x] = parseInt(prompt('Enter a number: '));
}

// Display input numbers
document.write('You input = ' + num + ' ');

// Function to find the maximum number
function rcvNum() {
    var maxNum = num[0];
    var sum = 0;

    for (let j = 0; j < num.length; j++) {
        if (maxNum < num[j]) {
            maxNum = num[j];
        }
        sum += num[j];
    }

    // Display the sum of all numbers
    document.write('<br> Sum of all numbers = ' + sum + ' ');

    return maxNum;
}

// Call the function
var resultNum = rcvNum(num);

// Display the maximum number
document.write('<br> Here Big Number Is = ' + resultNum);




//Source Code Show and hide button function
document.addEventListener('DOMContentLoaded', function () {
    const btnId = document.getElementById('srcBtnId');
    const content = document.getElementById('contentId');

    btnId.addEventListener('click', function () {
        // Toggle the display of the content
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});