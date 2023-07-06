window.addEventListener('scroll',function(){
    const nav = document.querySelector('.nav--wrapper');
    nav.classList.toggle('sticky',window.scrollY > 0);
});