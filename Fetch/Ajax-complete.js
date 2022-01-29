function ajax_complete() {
    const send = XMLHttpRequest.prototype.send; //Need to check it
    XMLHttpRequest.prototype.send = function () {
        this.addEventListener("load", function () {
            if ((this.responseURL.indexOf("i.clarity.ms/collect")>-1 && this.status == 200) ){
                init();
            }
        });
        return send.apply(this, arguments);
    };
}