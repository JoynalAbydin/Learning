// document.querySelector('a').innerHTML = 'Yahoo';

//link text change by tag name
document.getElementsByTagName('a')[0].innerHTML = 'Yahoo'

//link change  by query selector 
document.querySelector('a').href = 'www.google.com'

//creating element (like nav, ul, h1, p etc)
var exElement= document.createElement('h4');

//creating text (anything whic i want to saw)
var exText = document.createTextNode('This is example how to create and add element in specific place in html');

//exText কে exElement  (h4) এর ভিতরে  রাখা হয়েছে। 
exElement.appendChild(exText);


//Total location --- selected html location where i want to place this text
var myEx = document.getElementById('my-ex');


//এখানে exElement কে html ডিভের ভিতর রাখা হয়েছে 
myEx.appendChild(exElement);


//remove item from html
var remove = document.querySelectorAll('p')[2];
myEx.removeChild(remove);



var h1 = document.createElement('h1');
var italic = document.createElement('i');
var text1 = document.createTextNode('This is a heading which create and shift by js');
h1.appendChild(italic);
italic.appendChild(text1);

var position1 = document.querySelectorAll('h2')[0];
//another way to select (frist i sel div ten tag)
//var position1 = myEx.querySelector('h2');
myEx.insertBefore(h1, position1);