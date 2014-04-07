$(function(){
    $(".sf-menu li").on("mouseenter",function(){
        $(this).addClass("over");
        $(this).children("ul").show();
    });

    $(".sf-menu li").on("mouseleave",function(){
        $(this).removeClass("over");
        $(this).children("ul").hide();
    });
});