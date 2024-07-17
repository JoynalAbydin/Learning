var selDiv = document.querySelector('#div-style');
var pId = document.getElementById('pId');
var li = document.querySelector('#li2');  


function addStyle() {
  selDiv.classList.add('div-style');
  pId.classList.add('pId');
  li.classList.add('li');
}


function removeStyle() {
  selDiv.classList.remove('div-style');
  pId.classList.remove('pId');
  li.classList.remove('li')
}