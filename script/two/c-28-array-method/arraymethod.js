var names = ['ashik','anis','kabir','Abul'];

//names.push('joy'); 
//add something in last

//names.pop(); 
//minus something on last


//remove name/itm in frist in array
//names.shift();

//add name/itm in frist in array
//names.unshift('ruble');


//splice methods নির্দিষ্ট ইনডেক্স হতে কোন সংখ্যা যোগ বা বা দেওয়া
//names.splice(1,0,'Joy');
//এখানে 1,0- 1 Number index ar পর একটা নাম সংযুক্ত হবে। এবঙ 1,0,- 0 এর কারনে 1 Number index এর পর ০ ন্ম রিমোভ হবে। 
// এখানে ০ এর পরিবর্তে ১ বা যেই সংখ্যা দিবো, selected index 1,0- ততটা নাম বাদ যাবে।


//slice মূল এরে অপরিবর্তিত বেখে, নতুন এরেতে কাজ করা যাবে, পুরাতন এরের ইন্ডেক্স নিয়ে। আরো জানতে হবে
// var name = names.slice(1,2);


//sort method অনুযায়ী a-z index কে সাজানো
var name = names.sort();
names.reverse(); //z-a সাজানো






console.log(names);
// console.log(name);


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
