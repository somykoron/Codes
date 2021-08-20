function ajax_complete() {
    const send = XMLHttpRequest.prototype.send; //Need to check it
    XMLHttpRequest.prototype.send = function () {
        this.addEventListener("load", function () {
            if ((this.responseURL == "https://www.renogy.com/cart.php" && this.status == 200) || (this.responseURL == "https://www.renogy.com/api/storefront/checkout-settings" && this.status == 200)) {}
        });
        return send.apply(this, arguments);
    };
}