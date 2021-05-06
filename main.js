$(document).ready(function () {
    $(".slider").slick(
    {
        dots:true,
        arrows:false,
        speed:3000,
        slidesToShow: 3,
  slidesToScroll: 2,
  variableWidth: true,
        
        responsive: [
        {
            breakpoint: 1025,
                settings: {
                    slidesToShow:2 
                }
        },
        {
            breakpoint: 601,
                settings: {
                    slidesToShow:1
                }
        },
    ]
    });
    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        $('.header-hover-nav').remove(),
        $(".burger-menu").css("display", "block"),
        $(".menuToggle").css("display", "block"),
        $(".menuToggle").click(function() {
            $(this).toggleClass("active");
            $(".hamburger").toggleClass("active");
            $(".burger-nav ul").slideToggle(300, function(){
              if($(this).css("display") === "none"){
                $(this).removeAttr("style"); 
              }
            });
            $(".burger-nav ul").css("transition", "0.3s");
            $(".burger-nav ul").css("display", "flex");
            $('.burger-nav ul li').on('click', function () {
              $('.burger-nav ul').hide(100, function(){
                if ($(this).css('display') === 'none') {
                  $(this).removeAttr('style');
                  $(".menuToggle").removeClass("active");
                  $(".hamburger").toggleClass("active");
                }
              });
            });
          });
    } 
    else;
});
