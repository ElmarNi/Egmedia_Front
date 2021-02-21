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
    $("#slider .slider-right-side-aside .right-side-item").each(function(index, element){
        $(element).click(function () {
            let slider_item = $(`#slider .slider-item[data-id=${$(element).attr("data-id")}]`)[0]
            let width = $(slider_item).width()
            let data_id = parseInt($(element).attr("data-id"))
            // let index = 0;
            // for (let i = 0; i < slider_item.length; i++) {
            //     if (!$(slider_item[i]).parent().hasClass("cloned")) {
            //         slider_item = $(slider_item[i])
            //         console.log(i);
            //     }
            // }
            $("#slider .owl-stage").css({
                "transform": `translate3d(-${width * (data_id + 1)}px, 0px, 0px)`,
                "transition": "all 0.25s ease 0s"
            })
        })
    })
});