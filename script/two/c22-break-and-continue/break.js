for (var i = 1; i <= 100; i++) {
 if(i==10) // if == 10, লুপ কোথায় শেষ হবে তা  ইফ এর মাধ্যমে Assain হয়েছে।
 break; // if we use thise break before print, so its don’t print 10(but if we use thise break after print command it write with 10)
  document.write(' '+i);
  }
  
document.write("<br><br>"); // এটা প্রথম লুপ হতে দ্বিতীয় লুপকে আলাদা করার জন্য ব্যাবহার করা হয়েছে


for (var x = 1; x <= 100; x++) {
  document.write(' '+x);
  if (x==10) {
    break;
  }
}
//যেহেতু এখানে আগে ভেলু প্রিন্ট করা হয়েছে, সেজন্য এখানে 10 আগে প্রিন্ট হবে, তারপর লুপটা ব্রেক হবে।

document.write("<br><br>");

/*
k=1
while (k<=5) {
document.write(' '+k);
if(k==3);
continue;
k=k+1;
}
*/

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
