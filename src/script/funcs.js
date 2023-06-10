//This function adds navigation bar blur effect.
$(document).ready(function(){
    $(window).on("scroll", function(){
        let gap=60;
        if($(window).scrollTop() > gap) {
            $('.nav-bar-container').addClass('nav-bar-blur');
        }
        else {
            $('.nav-bar-container').removeClass('nav-bar-blur');
        }
    });
});