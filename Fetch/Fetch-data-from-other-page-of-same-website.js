//This is xhr call which is an ajax call
//we can grab the data from the other pages of same website
//'https://global.happyselfjournal.com/'
//This is the website we can grab data from cart page


//This function will make the response text to dom element
function adding_min_cart(data){
    var newDom = document.createElement('div');
    newDom.innerHTML = data;

    var parsenode = newDom.querySelector("section.fDay");
    document.querySelector("body").insertAdjacentElement("beforeend",parsenode);
}

function fetch_data() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            adding_min_cart(this.responseText);
        }
    });
    xhr.open("GET", "https://august.com/products/august-smart-lock-connect");
    xhr.send();
}

fetch_data();