$(function () {

    $('#pagepiling').fullpage({
        fitToSection: true, 'navigation': true,
        'navigationPosition': 'right',
        scrollBar: true,
        anchors: [['page1', 'page2'], ['page3', 'page4', 'page5'], ['page6', 'page7', 'page8', 'page9'], ['page10', 'page11', 'page12'], ['page13', 'page14', 'page15']],
        // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
    });


    $('#myCarouselSec4').carousel({
        interval: 40000
    });
    $('.carousel-control.left').click(function () {
        $('#myCarouselSec4').carousel('prev');
    });

    $('.carousel-control.right').click(function () {
        $('#myCarouselSec4').carousel('next');
    });
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
    $('#myCarouselSec4').addClass("slide");

});