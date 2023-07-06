var flag = window.sessionStorage.getItem('flag'); 
var clothDetail_login = document.getElementsByClassName('clothDetail--login')[0];
var profile_icon =  document.getElementsByClassName('profile--icon--after--login')[0];
var profile_imgSrc = document.querySelector('.profile--icon--after--login img');
const profileData = JSON.parse(sessionStorage.getItem('profileData'));//from profileSetup.js

// for cloth detail template

const clothDetailImgTag = document.getElementsByClassName('detail--img')[0];
const clothTitleTag = document.getElementsByClassName('title')[0];
const priceTag = document.getElementsByClassName('price')[0];

const clothDetail = JSON.parse(sessionStorage.getItem('clothDetail'));

const urlTextTag = document.getElementsByClassName('url--bold')[0];

document.addEventListener('DOMContentLoaded',()=>{
    if (flag==1){
        clothDetail_login.classList.add('after--login')
        profile_imgSrc.src = profileData.imageSrc;
        profile_icon.classList.add('show--icon');
    }

    // for cloth detail template

    urlTextTag.textContent = clothDetail.name;

    clothTitleTag.textContent = clothDetail.name;
    clothDetailImgTag.src = clothDetail.src;
    priceTag.textContent = clothDetail.price;
})