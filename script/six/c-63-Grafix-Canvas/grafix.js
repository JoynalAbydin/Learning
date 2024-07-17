var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(250, 150, 50, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();



var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Data
var data = [10, 20, 30, 40, 50];

// Draw bars
for (var i = 0; i < data.length; i++) {
  ctx.beginPath();
  ctx.rect(i * 50, 300 - data[i], 40, data[i]);
  ctx.fillStyle = "blue";
  ctx.fill();
}
