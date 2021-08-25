$(document).ready(function () {
    $('.nav-sidebar .nav-link').hover(function () {
        $('.nav-sidebar').toggleClass('onHover')
    })

    var md = new MobileDetect(window.navigator.userAgent);
    if (md.is('ios')) {
        $('body').addClass('ios')
    }

    $(document).click(function (event) {
        var clickover = $(event.target)
        if (!clickover.is('.navbar') && !clickover.is('.navbar-toggler') && clickover.is('.navbar-collapse')) {
            $('.navbar-toggler').trigger('click')
        }
    });

    //Handle textbox
    $('.input-group input').focus(function () {
        $(this).parent().addClass('active');
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        }
    });

});