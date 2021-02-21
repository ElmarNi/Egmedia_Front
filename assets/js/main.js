$(document).ready(function () {
    $("header .menu-bar").click(function () {
        $("header nav.menu").toggleClass("active")
        $("header").toggleClass("active")
    })
    $('#slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items: 1,
        dots: true
    })
});