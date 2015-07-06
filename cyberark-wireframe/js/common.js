$(function () {


    $('#pagepiling').fullpage({
        fitToSection: true, 'navigation': true,
        'navigationPosition': 'right',
        scrollBar: true,
//        anchors: ['page1', 'page2', 'page3', 'page4'],
        anchors: [ ['page1', 'page2'], ['page3', 'page4', 'page5'], ['page6', 'page7', 'page8', 'page9'], ['page10', 'page11', 'page12'], ['page13', 'page14', 'page15'] ],
        // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'] 
    });
});