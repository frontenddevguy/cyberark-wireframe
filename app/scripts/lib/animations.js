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
    new ScrollMagic.Scene({
        triggerElement: '#section1',
        offset: 10
    }).setTween(p1)
            .addTo(scrollMagicController);


// trigger on section 3
    var p3 = TweenMax.to('#business_leadership', 1, {
        // height: '73%', width: 126
        height: 475, width: 126
    });
    var p31 = TweenMax.to('#business_leadership2', 1, {
        // height: '59%', width: 300
        height: 382, width: 122
    });

    new ScrollMagic.Scene({
        triggerElement: '#section3',
        offset: 10
    }).setTween(p3)
            .addTo(scrollMagicController);
    new ScrollMagic.Scene({
        triggerElement: '#section3',
        offset: 10
    }).setTween(p31)
            .addTo(scrollMagicController);


// trigger on section 4
    var p4 = TweenMax.to('#business_leadership', 1, {
        height: 605, width: 160
    });
    var p41 = TweenMax.to('#business_leadership2', 1, {
        height: 382, width: 122, opacity: 0.2
    });

    new ScrollMagic.Scene({
        triggerElement: '#section4',
        offset: 10
    }).setTween(p4)
            .addTo(scrollMagicController);
    new ScrollMagic.Scene({
        triggerElement: '#section4',
        offset: 10
    }).setTween(p41)
            .addTo(scrollMagicController);


// trigger on section 5
    var p5 = TweenMax.to('#business_leadership', 1, {
        height: 0, width: 0
    });
    var p51 = TweenMax.to('#business_leadership2', 1, {
        height: 0, width: 0, opacity: 0.2
    });

    new ScrollMagic.Scene({
        triggerElement: '#section5',
        offset: 10
    }).setTween(p5)
            .addTo(scrollMagicController);
    new ScrollMagic.Scene({
        triggerElement: '#section5',
        offset: 10
    }).setTween(p51)
            .addTo(scrollMagicController);


// trigger on section 6
    var p6 = TweenMax.to('#it-security', 1, {
        height: 460, width: 338
    });

    new ScrollMagic.Scene({
        triggerElement: '#section6',
        offset: 10
    }).setTween(p6)
            .addTo(scrollMagicController);


// trigger on section 7
    var p7 = TweenMax.to('#it-security', 1, {
        height: 560, width: 380, opacity: 0.65
    });

    new ScrollMagic.Scene({
        triggerElement: '#section7',
        offset: 10
    }).setTween(p7)
            .addTo(scrollMagicController);


// trigger on section 8
    var p8 = TweenMax.to('#it-security', 1, {
        height: 560, width: 380, opacity: 0.65
    });

    new ScrollMagic.Scene({
        triggerElement: '#section8',
        offset: 10
    }).setTween(p8)
            .addTo(scrollMagicController);


// trigger on section 9
    var p9 = TweenMax.to('#it-security', 1, {
        height: 560, width: 380, opacity: 0.65
    });

    new ScrollMagic.Scene({
        triggerElement: '#section9',
        offset: 10
    }).setTween(p9)
            .addTo(scrollMagicController);


// trigger on section 10
    var p10 = TweenMax.to('#it-security', 1, {
        height: 560, width: 380, opacity: 0.65
    });

    new ScrollMagic.Scene({
        triggerElement: '#section10',
        offset: 10
    }).setTween(p10)
            .addTo(scrollMagicController);


});