(function () {
    try {
        /*-----------------------
      section data 
    -----------------------*/
        var CreHelper = this;
        //wait for element to load
        CreHelper.doWhenElementLoaded = function (
            selector,
            trigger,
            delayInterval,
            delayTimeout
        ) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelectorAll(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        };
        /*-----------------------
        init is the main controller
        --------------------*/
        CreHelper.init = function () {
            
        };
        CreHelper.doWhenElementLoaded('body div[id="#hero"]', CreHelper.init, 50, 10000);
    } catch (err) {
        // console && console.log(err);
    }
})();