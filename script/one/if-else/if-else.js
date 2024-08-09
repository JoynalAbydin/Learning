/*var num3 = 5;
if(num3%2==0)
    console.log("EVEN");

if(num3%2!=0)
    console.log("ODD");

else
console.log("ODD");

এই কোড নিচে 100 mark assain করা হলো
var result = parseInt(prompt("Enter your marks: "));
if(result>79)
console.log("A+");

else if(result>69)
console.log("A");

else if (result>59)
console.log("-A");

else if (result>49)
console.log("B");

else if(result>39)
console.log("C");

else if (result>32)
console.log("D");

else
console.log("Fail");
*/

var result = parseInt(prompt("Enter your marks: "));

if(result>80 &&result<100)
console.log("A+");

else if(result>70 &&result<79)
console.log("A");

else if (result>60 &&result<69)
console.log("-A");

else if (result>50 &&result<59)
console.log("B");

else if(result>40 && result<49)
console.log("C");

else if (result>32 && result<39)
console.log("D");

else
console.log("Fail");



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