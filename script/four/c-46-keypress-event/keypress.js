
// for (var i = 0; i < 4; i++) {
//   document.querySelectorAll('.btn')[i].addEventListener('click',function(){
//   var text = this.innerHTML;
//   console.log(text);
//   ply(text);
//   ani(text);
// });
// }

// // document.addEventListener("keypress",function (event) {
// //   var text = event.key;
// //    ply(text);
// //   ani(text);
// // });


// // //Thise is exprement that i use if else
// // /*
// // function ply(text) {
// // if (text == 'a') {
// //  new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-1.mp3').play();
// //   }
// //   else if (text = 'b') {
// //     new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-2.mp3').play();
// //   }
// //   else if (text = 'c') {
// //     new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-4.mp3').play();
// //   }
// // }
// // */


// function ply(text) {
//   switch (text) {
//     case 'a':
//       new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-1.mp3').play();
//       break;
//       case 'b':
//       new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-2.mp3').play();
//       break;
//       case 'c':
//       new Audio('/Learning JS/Part Four/c-45 add animation/sound/beep-3.mp3').play();
//       break;
//   }  
    
// }

// function ani(text) {
//   var slTxt= document.querySelector('.'+text);
//   slTxt.classList.add('anim');
  
//   setTimeout(function () {
//     slTxt.classList.remove('anim')
//   },1000);
// }


// document.addEventListener('keypress',function (event) {
//  var keys = event.key;
// document.getElementById('pids').innerHTML += keys;
// });

var count = 0;
document.querySelector('textarea').addEventListener('keypress',function(event){
  count++
var text = event.key;
document.getElementById('pids').innerHTML ='You Have Press: '+ count +' charecters';
});

