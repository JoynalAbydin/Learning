//সাধারন ভাবে var তৈরি করার পদ্ধতি 
var n1,n2,n3,n4
n1 = 'Joynal';
n2 = 'Jahid';
n3 = 'Anamul';
n4 = 'Alamin';



//we can make it easyly using array
var n = new Array(3); //array start with 0 index, এরের  দেওয়া বাধ্যতামূলক নয়।
n[0]= 'Manik';
n[1]= 'Helal';
n[2]= 'Rupom';
n[3]= 'aizak';
document.write(n); //for all value
//we can print specific arry by call
// document.write(n[2]);
console.log(n.length); //এরের সাইজ জানতে এটা লিখে কনসোলে গেলে array এর সাইজ জানা  যাবে।


//Simple way to make array
var names = ['','Aizakur','Helal','Jabed'];
//এখন সাধারন ভাবে এটাকে প্রিন্ট করা যাবে। এখানে প্রথম 'স্ট্রিং' এর মধ্যে যা থাকবে এটা হবে 0 index.
document.write(names[0]); //কিছু প্রিন্ট করবে না কারন 0 ইনডেক্সে কিছু রাখা হয়নি।


//push function যা কোন Array এর শেশে নতুন করে কোন নাম সংযোজন করতে ব্যাবহার করা হয়।
names.push('Kawser');
//console.log(names.length); //after push  name

//names.pup(); // namse var এর সবার শেষ হতে ১টা নাম বাদ দেওয়া হয়েছে। 


//concat দুটি এরেকে সংযুক্ত করতে ব্যাবহার করা হয় এই concat  function 
var test = n.concat(names);
console.log(test);


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