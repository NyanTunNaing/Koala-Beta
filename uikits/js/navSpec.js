const lineWrapper = document.querySelector(".line--wrapper");
const navClose = document.querySelector(".navs--spec--close");
const navsSpec = document.querySelector(".navs--spec");
const navSpec = document.querySelectorAll(".nav--spec");
const navSpec1 = document.querySelector(".nav--spec1");
const navSpec2 = document.querySelector(".nav--spec2");
const navSpec3 = document.querySelector(".nav--spec3");
const navSpec4 = document.querySelector(".nav--spec4");
const navSpec5 = document.querySelector(".nav--spec5");
const navSpec6 = document.querySelector(".nav--spec6");
const navSpec7 = document.querySelector(".nav--spec7");
const navSpec8 = document.querySelector(".nav--spec8");
const sectionSs1 = document.querySelector(".section--ss1");
const sectionSs2 = document.querySelector(".section--ss2");
const sectionSs3 = document.querySelector(".section--ss3");
const sectionSs4 = document.querySelector(".section--ss4");
const sectionSs5 = document.querySelector(".section--ss5");
const sectionSs6 = document.querySelector(".section--ss6");
const sectionSs7 = document.querySelector(".section--ss7");
const sectionSs8 = document.querySelector(".section--ss8");


lineWrapper.addEventListener('click', () => {
    navsSpec.classList.add("open");
});


navClose.addEventListener('click', () => {
    navsSpec.classList.remove("open");
});


// nav action
navSpec1.addEventListener("mouseover", () => {
    sectionSs1.classList.add("ss--expand");
    sectionSs2.classList.remove("ss--expand");
    sectionSs3.classList.remove("ss--expand");
    sectionSs4.classList.remove("ss--expand");
    sectionSs5.classList.remove("ss--expand");
    sectionSs6.classList.remove("ss--expand");
    sectionSs7.classList.remove("ss--expand");
    sectionSs8.classList.remove("ss--expand");
});

navSpec2.addEventListener("mouseover", () => {
    sectionSs1.classList.remove("ss--expand");
    sectionSs2.classList.add("ss--expand");
    sectionSs3.classList.remove("ss--expand");
    sectionSs4.classList.remove("ss--expand");
    sectionSs5.classList.remove("ss--expand");
    sectionSs6.classList.remove("ss--expand");
    sectionSs7.classList.remove("ss--expand");
    sectionSs8.classList.remove("ss--expand");
});

navSpec3.addEventListener("mouseover", () => {
    sectionSs1.classList.remove("ss--expand");
    sectionSs2.classList.remove("ss--expand");
    sectionSs3.classList.add("ss--expand");
    sectionSs4.classList.remove("ss--expand");
    sectionSs5.classList.remove("ss--expand");
    sectionSs6.classList.remove("ss--expand");
    sectionSs7.classList.remove("ss--expand");
    sectionSs8.classList.remove("ss--expand");
});

navSpec4.addEventListener("mouseover", () => {
    sectionSs1.classList.remove("ss--expand");
    sectionSs2.classList.remove("ss--expand");
    sectionSs3.classList.remove("ss--expand");
    sectionSs4.classList.add("ss--expand");
    sectionSs5.classList.remove("ss--expand");
    sectionSs6.classList.remove("ss--expand");
    sectionSs7.classList.remove("ss--expand");
    sectionSs8.classList.remove("ss--expand");
});

navSpec5.addEventListener("mouseover", () => {
    sectionSs1.classList.remove("ss--expand");
    sectionSs2.classList.remove("ss--expand");
    sectionSs3.classList.remove("ss--expand");
    sectionSs4.classList.remove("ss--expand");
    sectionSs5.classList.add("ss--expand");
    sectionSs6.classList.remove("ss--expand");
    sectionSs7.classList.remove("ss--expand");
    sectionSs8.classList.remove("ss--expand");
});

navSpec6.addEventListener("mouseover", () => {
    sectionSs1.classList.remove("ss--expand");
    sectionSs2.classList.remove("ss--expand");
    sectionSs3.classList.remove("ss--expand");
    sectionSs4.classList.remove("ss--expand");
    sectionSs5.classList.remove("ss--expand");
    sectionSs6.classList.add("ss--expand");
    sectionSs7.classList.remove("ss--expand");
    sectionSs8.classList.remove("ss--expand");
});

navSpec7.addEventListener("mouseover", () => {
    sectionSs1.classList.remove("ss--expand");
    sectionSs2.classList.remove("ss--expand");
    sectionSs3.classList.remove("ss--expand");
    sectionSs4.classList.remove("ss--expand");
    sectionSs5.classList.remove("ss--expand");
    sectionSs6.classList.remove("ss--expand");
    sectionSs7.classList.add("ss--expand");
    sectionSs8.classList.remove("ss--expand");
});

navSpec8.addEventListener("mouseover", () => {
    sectionSs1.classList.remove("ss--expand");
    sectionSs2.classList.remove("ss--expand");
    sectionSs3.classList.remove("ss--expand");
    sectionSs4.classList.remove("ss--expand");
    sectionSs5.classList.remove("ss--expand");
    sectionSs6.classList.remove("ss--expand");
    sectionSs7.classList.remove("ss--expand");
    sectionSs8.classList.add("ss--expand");
});


navSpec.forEach(link=>{
    link.addEventListener("click",()=>{
        navsSpec.classList.remove("open");
    })
});