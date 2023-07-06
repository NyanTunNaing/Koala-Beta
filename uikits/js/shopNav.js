const shopNav_btn = document.querySelector(".shop--logo i");
const shopNav = document.querySelector(".shop--nav");
const shopNav_close = document.querySelector(".shopNav--close");


shopNav_btn.addEventListener('click', () => {
    shopNav.classList.add("active")
});


shopNav_close.addEventListener('click', () => {
    shopNav.classList.remove("active");
})