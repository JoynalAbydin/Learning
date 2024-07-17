var x = parseInt(prompt("Enter starting number: "));
var y = parseInt(prompt("Enter ending number: "));
document.write("You Enter " +x + " and "+ y+" <br><br>");

var x1 = x+1; //প্রথম সংখ্যা হতে ১ যোগ করা হয়েছে
var x2 = x+2; //প্রথম সংখ্যা হতে ২ যোগ করা হয়েছে
var xx1 = x-1; //প্রথম সংখ্যা হতে ১ বিয়োগ করা হয়েছে

//যদি প্রথম সংখ্যার মান ১ বা এর সমান হয় তাহলে এই সুত্রটি কাজ করবে
if (x <=1){
var t1=  (x+y)*(y)/2; //1sr Number + Last Number * Lasr Number / 2
document.write(x+"+"+x1+"+"+x2+"+...."+y+"= " +t1);
}

//যদি প্রথম সংখ্যার মান 2 বা এর বেশি হয় তাহলে এই সুত্রটি কাজ করবে
 else if (x>=2) {
var t2=  (y-xx1)/2*(x+y); //এখানে শেষ সংখ্যা হতে (প্রথম সংখ্যা - ১) বিয়োগ করা হয়েছে 
  document.write(x+"+"+x1+"+"+x2+"+...."+y+"= " +t2+"<br>");
 }
 
 var sum1 = x+y;
document.writeln("<br>"+x+ "+"+ y +" = " +sum1);

var min = y-x;
document.writeln("<br>"+y+ "-"+ x +" = " +min);

var gun = x*y;
document.writeln("<br>"+x+ "×"+ y +" = " +gun);

var vag = y/x;
document.writeln("<br>"+y+ "÷"+ x +" = " +vag);








