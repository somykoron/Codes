window.addEventListener("scroll",function(){
  console.log(window.scrollY);
  document.querySelector("body").cli
});

document.querySelector("body").addEventListener("click",function(){
  var position = document.querySelector("#shopify-section-fathersDayBlade").offsetTop;
  window.scrollTo({
    top:position,
    left: 0,
    behavior: 'smooth'
  });
});