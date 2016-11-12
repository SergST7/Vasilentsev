(function() {
    new WOW().init();


    $('.menu-link , .footer-menu-link').click(function() {
        var scrollSpeed = 1000; // Default scrolling speed
        console.log(this.hash);
        if (this.hash == '#features-section') {
            scrollSpeed = 1500;
        } else if (this.hash == '#pricing-section') {
            scrollSpeed = 2000;
        } else if (this.hash == '#newsletter-section') {
            scrollSpeed = 2500;
        }
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, scrollSpeed);
                return false;
            }
        }
    });

})();
