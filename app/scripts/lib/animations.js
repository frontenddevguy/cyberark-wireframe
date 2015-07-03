$(function () {
    var scrollMagicController = new ScrollMagic.Controller();

    for (var i = 1; i <= 15; i++) {
        new ScrollMagic.Scene({
            triggerElement: '#scene-' + i,
            offset: 20
        }).setTween("#scene-" + i, 0.6, {backgroundColor: "transparent", scale: 1, alpha: 1, zIndex: 99})
                .addTo(scrollMagicController);
    }

    new ScrollMagic.Scene({
        triggerElement: '#leadInfoBanner',
        offset: 50
    }).setTween("#leadInfoBanner", 0.6, {rotateY: 360})
            .addTo(scrollMagicController);

    var p1 = TweenMax.to('.xsbottom', 0.5, {
        height: 150
    });

    var p2 = TweenMax.to('.xsbottom', 0.5, {
        height: 250
    });

    var p3 = TweenMax.to('.xsbottom', 0.5, {
        height: 400
    });

    var p4 = TweenMax.to('.xsbottom', 0.5, {
        height: 450
    });

    new ScrollMagic.Scene({
        triggerElement: '#scene-1',
        offset: 10
    }).setTween(p1)
            .addTo(scrollMagicController);

    new ScrollMagic.Scene({
        triggerElement: '#scene-2',
        offset: 10
    }).setTween(p2)
            .addTo(scrollMagicController);


    new ScrollMagic.Scene({
        triggerElement: '#scene-3',
        offset: 10
    }).setTween(p3)
            .addTo(scrollMagicController);


    new ScrollMagic.Scene({
        triggerElement: '#scene-4',
        offset: 10
    }).setTween(p4)
            .addTo(scrollMagicController);

});
