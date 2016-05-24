$(document).ready(function() {
    $(".ajaxtour").colorbox({maxWidth:'80%'},{minWidth:'50%'});
    $(window).unbind("scroll");
    if($(".scrolltour").length  > 0){
        var right = $('.scrolltour').offset().top;
    }
    $(window).bind("scroll", function() {
        var t =  document.documentElement.scrollTop || document.body.scrollTop;
        if($(".scrolltour").length > 0){
            if($(".left-cruise-detail").height() > $(".right-cruise-detail").height()){
            var widthright = $(".right-cruise-detail").width();
            if(t>$('footer').offset().top  - $('.scrolltour').height())
                $('.scrolltour').css({position:'absolute',width:widthright,top:$('footer').offset().top - $('.scrolltour').height()});
            else if(t>=right){
                heightheader = 0;
                if($("header").hasClass("sticky")){
                    var heightheader = $("header").height();
                }
                $('.scrolltour').css({position:'fixed',top:heightheader,width:widthright});
            }else $('.scrolltour').css({position:''});
            }
        }
        if($("header").length>0){
            if ($(this).scrollTop() > 1){
                $('header').addClass("sticky");
            }
            else{
                $('header').removeClass("sticky");
            }
        }
    });

    $(".expand-search-partner").click(function(){
        $(this).hide();
        $(".div-expand-search").show();
    });
    $(".close-search-partner").click(function(){
        $(".div-expand-search").hide();
        $(".expand-search-partner").show();
    });
    $('.form .selectlabel').click(function(){
        if($('.formitem:visible').length>0){
            $('.formitem:visible').hide();
        }else{
            sta='t';
            $(this).siblings('ul').show();
        }
    });
    $('.form .formitem li').click(function(){
        if($(this).siblings("data-v")) var temptext=$(this).attr("data-v");
        else var temptext=$(this).text();
        $(this).parent().prevAll('input').val(temptext);
        $(this).parent().siblings('label').children().text($(this).text());
        $(this).parent().hide();
    });
    $('#heartbanner').carousel({
        interval: 4000
    });
    $(".row-team-similar").hover(function() {
        $(this).children("div").siblings(".div-team-similar").toggleClass("hidden")
    });
    $(".row-team").hover(function() {
        $(this).children("div").siblings(".div-team-getlist").toggleClass("hidden")
    });
    $(".row-team-hot").hover(function() {
        $(this).children("div").siblings(".div-team-hot").toggleClass("hidden")
    });
    $(".figure-team").hover(function() {
        $(this).children("div").siblings(".figure-team-row").toggleClass("hidden")
    });
    $(".a-name-cruise-hot").hover(function() {
        $(this).parent().parent().find(".span-view-more").toggleClass("hover");
    });
    $(".div-team-hot .trigger").hover(function() {
        $(this).parent().parent().find(".respon-name").toggleClass("hover");
    });
    $(".item-whyus").hover(function() {
        $(this).toggleClass("item-whyus-hover");
    });
    $(".a-name-bestseller").hover(function() {
        $(this).parent().find("a,.span-view-more").toggleClass("hover");
    });
    $(".trigger").hover(function() {
        $(this).parent().find("a,.respon-name,.span-view-more").toggleClass("hover");
    });
    $(".row-tour-hot .trigger").hover(function() {
        $(this).parents(".row-tour-hot").find(".span-view-more").toggleClass("hover");
    });
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'bottom',
        tooltipClass: "entry-tooltip-positioner",
        position: {
            my: "right bottom+50"
        }
    });
    $(".tripgger-cust").hover(function() {
        $(this).parent().find("span").toggleClass("spanhover");
    });
    var widthulmainmenu = $(".main-menu").width();
    var widthulmainmenu2 = $(".ul_main_menu").width();
    $(".li_menu_main").hover(function() {
        if ($(this).children("ul").hasClass("ul_destination")) {
            $(this).find(".a_menu_main").toggleClass("a_main_menu_hover");
            var dest = $(this).children(".ul_destination");
            $(dest).css("width",widthulmainmenu);
            $(dest).css("left",'-'+(widthulmainmenu-widthulmainmenu2)+'px');
        }
        else if ($(this).children("ul").hasClass("ul_guide")) {
            $(this).find(".a_menu_main").toggleClass("a_main_menu_hover");
            var guide = $(this).children(".ul_guide");
            $(guide).css("width",widthulmainmenu2);
        }
        else if ($(this).children("ul").hasClass("ul_4col")) {
            $(this).find(".a_menu_main").toggleClass("a_main_menu_hover");
            var guide = $(this).children(".ul_4col");
            $(guide).css("width",widthulmainmenu2);
        }
    });

    if(jQuery.fn.colorbox){
        jQuery("body").on("click","a[data-colorbox], button[data-colorbox]",function(f){
            f.preventDefault();var d=jQuery(this).attr("data-colorbox")||this.href,c=jQuery.parseJSON(jQuery(this).attr("data-colorbox-opts"))||{};
            if(!c.width){c.width="100%"}if(!c.height){c.height="100%"}if(!c.maxWidth){c.maxWidth="640px"}
            if(!c.maxHeight){c.maxHeight="406px"}c.href=d;if(c.iframe){c.onComplete=function(){
                var e=function(h,g){if(!/%$/.test(h)){h=parseInt(h,10)>g?g:h}return h};
                jQuery.colorbox.resize({height:e(c.maxHeight,document.documentElement.clientHeight),width:e(c.maxWidth,document.documentElement.clientWidth)})}}jQuery.colorbox(c)})}

});
