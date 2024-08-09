// Create a Date object for the current date and time
var currentDate = new Date();

// Get various components of the date and time
var year = currentDate.getFullYear();
//var month = currentDate.getMonth() + 1; // Months are zero-based (0 = January)


//var currentDate = new Date();
var options = { month: 'long' }; // Set the option to display the full month name
var monthName = currentDate.toLocaleDateString('en-US', options);
console.log(monthName); // Output: "February" (or ফেব্রুয়ারি in Bengali, depending on your browser's language settings)


var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

// Display the current date and time
console.log("Current Date and Time: " + currentDate);

// Format the date into a readable string
var formattedDate = day + " " + monthName + ", " + year + " " + hours + ":" + minutes + ":" + seconds;
console.log("Formatted Date: " + formattedDate);

document.write(formattedDate);


// Define the function to update the current date and time
function nDate() {
    var cDate = new Date();
    document.getElementById('clock').innerHTML = cDate;
}

// Call the function once to display the current date and time immediately
nDate();

// Call the function repeatedly every second using setInterval
setInterval(nDate, 1000);


