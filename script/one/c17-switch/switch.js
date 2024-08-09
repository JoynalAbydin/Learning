// how to use switch here i print number to swhich tist is show its vawal or consonant

// switch, case, break, default

// switch ar jonno switch(var ar value) {function, case "something":
  // what you want to print
  // if netxt valu dont print
//}

/* var numToSpell = prompt("Eter a disit or latter:");
switch(numToSpell){   //var and promt ar dara akta disit input naoa hoyece
  
  case "0": //case ar dara 0 input dele ki dakabe ta defian kore daya hoyece
  document.write("zero"); // jodi input 0 hoi ata "Zero" Print korre Dakabe
  break; //0 Hole program ti akani break hoye jabe(or nicer gula check korbe)

  case "1":
  document.write("one");
  break;

  case "2":
  document.write("two");
  break;

  case "3":
  document.write("three");
  break;

  case "4":
  document.write("four");
  break;

  case "5":
  document.write("five");
  break;

  case "6":
  document.write("six");
  break;

  case "7":
  document.write("seven");
  break;

  case "8":
  document.write("eight");
  break;

  case "9":
  document.write("nine");
  break;

  default: //jodi inputed number konotar sata match na kore tahole ata kaj korbe
  document.write("something an errors") //akane ata dakabe, jehutu 1 to 9 daya ace so ata ar bahire kicu input dela error dakabe
}
*/

/* var latter = prompt("enter a latter");
latter = latter.toLowerCase();
switch (latter) {
  case 'a':
    document.write("vawal");
    break;
    
  case 'e':
    document.write("vawal");
    break;
    
  case 'i':
    document.write("vawal");
    break;
    
  case 'o':
    document.write("vawal");
    break;
    
  case 'u':
    document.write("vawal");
    break;
  
  default:
    document.write("consonant");
}
*/
var latter1 = prompt("Enter a latter: ")
latter1 =latter1.toLowerCase();
switch(latter1)
{
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
document.write("vawal");
    break;
    
default:
document.write("consonant");
  
}


//Function for cllick to source code

document.addEventListener('DOMContentLoaded', function () {
  const srcBtn = document.getElementById('srcBtnId');
  const content = document.getElementById('contentId');

  srcBtn.addEventListener('click', function () {
      if (content.style.display === 'none') {
          content.style.display = 'block';
      } else {
          content.style.display = 'none';
      }
  });
});