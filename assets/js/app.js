$('.sp-feed-filter-view-item').click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
});

$('.sp-feed-filter-sort-item').click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
});

$('.sp-feed-filter-view-small').click(function (e) {
    e.preventDefault();
    $('.sp-card-gallery.sp-feed-wrapper').removeClass('is-medium').removeClass('is-large').addClass('is-small');
});


$('.sp-feed-filter-view-medium').click(function (e) {
    e.preventDefault();
    $('.sp-card-gallery.sp-feed-wrapper').removeClass('is-small').removeClass('is-medium').addClass('is-medium');
});


$('.sp-feed-filter-view-large').click(function (e) {
    e.preventDefault();
    $('.sp-card-gallery.sp-feed-wrapper').removeClass('is-medium').removeClass('is-small').addClass('is-large');
});



window.onload = function () {
    feedCarouselWidthFunction();
    navbarHeightFunction();
}


window.onresize = function () {
    feedCarouselWidthFunction();
}


function feedCarouselWidthFunction() {
    var colMainWidth = $('.sp-column.is-main').width();
    var feedCarouselWidth = 'calc(' + colMainWidth + 'px + 1rem - 1px)';
    $('.sp-feed-carousel-wrapper').css('max-width', feedCarouselWidth);
}



function navbarHeightFunction() {
    navbarHeight = $('.sp-navbar').outerHeight(true);
    $('.sp-navbar-placeholder').css('height', navbarHeight);

}

$(document).ready(function () {
    var previousScroll = 0;
    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll < 0) {
            showTopNav();
        } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
            if (currentScroll > previousScroll) {
                hideNav();
            } else {
                showNav();
            }
            previousScroll = currentScroll;
        } else if ($(window).scrollTop() === 0) {
            showTopNav();
            previousScroll = currentScroll;
        }
    });

    function hideNav() {
        $(".sp-navbar").removeClass("is-scrollup").removeClass("is-scrolltop").addClass("is-scrolldown");
    }

    function showNav() {
        $(".sp-navbar").removeClass("is-scrolldown").removeClass("is-scrolltop").addClass("is-scrollup").addClass("is-scrolling");
    }

    function showTopNav() {
        $(".sp-navbar").removeClass("is-scrolldown").removeClass("is-scrollup").removeClass("is-scrolling").addClass("is-scrolltop");
    }
});