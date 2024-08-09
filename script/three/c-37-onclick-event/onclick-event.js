function once() {
// alert('hi');
 document.getElementById('para').innerHTML = 'this paragraph i selected by get element by id'
}

function two() {
document.querySelector('.tw').innerHTML = 'This is an example of querySelector using class.'
}



// Function to change the image source to Joy's image
function joy(){
    var pic = document.querySelector('#picId');
    pic.src = "/page/img/Army MD Joynal Abydin.jpg";
  }
  
  // Function to change the image source to Jannat's image
  function jannat(){
    var pic = document.querySelector('#picId');
    // Change the source to Jannat's image
    pic.src = "/Learning JS/Part Three/c-37 onclick event/Jannat.jpg";
  }

  //Source Code Show and hide button function
document.addEventListener('DOMContentLoaded', function () {
    const btnId = document.getElementById('srcBtnId');
    const content = document.getElementById('contentId');

    btnId.addEventListener('click', function () {
        // Toggle the display of the content
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});