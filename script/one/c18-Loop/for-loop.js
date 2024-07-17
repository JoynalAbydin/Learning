/* 
for loop function 
for(starting; conditions; updated; )
{
body
}
*/

//akany i love Bangladesh ke 10 ber print kora hoyece (update part ai vabe leka jai i= i+1;)
for(var i=1; i<=5; i= i+1)
{
document.write("<h1>i love my country </h1>");
}

// akane 1 theke 100 loop leka hoyece
for (var x = 1; x <=100; x++) {
 document.write("    "+ x);
}

// akane 10 theke 1 leka hoyece
for (var xx = 10; xx >= 1; xx--) {
 document.write(""+"<br>"+ xx);
}


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