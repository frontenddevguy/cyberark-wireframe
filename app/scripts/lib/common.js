$(function () {

    $('#pagepiling').fullpage({
        fitToSection: true, 'navigation': true,
        'navigationPosition': 'right',
        scrollBar: true,
        anchors: [['page1', 'page2'], ['page3', 'page4', 'page5'], ['page6', 'page7', 'page8', 'page9'], ['page10', 'page11', 'page12'], ['page13', 'page14', 'page15']],
        // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
    });


    // Carousel

    $('#myCarouselSec4').carousel({
        interval: 40000
    });
    $('.carousel-control.left').click(function () {
        $('#myCarouselSec4').carousel('prev');
    });

    $('.carousel-control.right').click(function () {
        $('#myCarouselSec4').carousel('next');
    });
    if($(window).width()<500){
        $('.carousel-inner').addClass('vertical');
    }
    else{
         $('.carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {

            next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');

        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));

        }
    });
    }

    $('#myCarouselSec4').addClass("slide");


    // Social Menu

    $(".social-icon-trigger").mouseover(function(){
        $(".social-icons ul").show();
        $(".social-icons ul").stop().animate({'right': '10%'}, 300);
//            $(".social-icons ul").show();
    });

    $(".social-icon-trigger").mouseout(function(){
        $(".social-icons ul").stop().animate({'right': '8%'}, 300, function(){
            $(".social-icons ul").hide();
        });
    });

    $(".top-level").click(function(){
        $(this).siblings().children(".submenu").slideUp();
        $(this).children(".submenu").slideToggle();
    });

    $(".close-btn").click(function(){
        $('#slideNavmenu').offcanvas('toggle');
    })

    $("a.scroll-to").click(function(){
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1500);
            return false;
        }
    });

});
// Hot Links / Tabs


$(document).ready(function(){

    $("#myTab a").click(function(e){

        e.preventDefault();

        $(this).tab('show');

    });

});


