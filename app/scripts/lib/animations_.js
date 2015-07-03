$(function () {

    //First Group
    var scrollMagicController = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1',
        offset: 50
    })
            .setTween("#scene-1", 0.6, {backgroundColor: "transparent", scale: 1.2, zIndex: 99})
            .addTo(scrollMagicController);

    //Second Group
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#scene-2',
        offset: 50
    })
            .setTween("#scene-2", 0.6, {backgroundColor: "transparent", scale: 1.1, alpha: 1, zIndex: 99})
            .addTo(scrollMagicController);

    var background2 = new ScrollMagic.Scene({
        triggerElement: '.wrap-2',
        offset: 50
    })
            .setTween(".wrap-2", 0.6, {backgroundColor: "#00FFCC"})
            .addTo(scrollMagicController);


    //Third Group
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '#scene-3',
        offset: 50
    })
            .setTween("#scene-3", 0.6, {backgroundColor: "transparent", scale: 1.1, alpha: 1, zIndex: 99})
            .addTo(scrollMagicController);

    var background3 = new ScrollMagic.Scene({
        triggerElement: '.wrap-3',
        offset: 50
    })
            .setTween(".wrap-3", 0.6, {backgroundColor: "#CC9900", zIndex: 99})
            .addTo(scrollMagicController);


    //Forth Group
    var scene4 = new ScrollMagic.Scene({
        triggerElement: '#scene-4',
        offset: 50
    })
            .setTween("#scene-4", 0.6, {backgroundColor: "transparent", scale: 1.1, alpha: 1, zIndex: 99})
            .addTo(scrollMagicController);

    var background3 = new ScrollMagic.Scene({
        triggerElement: '.wrap-4',
        offset: 50
    })
            .setTween(".wrap-4", 0.6, {backgroundColor: "#FFEF30", zIndex: 99})
            .addTo(scrollMagicController);



    //Footer Image
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
