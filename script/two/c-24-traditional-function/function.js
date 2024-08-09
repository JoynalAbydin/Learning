//সাধারন ভাবে যখন কোন কাজ করি, যেমন যোগ বিয়োগ ইত্যাদি। 
//যোগ এর জন্য একটা উদাহরণ 
var x = 10;
var y = 15;
var sum = x+y;
document.write('Result = '+sum+'<br><br><br>');


//Normally Function
function calculate() { //function name of function () { function body and close}
var sq = 20; //function value 
var sqr = sq*sq; //function কি কাজ করবে
document.write('square = '+sqr+'<br>'); //কি প্রিন্ট হবে তাবলে দেওয়া 
}
calculate(); //ফাংশন কে কল দেওয়া হয়েছে।



//ফাংশন with প্যারামিটার
function calculator (x,y,z) //function name ar vitor দুইটা প্যারামিটার x, y ও z নেওয়া হয়েছে। 
{ 
var sub = x+y+z; 
document.write('Sub = '+sub+'<br>')
}
calculator(10,20,30); //ফাংশন কলের সময় প্যারামিটার এর মান বসিয়ে দিয়েছি
calculator(100,200,300);


//return function
function joynal() {
 var joy = "hello how are you <br>";
 return joy;
}
document.write(joynal());


//return function2
function cal(a,b,c) { //function with parameter
var sub2 = a+b+c; //function works
return sub2; //return function sub2
}
var abc = cal(5,10,15); //parameter valu under abc
document.write(abc); //print function, we can directly print above function method 


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