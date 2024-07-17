const from = document.querySelector('#form');
const name = form.querySelector('#name');
const email = form.querySelector('#email');
const password = form.querySelector('#password');


from.addEventListener('submit', submitForm);

function submitForm(formEvent) {
  formEvent.preventDefault();
  // console.log(name.value);
  // console.log(email.value);
  // console.log(password.value);
 
  // Creating a  object to send data backind
  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
   };
   console.log(userInfo);

   name.value="";
   email.value="";
   password.value="";
}
