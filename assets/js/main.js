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
        $("#slider .owl-dots button")[index].setAttribute("data-id", `${$(element).attr("data-id")}`)
        $(element).click(function () {
            $("#slider .owl-dots button.active").removeClass("active")
            let slider_item = $(`#slider .slider-item[data-id=${$(element).attr("data-id")}]`)[0]
            let width = $(slider_item).width()
            let data_id = parseInt($(element).attr("data-id"))
            $(`#slider .owl-dots button[data-id=${data_id}]`).addClass("active")
            $("#slider .owl-stage").css({
                "transform": `translate3d(-${width * (data_id + 1)}px, 0px, 0px)`,
                "transition": "all 0.25s ease 0s"
            })
        })
    })
    // let advantages_slider_index = $("#advantages .slide-wrapper .slide").length
    let advantages_slider_index = 0
    $("#advantages .next").click(function(){
        if (advantages_slider_index < $("#advantages .slide-wrapper .slide").length) {
            $("#advantages .slide-wrapper .slide.active").removeClass("active").next().addClass("active")
        } else {
            $($("#advantages .slide-wrapper .slide")[0]).addClass("active")
        }       
        advantages_slider_index++
        if (advantages_slider_index == 5) {
            advantages_slider_index = 0
        }
    })
});