var imgSrc = ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMFdHQTRI9Su2yIs3zr2sNklT4q3W2IyHqaU9Gv-fTULvtr6t9-XocYZnan4dOzP66osGIQtK4WJaHI38f26sYdV9Svzhrt_TUZ0N2Mr8XWJNIcL6K9FbDeL18gXMqFMY4-XWpXS3rxCCOOHRcIhBetgZBm3lDUu6oP-aefeVC2e5avWPw-YnmTD1X1G5J/s4160/IMG20220826155714.jpg","/header-footer/page/img/Army MD Joynal Abydin.jpg", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTaM_Go54EGHuP1R-6QSWGvuANbH9ONcKSk5Y9r2Jrc958dilNg9a5CLSrAlRc7s40v-SDmxBfqiCeq3JFJIOXs6E2NY3Ls3KmLBvIPNn0u6FtWcTyaIUC0o1glwZScvg_N3hw4mddiL6Te44nXYtOEMxSvDeUAMWVaG3OnWliP__GwhgvfuUFrJ55NEbm/s4160/IMG20231026202925.jpg","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6HVZjC55kmXMuAVHAPKl1N0r4HXzWCu31LsVvIXV4HDVxsJd9lL7UVBriiDObPH1ywqGW4JcBqaVMGGjv3oeyDzX7qTeR8x68ZOCZnDc4IK8G-d7hIv1uVFldWRCIDkQ6n5lJfdsrruqLrbqvmSaL1QSw7Q_kRx0RrOcvluKQuD8GFrbABZtQed7bVxOu/s300/IMG_20230816_004339%20(1).jpg"];
var imgTag = document.getElementById('img');

var count = 0;

function next(){
count++
if (count>=imgSrc.length) {
    count=0;
    imgTag.src = imgSrc[count];
} else {
    imgTag.src = imgSrc[count];
}
}

function previous(){
    count--
    if (count < 0) {
        count = imgSrc.length - 1;
        imgTag.src = imgSrc[count];
    } else {
        imgTag.src = imgSrc[count]; 
    }
}

//2nd slide start here
var photos = ["/Learning JS/Part Three/c-40 image slider/photos/photo1.avif","/Learning JS/Part Three/c-40 image slider/photos/photo2.avif","/Learning JS/Part Three/c-40 image slider/photos/photo3.avif","/Learning JS/Part Three/c-40 image slider/photos/photo4.avif","/Learning JS/Part Three/c-40 image slider/photos/photo5.avif","/Learning JS/Part Three/c-40 image slider/photos/photo6.avif","/Learning JS/Part Three/c-40 image slider/photos/photo7.avif","/Learning JS/Part Three/c-40 image slider/photos/photo8.avif"];

var pTag = document.querySelector('#photo');

var num = 0;

function nex(){
    num++
    if (num>=photos.length) {
        num = 0;
        pTag.src = photos[num];        
    } else {
        pTag.src = photos[num];     
    }
}

function prev(){
    num--
    if (num<=0) {  
        num= photos.length - 1;
        pTag.src = photos[num];
    } else {
        pTag.src = photos[num];
    }
}