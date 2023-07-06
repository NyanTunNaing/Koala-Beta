var itemList = JSON.parse(window.sessionStorage.getItem('itemList'))
var priceList = JSON.parse(window.sessionStorage.getItem('priceList'));
var quantityList = JSON.parse(window.sessionStorage.getItem('quantityList'));
var total = window.sessionStorage.getItem('total');

document.addEventListener("DOMContentLoaded",function(){
    for(var i=0; i< itemList.length; i++){
        var boxContainer = document.createElement('div');
        boxContainer.classList.add('bouncher--item');
        var content = `<h5>${itemList[i]}</h5>
                       <p><span class="fontNumber">${quantityList[i]}</span></p>
                       <span>$ <span class="fontNumber">${priceList[i]}</span></span>`
        boxContainer.innerHTML = content;
        var boucherDiv = document.getElementsByClassName('bouncher--items')[0];
        boucherDiv.append(boxContainer);

        var totalElement = document.getElementsByClassName('total')[0];
        totalElement.innerText = total;
    }
    
})
