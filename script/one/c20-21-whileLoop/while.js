// this is conseft of while loop
x=1; //starting value
while (x<=10) //while part/ conditions
{
  document.write(' '+x+'&nbsp &nbsp &nbsp');
  x=x+1; // update part and print command 
}

//do while loop
i=11; // starting value if condition last so it run one time, but while loop never print anything 
do {
  document.write('<br><br><br> do while loop <br>'+i);
 i=i+1;
} while (i<=10);


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
