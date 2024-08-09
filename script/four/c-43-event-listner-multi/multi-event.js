//Selectedby just tag name, we can use id name which i add in html
/*
var ary = document.querySelectorAll('#bid').length;

for (let i = 0; i <=ary; i++) {
    document.querySelectorAll('button')[i].addEventListener('click',function(){
        var text = this.innerHTML;
        document.querySelector('h2').innerHTML = "You Have Click "+text;
    }); 
   }
*/

for (var i = 0; i<3; i++){
    document.querySelectorAll('#bid')[i].addEventListener('click',function (){
        var txt = this.innerHTML;
    document.getElementById('display').innerHTML='You Click '+txt ;
    });
}


document.querySelectorAll('#bid')[3].addEventListener('click',function (){
document.getElementById('display').innerHTML = 'You have click no button';
});