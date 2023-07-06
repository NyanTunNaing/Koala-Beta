var imgLink = JSON.parse(window.sessionStorage.getItem('link'));
var itemName = JSON.parse(window.sessionStorage.getItem('name'));
var itemPrice = JSON.parse(window.sessionStorage.getItem('price'));
const profileNameTag = document.getElementById('profile--name');
const profileImgTag = document.getElementById('profileImg');

// from profileSetup.js
const profileData = JSON.parse(sessionStorage.getItem('profileData'));

document.addEventListener('DOMContentLoaded',()=>{
    profileImgTag.src = profileData.imageSrc;
    profileNameTag.innerText = profileData.name;
    console.log(profileData)
    if (itemName == null){
        var noItemBox = document.createElement('div');
        var description = document.createElement('p');
        noItemBox.classList.add('empty--favourite--box');
        description.innerHTML = "You don't have any favourite items.Go to cloth detail to get your favourites.";
        description.classList.add('empty--box--description')
        noItemBox.append(description);
        var favouriteBox = document.getElementsByClassName('fav--cards--wrapper')[0];
        favouriteBox.append(noItemBox);
        var addNowBtn = document.createElement('button');
        addNowBtn.classList.add('add--favourite--btn');
        addNowBtn.innerText = "Add favourite now";
        favouriteBox.append(addNowBtn);
        favouriteBox.addEventListener('click',()=>{
            location.href = 'shop.html'
        })
    }
    else{
        for(var i=0;i<imgLink.length;i++){
            var itemBox = document.createElement('div');
            itemBox.classList.add('fav--card');
            var itemBoxInner =  `<div class="image--box">
                                <a href="">
                                <img class="product--img" src=${imgLink[i]} alt="">
                                </a>
                            </div>
                            <div class="cloth--rating">
                                <i class="fa-solid fa-star color--main"></i>
                                <i class="fa-solid fa-star color--main"></i>
                                <i class="fa-solid fa-star color--main"></i>
                                <i class="fa-solid fa-star color--main"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <h3 class="product--title title">${itemName[i]}</h3>
                            <p class="cloth--price">$ <span class="fontNumber unit--price">${itemPrice[i]}</span></p>
                            <p class="cloth--sale"><span class="fontNumber">30</span>% off</p>
                            <div class="cloth--colors">
                                <div class="color--black">
                                <span></span>
                                </div>
                                <div class="color--black">
                                <span></span>
                                </div>
                            </div>
                            <div class="clothes--card--actions">
                                <a href="./clothDetail.html" class="active--btn cloth--card--btn">
                                View Details
                                </a>
                                <a href="./shop.html" class="active--btn cloth--card--btn">
                                Shop
                                </a>
                            </div>`
            itemBox.innerHTML = itemBoxInner;
            var favouriteBox = document.getElementsByClassName('fav--cards--wrapper')[0];
            favouriteBox.append(itemBox);
            }
        }
})


// For Logout Section

var flag = window.sessionStorage.getItem('flag');
var alert_comfirm = document.getElementsByClassName('alert--comfirm')[0];
const logoutBtn = document.getElementsByClassName('logout--box')[0];
const comfirmBtn = document.querySelectorAll('.confirm--btn');
logoutBtn.addEventListener('click',()=>{
    
    alert_comfirm.classList.add('show--alert');
    comfirmBtn[0].addEventListener('click',()=>{
        flag = 0;
        window.sessionStorage.setItem('flag',flag);
        alert_comfirm.classList.remove('show--alert')
        setTimeout(()=>{
            location.replace('../home.html');
        },1000)
    })
    comfirmBtn[1].addEventListener('click',()=>{
        alert_comfirm.classList.remove('show--alert')
    })
})