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

$(document).ready(function() {
    $.get('/src/nav-bar.html', function(data) {
        $('#navbar-placeholder').html(data);
    });
});


$(document).ready(function() {
           $('.card-wrapper').slick({
       	centerMode: true,
       	centerPadding: '60px',
               dots: true,
               infinite: true,
               speed: 500,
               slidesToShow: 1,
               slidesToScroll: 1,
       	autoplay: true,
       	arrows: true,
       	autoplaySpeed: 2000,
               responsive: [
                   {
                       breakpoint: 768,
                       settings: {
                           slidesToShow: 1
                       }
                   }
               ]
           });
       });

carousel.on('afterChange', function(event, slick, currentSlide) {
	var $activeSlides = $(slick.$slides.get(currentSlide))
	.add($(slick.$slides.get(currentSlide + 1)))
	.add($(slick.$slides.get(currentSlide - 1)));
	
	$activeSlides.addClass('active-slide');
});

