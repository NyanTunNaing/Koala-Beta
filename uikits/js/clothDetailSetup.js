const clothImgDivs = document.querySelectorAll('.image--box > a');

const clothDetail = {
    name  : '',
    src   : '',
    price : ''
}

clothImgDivs.forEach((div)=>{
    div.addEventListener('click',()=>{
        const imgBox = div.parentElement;
        const clothCard = imgBox.parentElement;
        
        const clothImgTag = clothCard.getElementsByClassName('product--img')[0];
        const clothTitleTag = clothCard.getElementsByClassName('title')[0];
        const clothPriceTag = clothCard.getElementsByClassName('unit--price')[0];
        clothDetail.name = clothTitleTag.textContent;
        clothDetail.src = clothImgTag.src;
        clothDetail.price = clothPriceTag.textContent; 
        sessionStorage.setItem('clothDetail',JSON.stringify(clothDetail));
        // //parse in clothDetailAfterLogin.js
        console.log(clothDetail)
    })
})

