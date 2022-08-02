$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: false,
        autoplayTimeOut: 30000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                autoplayTimeOut: 30000,
                nav: false
            },
            400:{
                items: 1,
                autoplayTimeOut: 30000,
                nav: false
            },
            1000:{
                items: 2,
                autoplayTimeOut: 30000,
                nav: false
            }
        }
    });
});

function myFunction() {
    let copyText = "ethansharpdev@gmail.com";
    navigator.clipboard.writeText(copyText);

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied to clipboard!";
};

function outFunc() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Click to copy my email!";
};