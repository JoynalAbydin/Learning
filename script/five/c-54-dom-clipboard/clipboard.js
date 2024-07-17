// ClipboardEvent Object
// oncopy
// oncut
// onpaste

const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("copy", function () {
  console.log("you have copied");
});
input.addEventListener("cut", function () {
  console.log("you have cut");
});
input.addEventListener("paste", function () {
 console.log("you have pasted");
});

input.addEventListener("copy", function () {
  p.innerText = "you have copied";
});
input.addEventListener("cut", function () {
  p.innerText = "you have cut";
});
input.addEventListener("paste", function () {
  p.innerText = "you have pasted";
});