$(function () {
//    $('#pagepiling').pagepiling({
//        menu: '#menu',
//        anchors: ['page1', 'page2', ['page3', 'page4', 'page5'], 'page6', 'page7', ['page8', 'page9', 'page10']],
////        anchors: ['page1', 'page2', 'page3', 'page4'],
//        navigation: {
//            'textColor': '#f2f2f2',
//            'bulletsColor': '#ccc',
//            'position': 'right',
//            'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
//        }
//    });

    $('#pagepiling').fullpage({
        fitToSection: true, 'navigation': true,
        'navigationPosition': 'right',
        scrollBar: true,
//        anchors: ['page1', 'page2', 'page3', 'page4'],
        anchors: ['page1', 'page2', ['page3', 'page4', 'page5'], 'page6', 'page7'],
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
    });
});