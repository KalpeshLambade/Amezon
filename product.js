window.onload=function(){
    var dataFromLS =JSON.parse(localStorage.getItem("product"));
    var divFromHtml =document.getElementById("display-bot-right");

    var add =[];
    for(var i=0 ;i<dataFromLS.length ;i++){
        add += `<div><div><img src="${dataFromLS[i].image}" alt="product-image"></div><p>${dataFromLS[i].name}</p><p>${dataFromLS[i].price}</p><div class="prime">
        <p>Save 5% with coupon (limited sizes/colours)</p>
        <div>
          <img
            src="https://www.nicepng.com/png/detail/115-1159983_amazon-prime-logo-prime-amazon.png"
            alt="prime logo"
          />
        </div>
        <p>FREE Delivery by Amazon</p>
      </div></div>`
    }

    divFromHtml.innerHTML =add;
};