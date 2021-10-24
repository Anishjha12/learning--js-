$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scroll > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    // toogle  menu / navbar  script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toogleclass("active");
    });

});