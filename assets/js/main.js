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
    $("#advantages .next").click(function(){
        let data_id = parseInt($("#advantages .slide-wrapper .slide.active").attr("data-id"))

        if (parseInt($("#advantages .slide-wrapper .slide.active").attr("data-id")) == $("#advantages .slide-wrapper .slide").length) {
            $("#advantages .slide-wrapper .slide.active").removeClass("active").parent().children().first().addClass("active")
            data_id = parseInt($("#advantages .slide-wrapper .slide.active").attr("data-id"))
        }
        else{
            $("#advantages .slide-wrapper .slide.active").removeClass("active").next().addClass("active")
            data_id = parseInt($("#advantages .slide-wrapper .slide.active").attr("data-id"))
        }
        $("#advantages .pagination").css(
            {
                "transform": `translate(-50%, -50%) rotate(${-((data_id - 1) * 70)}deg)`
            }
        )
        $(`#advantages .pagination .item.active`).removeClass("active")
        $(`#advantages .pagination .item[data-id=${data_id}]`).addClass("active")
    })
    $("#advantages .prev").click(function(){
        let data_id = parseInt($("#advantages .slide-wrapper .slide.active").attr("data-id"))

        if (parseInt($("#advantages .slide-wrapper .slide.active").attr("data-id")) == 1) {
            $("#advantages .slide-wrapper .slide.active").removeClass("active").parent().children().last().addClass("active")
            data_id = parseInt($("#advantages .slide-wrapper .slide.active").attr("data-id"))

        }
        else{
            $("#advantages .slide-wrapper .slide.active").removeClass("active").prev().addClass("active")
            data_id = parseInt($("#advantages .slide-wrapper .slide.active").attr("data-id"))

        }
        $("#advantages .pagination").css(
            {
                "transform": `translate(-50%, -50%) rotate(${-((data_id - 1) * 70)}deg)`
            }
        )
        $(`#advantages .pagination .item.active`).removeClass("active")
        $(`#advantages .pagination .item[data-id=${data_id}]`).addClass("active")
    })
    $("#advantages .pagination .item").each(function (index, element) {
        $(element).css("transform", `rotate(${(index) * 70}deg)`)
    })
    $("#advantages .pagination .item").click(function(){
        let data_id = parseInt($(this).attr("data-id"))
        let transform = 0
        transform = transform - ((data_id - 1) * 70)
        $("#advantages .pagination .item.active").removeClass("active")
        $("#advantages .pagination").css(
            {
                "transform": `translate(-50%, -50%) rotate(${transform}deg)`
            }
        )
        $(this).addClass("active")
        $("#advantages .slide-wrapper .slide.active").removeClass("active")
        $(`#advantages .slide-wrapper .slide[data-id=${data_id}]`).addClass("active")
    })
});