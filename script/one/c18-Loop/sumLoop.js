var x = parseInt(prompt("Enter starting number: "));
var y = parseInt(prompt("Enter ending number"));

/*var sum = 0; 
for (var i = 1; i <= 100; i = i + 1) //এখানে i এর মান ১ ধরে যোগ কার হেয়েছে
{
 sum = sum + i;
}
document.write(sum);
*/


var jog = 0; 
for (var j = x; j <= y; j = j + 1) //এখানে প্রথম (ইনপুট-by Prompt) x এর মান j এর মাঝে রাখা হয়েছে। j যতক্ষন y এর সমান না হবে ততক্ষ এই লুপটা চলবে।
{
  jog = jog + j;
}
document.write("Your Result is = "+jog);


document.addEventListener('DOMContentLoaded',function(){
  const btnId = document.getElementById('srcBtnId');
  const content = document.getElementById('contentId');
  btnId.addEventListener('click',function(){
    if (content.style.display === 'none') {
      content.style.display = 'block'
    } else {
      content.style.display = 'none'
    }
  });
});
