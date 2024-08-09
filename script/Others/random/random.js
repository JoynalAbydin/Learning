setInterval(randomNumber,1000);
function randomNumber() {
var num =   Math.floor(Math.random()*9);
// document.write(num+' ');
document.getElementById('randomNum').innerHTML += num+' ';
}
randomNumber();



