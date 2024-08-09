// for (var x=0; x<3; x++){
//     document.querySelectorAll('.audio')[x].addEventListener('click',function(){
//         var text = this.innerHTML;
//         console.log(text);
    
//         switch(text){
//          case "a":
//             var audio = new Audio ("/Learning JS/Part Four/c-44 play audio/audio/audio1.mp3");
//             audio.play();
//              break;
            
//             case "b":
//             new Audio('/Learning JS/Part Four/c-44 play audio/audio/audio2.mp3').play();
//             break;
                    
//             case "c":            
//             new Audio('/Learning JS/Part Four/c-44 play audio/audio/audio3.mp3').play();
//             break;
//                 }
//             });
//         };
        

for (var x=0; x<3; x++){
    document.querySelectorAll('.audio')[x].addEventListener('click',function (){
        var text = this.innerHTML;
        console.log(text);
    
audioPlay(text);
            });
        };

function audioPlay(text){
    switch(text){
        case "a":
           var audio = new Audio ("/Learning JS/Part Four/c-44 play audio/audio/audio1.mp3");
           audio.play();
            break;
           
           case "b":
           new Audio('/Learning JS/Part Four/c-44 play audio/audio/audio2.mp3').play();
           break;
                   
           case "c":            
           var audio = new Audio('/Learning JS/Part Four/c-44 play audio/audio/audio3.mp3');
           audio.play();
           break;
               }
}