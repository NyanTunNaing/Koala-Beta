const imgDivs = document.querySelectorAll(".clothes--card--wrapper .clothes--card");
// const btns = document.querySelectorAll(".shop--features--inner p");
const btns = document.querySelectorAll(".shop--features--inner--overall p")

// clothes items filter
for (let i=4;i<btns.length; i++){
    btns[i].addEventListener('click',sortImage);
}

function setActiveBtn(e){
    btns.forEach(btn=>{
        btn.classList.remove('clothes--btn--clicked');
    });
    e.target.classList.add('clothes--btn--clicked');
}

function sortImage(e){
    setActiveBtn(e);
    imgDivs.forEach(divs=>{
        divs.classList.add('clothes--imgDiv--none');
        divs.classList.remove('clothes--imgDiv--block');
    
        const clothType = parseInt(divs.dataset.div);
        const btnType = parseInt(e.target.dataset.btns);

        if (clothType == btnType){
            divs.classList.add('clothes--imgDiv--block');
            divs.classList.remove('clothes--imgDiv--none');
        }
    });
}

btns[3].addEventListener('click',(e)=>{
    setActiveBtn(e);
    imgDivs.forEach(divs=>{
        divs.classList.remove('clothes--imgDiv--none');
        divs.classList.add('clothes--imgDiv--block');
    });
    
});


// Features filter 
for (let i=0;i< 3; i++){
    btns[i].addEventListener('click',sortCat);
}

function setActiveCategory(e){
    btns.forEach(cat=>{
        cat.classList.remove('clothes--btn--clicked');
    });
    e.target.classList.add('clothes--btn--clicked');
    
}

function sortCat(e){
    setActiveCategory(e);
    imgDivs.forEach(divs=>{
        divs.classList.add('clothes--imgDiv--none');
        divs.classList.remove('clothes--imgDiv--block');
    
        const clothType = parseInt(divs.dataset.cat);
        const categoryType = parseInt(e.target.dataset.btns);

        if (clothType == categoryType){
            divs.classList.add('clothes--imgDiv--block');
            divs.classList.remove('clothes--imgDiv--none');
        }
    });
}