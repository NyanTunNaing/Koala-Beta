const humburger = document.querySelector(".humburger");
const navBtns = document.querySelector(".nav--btns");
const linkBtns = document.querySelectorAll(".nav--btns a");
const upBtn = document.querySelector(".upbtn");


window.addEventListener('scroll',function(){
    upBtn.classList.toggle('open',window.scrollY > 700);
});


linkBtns.forEach(link=>{
    link.addEventListener("click",()=>{
        link.parentElement.classList.remove("open");
    })
});

// After login signup , replace it with profile (Home Page)
var ShopOverview_btn = document.querySelectorAll(".shopOverview--btn");
var nav_Spec4 = document.querySelector(".nav--spec4");
var section_Ss4 = document.querySelector(".section--ss4");
var section_Ss8 = document.querySelector(".section--ss8");
var flag = window.sessionStorage.getItem('flag');
var after_login = document.querySelectorAll('.after--login');
document.addEventListener('DOMContentLoaded',()=>{
    if (flag==1){
        for (var i=0;i<after_login.length;i++){
            after_login[i].innerText = "Profile";
            var parentElement = after_login[i].parentElement;
            parentElement.href = "./htmll files/profile.html";
        }
        for (var i=0;i<ShopOverview_btn.length;i++){
            ShopOverview_btn[i].innerText = "Shop now";
            ShopOverview_btn[i].href = "./htmll files/shop.html";
        }
        nav_Spec4.href="./htmll files/shop.html"
        section_Ss4.src="./uikits/images/sectionss4.png"
        section_Ss8.src="./uikits/images/sectionss9.png"
    }
});