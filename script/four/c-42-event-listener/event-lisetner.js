document.getElementById('clickId').addEventListener('click',alartFunction);

function alartFunction() {
  alert('Hello, Welcome to Javascript Learner Sites');
}


/*
document.getElementById('ex2').addEventListener('click',myEx2)
function myEx2() {
alert('hello');
}
*/

var myEx = document.querySelector('#ex2');
myEx.addEventListener('mouseover',myEx2);

function myEx2() {
 myEx.classList.add('ex2');
}

myEx.addEventListener('mouseout', function() {myEx.classList.remove('ex2')
});

//Example 3 Start Here
var ex3 = document.getElementById('ex3');
ex3.addEventListener('mouseover',myEx3);

function myEx3(){
  ex3.classList.add('example3');
}

ex3.addEventListener('mouseout',function(){ex3.classList.remove('example3')});