//iifes function 
(function imi(x,y) {
var xy = x*y;
document.write(xy);
})(10,20); //এখানে সাধারন ভাবে ফাংশন তৈরি করা হয়েছে, যা ইমেডিয়েট কলের জন্য সম্পূর্ণ ফংশনকে ()এর মধ্যে রাখা হয়েছে। এবং শেষে ()এর মধ্যে প্যারামিটার x,y এর মান বসানো হয়েছে। 
document.write('<br><br>');

//function expression 
var show = function display () {
  document.write('This is Example of function expression<br><br>')
}
show();


//my experiment 
var calculator = function calculation (x,y) {
var sum = x+y;
var sub = y-x;
var gun = x*y;
document.write('This is another example for function expression with sum, sub <br>');
document.write('Sum = '+sum+'<br>Sub = '+sub+'<br> Gun = '+gun);
}
calculator(10,30);



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
