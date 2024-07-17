var clockBtn = document.getElementById('clock-btn');
var timePara = document.getElementById('time-para');
var datePara = document.getElementById('date-para');

clockBtn.addEventListener('click', function (){
  if (timePara.style.display === 'none' || datePara.style.display === 'none') {
   timePara.style.display = 'block'
   datePara.style.display = 'block'
  } else {
   timePara.style.display = 'none' 
   datePara.style.display = 'none'
  }
 
 setInterval(showTime, 100);
 
  function showTime() {
  var time = new Date();
  var hour = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  am_pm = 'AM';
   
  	// Setting time for 12 Hrs format
 	if (hour >= 12) {
 	  if (hour > 12) hour -= 12;
 	  am_pm = "PM";
 	} else if (hour == 0) {
 	  hour = 12;
 	  am_pm = "AM";
 	}
 	
 hour = hour < 10 ? '0'+hour : hour;
 min = min < 10?  '0'+min:min;
 sec = sec<10?'0'+sec:sec;
 
  var formateTime = hour+': '+min+': '+sec+': '+am_pm;
  timePara.innerHTML = formateTime;
  }
 showTime();
});

function date() {
  var dat = new Date();
  var day = dat.getDate();
  var mnt = dat.getMonth();
  var yer = dat.getFullYear();
  
  var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
 day = day < 10 ? '0'+day : day;
  var dateFormate = day+' '+month[mnt]+', '+yer;
  
 datePara.textContent = dateFormate;
}
date();