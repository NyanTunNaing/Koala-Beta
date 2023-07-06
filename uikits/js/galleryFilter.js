const btns = document.querySelectorAll('.gallery--nav p');
const imgs = document.querySelectorAll('.image--wrapper .image--box img');
const imgDivs = document.querySelectorAll('.image--wrapper .image--box');

for (let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',filterImg);
}
function setActiveBtn(e){
    btns.forEach(btn=>{
        btn.classList.remove('btn--clicked');
    })
    e.target.classList.add('btn--clicked');
}
function filterImg(e){
    setActiveBtn(e);
    imgs.forEach(img=>{
        img.classList.remove('img--shrink');
        img.classList.add('img--expand');

        const imgType = parseInt(img.dataset.img);
        const btnType = parseInt(e.target.dataset.btn);

        if(imgType!==btnType){
            img.classList.remove('img--expand');
            img.classList.add('img--shrink');
        }
    });
    imgDivs.forEach(div=>{
        div.classList.remove('div--none');
        div.classList.add('div--block');

        const divType = parseInt(div.dataset.div);
        const btnType = parseInt(e.target.dataset.btn);

        if(divType!==btnType){
            div.classList.remove('div--block');
            div.classList.add('div--none');
        }
    });
}
btns[0].addEventListener('click',(e)=>{
    setActiveBtn(e);
    imgs.forEach(img=>{
        img.classList.remove('img--shrink');
        img.classList.add('img--expand');
    });
    imgDivs.forEach(div=>{
        div.classList.remove('div--none');
        div.classList.add('div--block');
    })
});