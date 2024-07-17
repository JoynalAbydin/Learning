var number = [10,15,20,25,30,35,40]; //নাম্বারের ক্ষেত্রে 'স্ট্রিং' ব্যাবহার করতে হয় না
//document.write(number[5]+'<br>'); //এটা সিংগেল প্রিন্ট করা যাবে, আবার পুরা Array Print কার যাবে number valu দ্বারা
var sum = 0; //লুপের সকল সংখ্যাযোগ করার জন্য 

for (var x=0; x<7; x++)
{
    document.write(number[x]+', '); 
    var sum = sum+number[x];
}
document.write('<br> Sum = '+sum+'<br>');

//propmt in loop
var num = new Array();
for (var i=0; i<3; i++){
    num[i] = parseInt(prompt('enter a number: '));
   }
var sum1 = 0;
for (var i=0; i<3; i++){
    sum1 = sum1+num[i];
    document.write(num[i]+', ')
}

document.write('<br> আপনার প্রদত্ত সংখ্যাগুলোর যোগফল = '+sum1);