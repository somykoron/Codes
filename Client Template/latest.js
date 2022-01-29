(function () {
  var debug = 0;
  var variation_name = "";

  if (window.location.href.indexOf('qa-debug') > -1 || localStorage.getItem('qa_debug')) {
    debug = 1;
    localStorage.setItem('qa_debug', true);
    console.log('>> ' + variation_name);
  }

  function debugMessage(message) {
    if (debug) {
      console.log(message);
    }
  }

  try {
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }
    function init() {
      debugMessage(">> init");
    };

    waitForElement(".Heading.u-h6", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();