//Scroll suave con jQuery
$(document).ready(function(){
    //Scroll suave
	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

    //Mostrar sobre mi
    $("#hide").click(function(){
        $('#about')
        .stop(true, true)
        .animate({
            height:"toggle",
            opacity:"toggle"
        },500);

        $("#cabecera h1").fadeIn(500);
        $("#cabecera h3").fadeIn(500);
        $(".social").fadeIn(500);      
        $("nav").fadeIn(500);
    });
    $("#show").click(function(){
         $('#about')
        .stop(true, true)
        .animate({
            height:"toggle",
            opacity:"toggle"
        },500);

        $("#cabecera h1").fadeOut(500);
        $("#cabecera h3").fadeOut(500);
        $(".social").fadeOut(500);      
        $("nav").fadeOut(500);
    });

    //Menu desplegable
    $(".hamburger-nav").on("click", function(){
        $(".menu").animate({
          height: 'toggle'
        });
    });

    //Indexsar y mostrar menu al hacer scroll
    $(window).scroll(function(){                  
        if ($(this).scrollTop() > $(window).height()) {
            $('.nav').fadeIn(500);

        } else { 
            $('.nav').fadeOut(500);
        }
    });
});