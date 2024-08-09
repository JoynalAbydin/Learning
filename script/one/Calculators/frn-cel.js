var frn = parseFloat(prompt("Enter Fahrenheit :"));
var cel = (frn-32)*(5/9);
document.write("আপনি ইনপুট করেছেন "+frn+"° Fahrenheit যা Celsius এ কনভার্ট করলে হবে = "+cel.toFixed(2)+"° Celsius");
