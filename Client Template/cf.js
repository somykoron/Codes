(function () {
    var $;
    var FEHelper = {
        // waitfor convert.$
        doWhenJqueryLoaded: function (todoWhenLoaded) {
            var waitForjQuery = setInterval(function () {
                if (typeof window.convert != 'undefined' && typeof window.convert.$ != undefined) {
                    clearInterval(waitForjQuery);
                    todoWhenLoaded();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(waitForjQuery);
            }, 10000);
        },
        // waitfor element
        doWhenElementLoaded: function (element, todoWhenLoaded) {
            var waitForElement = setInterval(function () {
                if (convert.$(element).length > 0) {
                    clearInterval(waitForElement);
                    todoWhenLoaded();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(waitForElement);
            }, 10000);
        },
    };

    function init() {
        convert.$('#shopify-section-cart-template .section-header').after('All orders ship fast directly from us in Phoenix, Arizona, to over 160 countries!');
        convert.$('.cart__shipping').after('All orders ship fast directly from us in Phoenix, Arizona, to over 160 countries!');
    }
    FEHelper.doWhenJqueryLoaded(function () {
        FEHelper.doWhenElementLoaded(
            '#shopify-section-cart-template .section-header',
            init,
            50,
            10000
        );
    });
})();