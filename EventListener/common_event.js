var count = 0;
document.querySelectorAll(".featuredD__desktopGrid .featuredDCard--1 .featuredDCard__colorBlock button").forEach(function(item,index){
  item.addEventListener("mouseover",function(){
    item.closest(".featuredDCard__inner").querySelector("#product__title--1").innerHTML = count;
    count++;
  });
});

document.querySelector("body").insertAdjacentHTML("afterbegin",'<button class="bm-button">Our button</button>');

document.querySelector(".bm-button").addEventListener("click",function(){
  document.querySelector(".buy-now.purchaseButton.carousel-1").click();
  document.querySelector(".buy-now.purchaseButton.carousel-1").dispatchEvent(new Event("click"));
});


waitForElement(".buy-now.purchaseButton.carousel-1",function(){
  document.querySelector(".buy-now.purchaseButton.carousel-1").dispatchEvent(new Event("click"));
},50,15000);