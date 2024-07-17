//general data type
var name = 'Joynal';
var id = 16009;
var department = 'dispas';
var codingExpreance = ['html','css','JS- Learning']
// document.write(name);


//object create 
var clerkRoom = {
name: 'Joynal',
id: 16009,
department: 'dispas',
codingExpreance: ['html','css','JS- Learning'],
}
//console.log(clerkRoom.codingExpreance[2]);


//adding a tamplets, function name should be start with capital later

function Clarks(name,id,department,codingExpreance) {
 this.name = name;
 this.id = id;
 this.department = department;
 this.codingExpreance = codingExpreance;
 
 //adding function inside constructor
 this.ntmc = function() {
  console.log(this.name);
  console.log(this.id);
  console.log(this.department);
  console.log(this.codingExpreance);
  
 }
 
 //another function for display something on html
 this.display = function () {
   document.write(this.name);
   document.write(this.id);
   document.write(this.department);
   document.write(this.codingExpreance);
 }
}

var dispasNtmc = new Clarks('Joynal',16009,'Dispatched',['html','css','JS- Learning']);
var adminNtmc = new Clarks('Aizakur',10000,'Head clark and admin','None');
var opsNtmc = new Clarks('Helal',99999,'OPS and Pa to Dir','Word');

console.log(dispasNtmc.department);//for specific name we like This.


opsNtmc.ntmc(); //calling function inside constructor

dispasNtmc.ntmc();

dispasNtmc.display();