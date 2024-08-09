// Generate a random number between 0 and 1
//যেহেতু random number ০ থেকে 1 generate করে তাই যত টা সংখা জেনারেট করতে চাই *সেই সংখ্যা দিয়েছি। random number ০ শুরু হয় তাই শেষে ১ যোগ করা হয়েছে।  
var wonNum = 0;
var lossNum = 0;

for (var i = 0; i < 5; i++) {
  var gussingNumber = parseInt(prompt('Gusse a number 1 to 5 : '));
var randomNumber = Math.floor(Math.random()*4)+1;

if (gussingNumber==randomNumber) {
 console.log('You Have Win') 
 wonNum++
} else {
  console.log('You Have Loss. Random number was = '+randomNumber)
  lossNum++
 }
}
document.write('You have win = '+wonNum+'<br>');
document.write('You have loss = '+lossNum);

console.log('1st season end');



var gNum = parseInt(prompt('Guss 1 to 3'));
var rNum = Math.floor(Math.random()*3)+1;

if (gNum===rNum) {
  console.log('Congratulations')
} else{
  console.log('Sorry. Try Again. Random Number Was = '+rNum);
}

