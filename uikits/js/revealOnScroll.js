window.addEventListener('scroll',revealElements);


function revealElements(){
    var revealRight = document.querySelectorAll('.reveal--right');
    for (let i=0; i < revealRight.length; i++){
        var windowHeight = window.innerHeight;
        var revealType = revealRight[i].getBoundingClientRect().top;
        var revealPoint = 250;
        if (revealType < windowHeight - revealPoint){
            revealRight[i].classList.add('active');
        }
        else {
            revealRight[i].classList.remove('active');
        }
    }

    var revealLeft = document.querySelectorAll('.reveal--left');
    for (let i=0; i < revealLeft.length; i++){
        var windowHeight = window.innerHeight;
        var revealType = revealLeft[i].getBoundingClientRect().top;
        var revealPoint = 250;
        if (revealType < windowHeight - revealPoint){
            revealLeft[i].classList.add('active');
        }
        else {
            revealLeft[i].classList.remove('active');
        }
    }

    var revealTop = document.querySelectorAll('.reveal--top');
    for (let i=0; i < revealTop.length; i++){
        var windowHeight = window.innerHeight;
        var revealType = revealTop[i].getBoundingClientRect().top;
        var revealPoint = -550;
        if (revealType < windowHeight - revealPoint){
            revealTop[i].classList.add('active');
        }
        else {
            revealTop[i].classList.remove('active');
        }
    }

    var revealBottom = document.querySelectorAll('.reveal--bottom');
    for (i=0;i<revealBottom.length;i++){
        var windowHeight = window.innerHeight;
        var revealType = revealBottom[i].getBoundingClientRect().bottom;
        var revealPoint = 150;
        if (revealType < windowHeight - revealPoint){
            revealBottom[i].classList.add('active');
        }
        else {
            revealBottom[i].classList.remove('active');
        }
    }

    var revealLeft = document.querySelectorAll('.reveal--left2');
    for (let i=0; i < revealLeft.length; i++){
        var windowHeight = window.innerHeight;
        var revealType = revealLeft[i].getBoundingClientRect().top;
        var revealPoint = 50;
        if (revealType < windowHeight - revealPoint){
            revealLeft[i].classList.add('active');
        }
        else {
            revealLeft[i].classList.remove('active');
        }
    }

    var revealTop2 = -550; 
    var revealTop = document.querySelectorAll('.reveal--top2');
    for (let i=0; i < revealTop.length; i++){
        var windowHeight = window.innerHeight;
        var revealType = revealTop[i].getBoundingClientRect().top;
        // var revealTop2 = -550;
        if (revealType < windowHeight - revealTop2){
            revealTop[i].classList.add('active');
        }
        else {
            revealTop[i].classList.remove('active');
        }
        revealTop2 += 100;
    }

    var revealTop3 = -550; 
    var revealTop = document.querySelectorAll('.reveal--top3');
    for (let i=0; i < revealTop.length; i++){
        var windowHeight = window.innerHeight;
        var revealType = revealTop[i].getBoundingClientRect().top;
        // var revealTop2 = -550;
        if (revealType < windowHeight - revealTop3){
            revealTop[i].classList.add('active');
        }
        else {
            revealTop[i].classList.remove('active');
        }
        if (window.innerWidth <= 380){
            revealTop3 = -550;
        }
        else {
            revealTop3 += 130;
        }
       
    }

}