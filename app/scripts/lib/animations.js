
var scrollMagicController = new ScrollMagic.Controller();

var desktop_animations = function (){
    if(!scrollMagicController)
        scrollMagicController = new ScrollMagic.Controller();
    for (var i = 1; i <= 15; i++) {
        new ScrollMagic.Scene({
            triggerElement: '#section' + i,
            offset: 20
        }).setTween("#section" + i, 0.6, {backgroundColor: "transparent", scale: 1, alpha: 1, zIndex: 99})
                .addTo(scrollMagicController);
    }

    // new ScrollMagic.Scene({
    //     triggerElement: '#leadInfoBanner',
    //     offset: 50
    // }).setTween("#leadInfoBanner", 0.6, {rotateY: 360})
    //         .addTo(scrollMagicController);

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
        height: 475, width: 126, left: 106
    });
    var p31 = TweenMax.to('#business_leadership2', 1, {
        // height: '59%', width: 300
        height: 382, width: 122, left: 244
    });
    var p32 = TweenMax.to('#xsbottom-bg', 1, {
        opacity: 0.25
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
    new ScrollMagic.Scene({
        triggerElement: '#section3',
        offset: 10
    }).setTween(p32)
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
        height: 180, width: 50, left: 26, opacity: 0.25
    });
    var p51 = TweenMax.to('#business_leadership2', 1, {
        height: 144, width: 48, left: 80, opacity: 0.25
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
        height: 460, width: 338, left: 0
    });

    new ScrollMagic.Scene({
        triggerElement: '#section6',
        offset: 10
    }).setTween(p6)
            .addTo(scrollMagicController);


// trigger on section 7
    var p7 = TweenMax.to('#it-security', 1, {
        height: 560, width: 380, left: 0, opacity: 0.65
    });

    new ScrollMagic.Scene({
        triggerElement: '#section7',
        offset: 10
    }).setTween(p7)
            .addTo(scrollMagicController);


// trigger on section 8
    var p8 = TweenMax.to('#it-security', 1, {
        height: 1000, width: 600, left: -230, opacity: 0.15
    });

    new ScrollMagic.Scene({
        triggerElement: '#section8',
        offset: 10
    }).setTween(p8)
            .addTo(scrollMagicController);


// trigger on section 9
    var p9 = TweenMax.to('#it-security', 1, {
        height: 560, width: 380, opacity: 0
    });

    new ScrollMagic.Scene({
        triggerElement: '#section9',
        offset: 10
    }).setTween(p9)
            .addTo(scrollMagicController);


// trigger on section 10
    var p10 = TweenMax.to('#it-operations', 1, {
        height: 360, width: 117, right: '30%', opacity: 0.65
    });

    var p101 = TweenMax.to('#it-operations2', 1, {
        height: 509, width: 140, right: '15%', opacity: 1
    });

    var p102 = TweenMax.to('#it-operations3', 1, {
        height: 255, width: 100, right: '4%', opacity: 0.65
    });

    new ScrollMagic.Scene({
        triggerElement: '#section10',
        offset: 10
    }).setTween(p10)
            .addTo(scrollMagicController);

    new ScrollMagic.Scene({
        triggerElement: '#section10',
        offset: 10
    }).setTween(p101)
            .addTo(scrollMagicController);

    new ScrollMagic.Scene({
        triggerElement: '#section10',
        offset: 10
    }).setTween(p102)
            .addTo(scrollMagicController);


// trigger on section 11
    var p11 = TweenMax.to('#it-operations', 1, {
        height: 440, width: 140, right: '34%', opacity: 0.65
    });

    var p111 = TweenMax.to('#it-operations2', 1, {
        height: 624, width: 170, right: '16%', opacity: 1
    });

    var p112 = TweenMax.to('#it-operations3', 1, {
        height: 316, width: 120, right: '2%', opacity: 0.65
    });

    var p113 = TweenMax.to('#xsbottom-bg', 1, {
        opacity: 0
    });

    new ScrollMagic.Scene({
        triggerElement: '#section11',
        offset: 10
    }).setTween(p11)
            .addTo(scrollMagicController);

    new ScrollMagic.Scene({
        triggerElement: '#section11',
        offset: 10
    }).setTween(p111)
            .addTo(scrollMagicController);

    new ScrollMagic.Scene({
        triggerElement: '#section11',
        offset: 10
    }).setTween(p112)
            .addTo(scrollMagicController);


    new ScrollMagic.Scene({
        triggerElement: '#section11',
        offset: 10
    }).setTween(p113)
            .addTo(scrollMagicController);


// trigger on section 12
    var p12 = TweenMax.to('#it-operations', 1, {
        height: 440, width: 140, right: '34%', opacity: 0
    });

    var p121 = TweenMax.to('#it-operations2', 1, {
        height: 900, width: 217, right: '18%', opacity: 0.3
    });

    var p122 = TweenMax.to('#it-operations3', 1, {
        height: 415, width: 156, right: '2%', opacity: 0.1
    });

    var p123 = TweenMax.to('#xsbottom-bg', 1, {
        opacity: 0
    });

    new ScrollMagic.Scene({
        triggerElement: '#section12',
        offset: 10
    }).setTween(p12)
            .addTo(scrollMagicController);

    new ScrollMagic.Scene({
        triggerElement: '#section12',
        offset: 10
    }).setTween(p121)
            .addTo(scrollMagicController);

    new ScrollMagic.Scene({
        triggerElement: '#section12',
        offset: 10
    }).setTween(p122)
            .addTo(scrollMagicController);

    new ScrollMagic.Scene({
        triggerElement: '#section12',
        offset: 10
    }).setTween(p123)
            .addTo(scrollMagicController);


// trigger on section 13
    var p13 = TweenMax.to('#compliance', 1, {
        height: 579, width: 118, right: '17%', opacity: 1
    });

    new ScrollMagic.Scene({
        triggerElement: '#section13',
        offset: 10
    }).setTween(p13)
            .addTo(scrollMagicController);

}

var mobile_animations = function(){
 //set mobile animations
}

var checkWindowWidth = function() {
    if( $(window).width() <= 640 ){
        mobile_animations();
    } else {
        desktop_animations()
    }
}

$(function(){
    checkWindowWidth();
})

$(window).resize(function(){
    checkWindowWidth();
})

