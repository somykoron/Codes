(function () {
    try {
        var debug = 0;
        var variation_name = "";

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

        function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (window.jQuery && window.jQuery.fn) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }

        function waitForSlick(trigger) {
            let interval = setInterval(() => {
                if (typeof $.fn.slick != 'undefined') {
                    clearInterval(interval);
                    trigger();
                }
            }, 50)
            setTimeout(() => {
                clearInterval(interval)
            }, 15000)
        }

        function addScript() {
            var link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
            document.getElementsByTagName('head')[0].appendChild(link);
            var bmScript = document.createElement('script');
            bmScript.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
            document.getElementsByTagName('head')[0].appendChild(bmScript);
        }

        var sliderContent = [{
            img: "https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/E-Cloth/12+B/image-1.png",
            header: "Lab-tested to remove over 99% of bacteria",
            text: "You, your loved ones, and your pets are left with clean surfaces everywhere in your home.",
        }, {
            img: "https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/E-Cloth/12+B/image-2.png",
            header: "Clean home, clean earth",
            text: "Eco-savvy cloths that actually work without additional cleaners. No more plastic bottles, old rags, or wasteful disposables.",
        }, {
            img: "https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/E-Cloth/12+B/image-3.png",
            header: "Save money on cleaning supplies",
            text: "	E-Cloths last up to 300 washes. Simply clean, rinse, and re-use with zero waste.",
        }]

        function for_mobile() {
            //insert html
            var slider =

                `<div class="bm-slider-section bm-mobile">
                  <div class="bm-slider-title">
                      <h2>Better for your home, your family, and our planet</h2>
                  </div>
                    <div class="bm-arrow">
                    <div class="bm-slider-arrow-prev bm-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" fill="none"><path d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1ZM26.891 18.1612C27.0356 18.3332 27.0343 18.5826 26.8989 18.7523L26.8419 18.812L20.9054 24L26.8419 29.188C27.0317 29.3539 27.0537 29.6453 26.891 29.8388C26.7464 30.0108 26.5045 30.0477 26.3192 29.9372L26.2527 29.8889L20.3162 24.7008C20.281 24.6701 20.2481 24.6366 20.218 24.6007C19.9176 24.2434 19.932 23.7194 20.2346 23.38L20.3162 23.2992L26.2527 18.1111C26.4425 17.9452 26.7283 17.9677 26.891 18.1612Z" fill="#6C7189"/></svg>
                    </div>
                    <div class="bm-slider-arrow-next">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" fill="none"> <path d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM24 1C36.7025 1 47 11.2975 47 24C47 36.7025 36.7025 47 24 47C11.2975 47 1 36.7025 1 24C1 11.2975 11.2975 1 24 1ZM21.109 18.1612C20.9644 18.3332 20.9657 18.5826 21.1011 18.7523L21.1581 18.812L27.0946 24L21.1581 29.188C20.9683 29.3539 20.9463 29.6453 21.109 29.8388C21.2536 30.0108 21.4955 30.0477 21.6808 29.9372L21.7473 29.8889L27.6838 24.7008C27.719 24.6701 27.7519 24.6366 27.782 24.6007C28.0824 24.2434 28.068 23.7194 27.7654 23.38L27.6838 23.2992L21.7473 18.1111C21.5575 17.9452 21.2717 17.9677 21.109 18.1612Z" fill="#6C7189"/></svg>
                    </div>
                  </div>
                  <div class="bm-slider-add"></div>
                </div`;
            document.querySelector(".product_section").insertAdjacentHTML("afterend", slider);



            $.each(sliderContent, function (index, item) {
                var item =
                    `<div class="bm-item">
                    <div class="bm-wrapper">
                        <div class="bm-image">
                            <img src="${item.img}" alt="">
                        </div>
                        <div class="bm-content">
                            <div class="bm-review-header"><h4>${item.header}</h4></div>
                            <div class="bm-text"><p>${item.text}</p></div>
                        </div>
                     </div>
                  </div>`
                $('.bm-slider-add').append(item);
                console.log(index)
            })
            //slick slider
            var slider = $('.bm-slider-add').slick({
                infinite: false,
                dots: true,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '.bm-slider-arrow-prev',
                nextArrow: '.bm-slider-arrow-next',
                responsive: [{
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            focusOnSelect: true,
                            centerMode: true,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            centerMode: true,
                            focusOnSelect: true,
                        }
                    }
                ]
            });

            //This event will disable the left arrow & right arrow
            slider.on('afterChange', function (event, slick, currentSlide) {
                if (currentSlide == 0) {
                    $(".bm-slider-arrow-prev").addClass("bm-opacity");
                    $(".bm-slider-arrow-next").removeClass("bm-opacity");
                } else if (currentSlide == 1) {
                    $(".bm-slider-arrow-prev").removeClass("bm-opacity");
                    $(".bm-slider-arrow-next").removeClass("bm-opacity");
                } else {
                    $(".bm-slider-arrow-prev").removeClass("bm-opacity");
                    $(".bm-slider-arrow-next").addClass("bm-opacity");
                }
            });
        }

        function init() {

        }
        onLoadJqueryLibrary(function () {
            waitForElement("head", addScript, 50, 15000);
            waitForSlick(function () {
                waitForElement("#BVRRSearchContainer", init, 50, 15000);
            })
        }, 50, 15000)

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();