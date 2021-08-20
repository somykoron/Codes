(function () {
    try {
        /*-----------------------
      section data 
    -----------------------*/
        var BMHelper = this;
        //wait for element to load
        BMHelper.doWhenElementLoaded = function (
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
        BMHelper.init = function () {

        };
        BMHelper.doWhenElementLoaded('body div[id="#hero"]', BMHelper.init, 50, 10000);
    } catch (err) {
        // console && console.log(err);
    }
})();


(function () {
    var $ = window.jQuery;
    var FEHelper = {
        doWhenJqueryLoaded: function (todoWhenLoaded) {
            var waitForjQuery = setInterval(function () {
                if (typeof window.jQuery != 'undefined') {
                    clearInterval(waitForjQuery);
                    todoWhenLoaded();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(waitForjQuery);
            }, 5000);
        },
        onLoadElement: function (selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelectorAll &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        },
    };

    function init() {
        
    }
    FEHelper.doWhenJqueryLoaded(function () {
        FEHelper.onLoadElement(
            "button[title='BUY COURSE']#product-addtocart-button",
            init,
            50,
            10000
        );
    });
})();