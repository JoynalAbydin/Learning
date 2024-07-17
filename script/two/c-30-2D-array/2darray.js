// function hightMarks(nameMarks) {
// var higMark = nameMarks[0][0];
// var higMark = nameMarks[0][1];

// for (let i = 1; i < nameMarks.length; i++) {
// if (higMark<nameMarks[i][1]) {
//     higMark = nameMarks[i][1];
//     higMark = nameMarks[i][0];
//          }
//     }
//     return higMark;
// }
// var nameMarks = [
//     ['Joynal',99],
//     ['Jannat',95],
//     ['Aizak',80],
//     ['Manik',75],
//     ['Jahid',94],
// ];
// var result = hightMarks(nameMarks);
// document.write(result);
// console.log(result);

function hightMarks(nameMarks) {
    var highestMark = nameMarks[0][1];
    var highestName = nameMarks[0][0];

    for (let i = 1; i < nameMarks.length; i++) {
        if (highestMark < nameMarks[i][1]) {
            highestMark = nameMarks[i][1];
            highestName = nameMarks[i][0];
        }
    }
    return [highestName, highestMark];
}

var nameMarks = [
    ['Joynal', 99],
    ['Jannat', 95],
    ['Aizak', 80],
    ['Manik', 175],
    ['Jahid', 94],
];

var result = hightMarks(nameMarks);
document.write("Name: " + result[0] + ", Highest Mark: " + result[1]);



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