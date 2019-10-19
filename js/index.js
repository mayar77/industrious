new WOW().init(); 

$("nav a").click(function(){
    
    var hrefNav= $(this).attr("href");
    var scrollNav =$(hrefNav).offset().top;
    $("html,body").animate({scrollTop:scrollNav-150},1000);
    
    
})