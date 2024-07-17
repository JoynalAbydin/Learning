var num1 = prompt("Enter Frist Number: "); 
var num2 = prompt("Enter Second Number: ");
num1 = parseInt(num1, 10); //parseInt base 10 so number defian korar por base daoa hoyece
num2 = parseInt(num2, 10);

var plus,min,vag,gun;

document.write("<b>আপনার প্রদত্ত সংখ্য দুটি হলো </b>"+ num1 +" <b>এবং </b>"+num2+"<br>আপনার প্রদত্ত সংখ্যা দুইটির যোগ, বিয়োগ, গুন ও ভাগের উত্তরফল নিম্নরূপ<br><br>");


plus = num1 + num2;
document.write(num1+ " + "+num2+" যোগফল = "+ plus + "<br> <br>");

min = num1 - num2;
document.write("বিয়োগফল = "+ min + "<br> <br>");

vag = num1 / num2;
document.write("ভাগফল = "+ vag + "<br> <br>");

gun = num1 * num2;
document.write("গুনফল = "+ gun + "<br> <br>  ");


document.addEventListener('DOMContentLoaded', function () {
    const btnId = document.getElementById('srcBtnId');
    const content = document.getElementById('contentId');

    btnId.addEventListener('click', function () {
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
