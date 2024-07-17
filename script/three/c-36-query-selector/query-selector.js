document.querySelector('#id').innerHTML = 'যখন id দ্বারা query select করব তখন id select এর আগে # ব্যাবহার করতে হবে।'

document.querySelector('.clas').innerHTML = 'যখন class দ্বারা query select করব তখন class select এর আগে . ব্যাবহার করতে হবে।'

document.querySelectorAll('p')[3].innerHTML = 'আনেক গুলা tag থেকে পরিবর্তন করতে এটা ব্যাব্যাবহার করতে হয় selectorAll ব্যাবহা করতে হয়'




// Change the text of the "Home" link
var homeLink = document.querySelector('#menu li:first-child a');
homeLink.textContent = "Bari";

// Change the text of the "Email" link
var emailLink = document.querySelector('#menu li:last-child ul li:first-child a');
emailLink.textContent = "Mail";