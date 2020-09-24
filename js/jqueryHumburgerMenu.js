
// $('#nav-toggle').on('click',function () {
//     console.log("aaa");
//     if ( $('.nav-list').css('display') === "none" ) {
//         $('.nav-list').css({
//             display : 'block'
//         });
//     }else {
//         $('.nav-list').css({
//             display : 'none'
//         });
//     }
// });


$('#nav-toggle').on('click', function () {
    if ($('#nav-list').css('display') === 'none' ) {
        $('#nav-list').fadeIn(1000);
    }else {
        $('#nav-list').fadeOut(1000);
    }

});
