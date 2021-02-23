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
    $("#services .next").click(function(){
        let data_id = parseInt($("#services .slide-wrapper .slide.active").attr("data-id"))

        if (parseInt($("#services .slide-wrapper .slide.active").attr("data-id")) == $("#services .slide-wrapper .slide").length) {
            $("#services .slide-wrapper .slide.active").removeClass("active").parent().children().first().addClass("active")
            data_id = parseInt($("#services .slide-wrapper .slide.active").attr("data-id"))
        }
        else{
            $("#services .slide-wrapper .slide.active").removeClass("active").next().addClass("active")
            data_id = parseInt($("#services .slide-wrapper .slide.active").attr("data-id"))
        }
        $("#services .pagination").css(
            {
                "transform": `translate(-50%, -50%) rotate(${-((data_id - 1) * 70)}deg)`
            }
        )
        $(`#services .pagination .item.active`).removeClass("active")
        $(`#services .pagination .item[data-id=${data_id}]`).addClass("active")
    })
    $("#services .prev").click(function(){
        let data_id = parseInt($("#services .slide-wrapper .slide.active").attr("data-id"))

        if (parseInt($("#services .slide-wrapper .slide.active").attr("data-id")) == 1) {
            $("#services .slide-wrapper .slide.active").removeClass("active").parent().children().last().addClass("active")
            data_id = parseInt($("#services .slide-wrapper .slide.active").attr("data-id"))

        }
        else{
            $("#services .slide-wrapper .slide.active").removeClass("active").prev().addClass("active")
            data_id = parseInt($("#services .slide-wrapper .slide.active").attr("data-id"))

        }
        $("#services .pagination").css(
            {
                "transform": `translate(-50%, -50%) rotate(${-((data_id - 1) * 70)}deg)`
            }
        )
        $(`#services .pagination .item.active`).removeClass("active")
        $(`#services .pagination .item[data-id=${data_id}]`).addClass("active")
    })
    $("#services .pagination .item").each(function (index, element) {
        $(element).css("transform", `rotate(${(index) * 70}deg)`)
    })
    $("#services .pagination .item").click(function(){
        let data_id = parseInt($(this).attr("data-id"))
        let transform = 0
        transform = transform - ((data_id - 1) * 70)
        $("#services .pagination .item.active").removeClass("active")
        $("#services .pagination").css(
            {
                "transform": `translate(-50%, -50%) rotate(${transform}deg)`
            }
        )
        $(this).addClass("active")
        $("#services .slide-wrapper .slide.active").removeClass("active")
        $(`#services .slide-wrapper .slide[data-id=${data_id}]`).addClass("active")
    })
    var $grid = $('#portfolio .filtered-items').isotope({
        itemSelector: '.filter-item',
        layoutMode: 'fitRows'
    });
    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
        }
    };
    // bind filter button click
    $('#portfolio .category-names').on( 'click', 'a', function(e) {
        e.preventDefault()
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
        $('#portfolio .category-names a.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});