
$(function () {
   let topButton = $('#scrollTop');
   topButton.hide();

    $(window).scroll(function () {
       if ($(this).scrollTop() > 200) {
           topButton.fadeIn();
       } else {
           topButton.fadeOut();
       }
    });

    topButton.click(function (event) {
        event.preventDefault();
        $('body, html').animate({
            scrollTop:0
        }, 500 );
    });
});

