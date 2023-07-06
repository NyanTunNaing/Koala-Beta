const alert_password_error = document.querySelector('.alert--password--error');
const alert_success = document.querySelector('.alert--success');
const alert_close = document.querySelectorAll('.alert--close') ;

var favouriteBtn = document.getElementsByClassName('add--favourite')[0];
var click = true;

var favouriteItemNameList = [];
var favouriteItemImgList = [];
var favouriteItemPriceList = [];

favouriteBtn.addEventListener('click',()=>{
    if (click){
        var favouriteBtnParent = favouriteBtn.parentElement.parentElement.parentElement.parentElement.parentElement;
        var imgLink = favouriteBtnParent.getElementsByClassName('detail--img')[0].src;
        var clothName = favouriteBtnParent.getElementsByClassName('title')[0].innerText;
        var price = favouriteBtnParent.getElementsByClassName('price')[0].innerText;

        favouriteItemNameList.push(clothName);
        favouriteItemImgList.push(imgLink);
        favouriteItemPriceList.push(price);

        window.sessionStorage.setItem('link',JSON.stringify(favouriteItemImgList));
        window.sessionStorage.setItem('name',JSON.stringify(favouriteItemNameList));
        window.sessionStorage.setItem('price',JSON.stringify(favouriteItemPriceList));
        alert_success.classList.add('show--alert');
        click = false;
    }
    else{
        alert_password_error.classList.add('show--alert');

    }
})


// Close alert box
alert_close[0].addEventListener('click',()=>{
    alert_success.classList.remove('show--alert');
});

alert_close[1].addEventListener('click',()=>{
    alert_password_error.classList.remove('show--alert');
});