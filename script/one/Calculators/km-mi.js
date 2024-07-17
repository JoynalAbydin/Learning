var km = parseFloat(prompt("Enter km or ml: "));
var k2m = km*0.62137119; //কিলোমিটার থেকে মাইল বের করার সুত্র
document.write("Kilometre To Mile = "+ k2m.toFixed(2)+"<br>");
var m2k = km*1.609344;  //মাইল থেকে কিলোমিটার বের কার সুত্র
document.write("Mile To Kilometre = "+m2k.toFixed(2));



document.addEventListener('DOMContentLoaded', function () {
    const showContentBtn = document.getElementById('showContentBtn');
    const contentDiv = document.getElementById('content');

    showContentBtn.addEventListener('click', function () {
        // Toggle the display of the content
        if (contentDiv.style.display === 'none') {
            contentDiv.style.display = 'block';
        } else {
            contentDiv.style.display = 'none';
        }
    });
});
