var tar1 = Number(prompt("Enter a Number: "));
var tar2 = Number(prompt("Enter a Number: "));
var tar3 = Number(prompt("Enter a Number: "));


var tar4 = tar1>tar2?(tar1):(tar2); //এখানে tar1>tar2 বড় সংখ্যাটি tar4 ভেলুতে নিবে
var tar = tar3>tar4?(tar3):(tar4); //এখানে tar3>tar4 এর মধ্য বড়টি চেক করে সেটি প্রিন্ট করবে

document.write("Your inputting number is "+tar1+", "+tar2+" and "+tar3+" here big number is = "+tar);


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