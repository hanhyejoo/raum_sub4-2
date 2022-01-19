$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('.top, .bottom').fadeIn();
    } else {
        $('.top, .bottom').fadeOut();
    }
});



