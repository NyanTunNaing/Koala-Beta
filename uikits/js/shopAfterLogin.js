var flag = window.sessionStorage.getItem('flag');
var shop_login = document.getElementsByClassName('shop--login')[0];
var profile_icon =  document.getElementsByClassName('profile--icon--after--login')[0];
const profile_imgTag = document.querySelector('.profile--icon--after--login img');
const profileImgSrc = JSON.parse(sessionStorage.getItem('profileData'));


document.addEventListener('DOMContentLoaded',()=>{
    if (flag==1){
        shop_login.classList.add('after--login')
        // clothDetail_login.href = "./htmll files/profile.html";
        profile_imgTag.src = profileImgSrc.imageSrc;
        profile_icon.classList.add('show--icon');
    }
})