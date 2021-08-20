if (!window.dfc) {
    window.dfc = () => {
        return 1;
    };
    dfc.jq = (callback) => {
        const $ = window.jQuery;
        if ($ && $.fn && $.fn.jquery) callback($);
        else window.requestAnimationFrame(dfc.jq.bind(dfc, callback));
    };
    dfc.dataLayer = (callback) => {
        const dataLayer = window.dataLayer;
        if (dataLayer) callback(dataLayer);
        else window.requestAnimationFrame(dfc.dataLayer.bind(dfc, callback));
    };
    dfc.raf = (selector, callback) => {
        const $ = window.jQuery;
        const $els = $(selector);
        const found = !!$els.length;
        // dfc.log(selector, found);
        if (found) callback($els);
        else window.requestAnimationFrame(dfc.raf.bind(dfc, selector, callback));
    };
    dfc.addStyle = (css) => {
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');
        head.appendChild(style);
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
    };
}
dfc.jq(($) => {
    if (!$('body').length) return;

    function init() {
        //starts from here
    }
    dfc.raf('body', init);
});
