$(window).scroll(function () {
    var maxWidth = window.matchMedia("(max-width: 992px)");

    var scrollPos = 0;
    scrollPos = $(this).scrollTop();
    if (scrollPos > 50) {
        $(".nav-change").addClass("bg-light");
        $(".nav-change").addClass("shadow-sm");
        $(".nav-link").removeClass("text-white");
        $(".nav-link").addClass("text-secondary");
        $(".nav-link").removeClass("nav-btn");
        $(".nav-link").addClass("nav-btn-secondary");
        $(".nav-link-outline").removeClass("text-white");
        $(".nav-link-outline").addClass("text-secondary");
        $(".nav-link-outline").removeClass("btn-outline-primary");
        $(".nav-link-outline").addClass("btn-outline-secondary");
        $(".vl").removeClass("vertical-line");
        $(".vl").addClass("vertical-line2");
        $("#logo-id").attr("src","../assets/logo_brown.png");

    } else if(scrollPos == 0){
        $(".nav-change").removeClass("bg-light");
        $(".nav-change").removeClass("shadow-sm");
        $(".nav-link").removeClass("text-secondary");
        $(".nav-link").addClass("text-white");
        $(".nav-link").removeClass("nav-btn-secondary");
        $(".nav-link").addClass("nav-btn");
        $(".nav-link-outline").removeClass("text-secondary");
        $(".nav-link-outline").addClass("text-white");
        $(".nav-link-outline").removeClass("btn-outline-secondary");
        $(".nav-link-outline").addClass("btn-outline-primary");
        $(".vl").removeClass("vertical-line2");
        $(".vl").addClass("vertical-line");
        $("#logo-id").attr("src","../assets/logo_white.png");
    }



  
});