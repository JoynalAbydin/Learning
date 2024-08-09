/*
for (var i = 0; i < 5; i++) {
var button = document.querySelectorAll('.myButton')[i];
button.addEventListener('click',function () {
  var text = this.innerHTML;
  console.log(text);
  myAudio(text);
  animation(text);
});  
}



function myAudio(text) {
  switch (text) {
    case 'a':
    var audio=  new Audio ('/Learning JS/Part Four/c-45 add animation/sound/beep-1.mp3');
    audio.play();
      break;
      
      case 'b':
        new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-2.mp3').play();
        break;
        
      case 'c':
        new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-3.mp3').play();
        break;
        
      case 'd':
        new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-4.mp3').play();
        break;
      
    case 'e':
        new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-5.mp3').play();
        break;  
  }
}


for (var x = 0; x < 5; x++) {
  function animation(text) {
var selBtn = document.querySelector('.'+text);
selBtn.classList.add('anim');

setTimeout(function () {
  selBtn.classList.remove('anim');
},2000);
  }
}
*/

for (var x =0; x<5; x++){
document.querySelectorAll('.myButton')[x].addEventListener('click',function () {
  var text = this.innerHTML;
  console.log(text);
  audioPlay(text);
  addAnimation(text);
  });
};

function audioPlay(text){
switch (text) {
  case 'a':
    new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-1.mp3').play();
    break;
    case 'b':
        new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-2.mp3').play();
        break;
        
      case 'c':
        new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-3.mp3').play();
        break;
        
      case 'd':
        new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-4.mp3').play();
        break;
      
    case 'e':
        new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-5.mp3').play();
        break; 
  };
}

function addAnimation(text) {
var btnCls =  document.querySelector('.'+text);
btnCls.classList.add('anim');

setTimeout(function () {
  btnCls.classList.remove();
},2000);
}
