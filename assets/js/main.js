$(document).ready(function () {
    setTimeout(() => {
        $(".preloader").addClass("loaded")
    }, 1500);
    $("header .menu-bar").click(function () {
        $("header nav.menu").toggleClass("active")
        $("header").toggleClass("active")
        $("body").toggleClass("active")
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
    var $grid = $('#portfolio-page .filtered-items').isotope({
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
    $('#portfolio-page .category-names').on( 'click', 'a', function(e) {
        e.preventDefault()
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
        $('#portfolio-page .category-names a.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });

    function SetServiceContainerHeight(isResized) {
        if ($("#services-page .service-container .category-names").length != 0) {
            let offset = 0
            if (window.innerWidth > 991) {
                if (!isResized) {
                    offset = 240
                }
                else{
                    offset = -30
                }
                $("#services-page .service-container").height($("#services-page .service-container .category-names")[0].offsetHeight + $("#services-page .service-container .category-content.active")[0].offsetHeight - offset)
            }
            else{
                if (!isResized) {
                    offset = 150
                }
                else{
                    offset = -30
                }
                $("#services-page .service-container").height($("#services-page .service-container .category-names")[0].offsetHeight + $("#services-page .service-container .category-content.active")[0].offsetHeight - offset)
            }
        }
    }
    SetServiceContainerHeight(false)
    $(window).resize(function () { 
        SetServiceContainerHeight(true)
    });
    let image_height = $("#services-page .active .gallery-item img").outerHeight()

    $(window).resize(function () { 
        image_height = $("#services-page .active .gallery-item img").outerHeight()
    });
    function Services_Page() {
        let gallery_wrappers = document.querySelectorAll('#services-page .gallery-wrapper')
        $("#services-page .row.active .gallery-wrapper .gallery-item").click(function () {
            //get clicked image src 
            let src = $(this).find("img").attr("src")

            //get main image which src is equal to clicked image src
            let main_image = $(`#services-page .row.active .main-image img[src='${src}']`)[0]

            //get gallery
            let gallery = document.querySelector('#services-page .row.active .gallery-wrapper .gallery')

            let data_id = parseInt($(this).attr("data-id"))

            if (data_id != 5) {
                $(gallery).css("transform", `translate3d(0px, -${(data_id-1) * image_height}px, 0px)`)
            }
            if (data_id == 0) {
                $("#services-page .row.active .previous").addClass("active")
            }
            else{
                $("#services-page .row.active .previous.active").removeClass("active")
            }
            if (data_id == 5) {
                $("#services-page .row.active .next").addClass("active")
            }
            else{
                $("#services-page .row.active .next.active").removeClass("active")
            }
            //remove active previous main image 
            $(`#services-page .row.active .main-image img.active`).removeClass("active")

            //add active class current main image
            $(main_image).addClass("active")

            //remove previous active gallery item
            $("#services-page .row.active .gallery-wrapper .gallery-item.active").removeClass("active")

            //add active class to clicked gallery item
            $(this).addClass("active")
        })

        $(gallery_wrappers).each(function () {
            $(this).height(image_height * 3)
        })
        $(window).resize(function () { 
            $(gallery_wrappers).each(function () {
                $(this).height(image_height * 3)
            })
        });
    }

    $("#services-page .category-names a").click(function (e) {
        e.preventDefault();
        let data_id = parseInt($(this).attr("data-id"))

        $("#services-page .category-names a.is-checked").removeClass("is-checked")

        $(this).addClass("is-checked")

        $("#services-page .category-content.active").removeClass("active")
        
        $(`#services-page .category-content[data-id="${data_id}"`).addClass("active")

        Services_Page()
    })

    $("#services-page .next").click(function(){
        $("#services-page .row.active .previous.active").removeClass("active")
        let data_id = parseInt($("#services-page .row.active .gallery-wrapper .gallery-item.active").attr("data-id"))
        if (data_id < 4) {
            $('#services-page .row.active .gallery-wrapper .gallery').css("transform", `translate3d(0px, -${(data_id) * image_height}px, 0px)`)
        }
        if (data_id < 5) {
            $("#services-page .row.active .gallery-wrapper .gallery-item.active").removeClass("active").next().addClass("active")
            $(`#services-page .row.active .main-image img.active`).removeClass("active").next().addClass("active")
        }
        if (data_id == 4) {
            $(this).addClass("active")
        }

    })
    $("#services-page .previous").click(function(){
        $("#services-page .row.active .next.active").removeClass("active")
        let data_id = parseInt($("#services-page .row.active .gallery-wrapper .gallery-item.active").attr("data-id"))

        if (data_id > 1) {
            $('#services-page .row.active .gallery-wrapper .gallery').css("transform", `translate3d(0px, -${(data_id - 2) * image_height}px, 0px)`)
        }
        if (data_id > 0) {
            $("#services-page .row.active .gallery-wrapper .gallery-item.active").removeClass("active").prev().addClass("active")
            $(`#services-page .row.active .main-image img.active`).removeClass("active").prev().addClass("active")
        }
        if (data_id == 1) {
            $(this).addClass("active")
        }
    })

    Services_Page();
});