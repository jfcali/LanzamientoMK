/*---LEFT BAR ACCORDION----*/
$(function() {
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
//        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
});

var Script = function () {


//    sidebar dropdown menu auto scrolling

    jQuery('#sidebar .sub-menu > a').click(function () {
        var o = ($(this).offset());
        diff = 250 - o.top;
        if(diff>0)
            $("#sidebar").scrollTo("-="+Math.abs(diff),500);
        else
            $("#sidebar").scrollTo("+="+Math.abs(diff),500);
    });



//    sidebar toggle

    $(function() {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('.header').addClass('blue-bg');
                
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
                $('#main-content').css({
                    'width': '100%'
                });
                $('#sidebar').css({
                    'width': '100%'
                });
            }

            if (wSize > 768) {
                $('.header').removeClass('blue-bg');
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
                $('#main-content').css({
                    'width': '83%'
                });
                $('#sidebar').css({
                    'width': '17%'
                }); /*workaround para que se ponga bonito cuando se pasa de pequeño a grande. el problema 
                es que siempre que se re-escala pasa esto
                */
            }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });

    $('.fa-bars').click(function () {
            var wSize = $(window).width();

        if ($('#sidebar > ul').is(":visible") === true) {

            if (wSize > 768) {
                $('#main-content').css({
                    'width': '96%'
                });
                $('#sidebar').css({
                    'width': '4%'
                });
            }
            $('#sidebar > ul').hide();
            $("#container").addClass("sidebar-closed");
        } else {

            if (wSize > 768) {
                $('#main-content').css({
                    'width': '83%'
                });
                $('#sidebar').css({
                    'width': '17%'
                });
            }
            $('#sidebar > ul').show();
            $("#container").removeClass("sidebar-closed");
        }
    });

// custom scrollbar
    $("#sidebar").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '3', cursorborderradius: '10px', background: '#404040', spacebarenabled:false, cursorborder: ''});

    $("html").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});

// widget tools

    jQuery('.panel .tools .fa-chevron-down').click(function () {
        var el = jQuery(this).parents(".panel").children(".panel-body");
        if (jQuery(this).hasClass("fa-chevron-down")) {
            jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(200);
        } else {
            jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(200);
        }
    });

    jQuery('.panel .tools .fa-times').click(function () {
        jQuery(this).parents(".panel").parent().remove();
    });


//    tool tips

    $('.tooltips').tooltip();

//    popovers

    $('.popovers').popover();



// custom bar chart

    if ($(".custom-bar-chart")) {
        $(".bar").each(function () {
            var i = $(this).find(".value").html();
            $(this).find(".value").html("");
            $(this).find(".value").animate({
                height: i
            }, 2000)
        })
    }
// movement
            $('.moveSectionDown').click(function(e){
                e.preventDefault();
                $.fn.fullpage.moveSectionDown();
            });

}();