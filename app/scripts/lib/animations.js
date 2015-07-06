$(function () {
    var scrollMagicController = new ScrollMagic.Controller();

    for (var i = 1; i <= 15; i++) {
        new ScrollMagic.Scene({
            triggerElement: '#section' + i,
            offset: 20
        }).setTween("#section" + i, 0.6, {backgroundColor: "transparent", scale: 1, alpha: 1, zIndex: 99})
                .addTo(scrollMagicController);
    }

    new ScrollMagic.Scene({
        triggerElement: '#leadInfoBanner',
        offset: 50
    }).setTween("#leadInfoBanner", 0.6, {rotateY: 360})
            .addTo(scrollMagicController);

    var p1 = TweenMax.to('.xsbottom-bg', 1, {
        height: 186
    });

    // var p2 = TweenMax.to('.xsbottom-bg', 1, {
    //     height: 250
    // });

    var p3 = TweenMax.to('#business_leadership', 1, {
        height: 471, width: 300
    });

    var p4 = TweenMax.to('#business_leadership', 0.5, {
        height: 600
    });

    new ScrollMagic.Scene({
        triggerElement: '#section1',
        offset: 10
    }).setTween(p1)
            .addTo(scrollMagicController);

    new ScrollMagic.Scene({
        triggerElement: '#section2',
        offset: 10
    }).setTween(p2)
            .addTo(scrollMagicController);


    new ScrollMagic.Scene({
        triggerElement: '#section3',
        offset: 10
    }).setTween(p3)
            .addTo(scrollMagicController);


    new ScrollMagic.Scene({
        triggerElement: '#section4',
        offset: 10
    }).setTween(p4)
            .addTo(scrollMagicController);

});
