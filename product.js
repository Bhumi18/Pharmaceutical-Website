//preloader
$(window).on('load',function(){
    $("#pre").fadeOut();
    $("#preloader").delay(100).fadeOut();
});

//about-us-slider-effect
$(function(){
    $('#about-image').owlCarousel({
        items:1,
        autoplay:true,
        autoPlayHoverPause:true,
        loop:true,
        center:false,
        smartSpeed:700,  
        navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    })
});

$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

$(function(){
    $('.dropdown-toggle').dropdown('show')
});

//map
$(function () {
    var uluru = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
});

//testimonial
$(function(){
    $('.author').owlCarousel({
        items:1,
        autoplay:true,
        autoPlayHoverPause:true,
        loop:true,
        center:false,
        smartSpeed:700,  
        navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    })
  });

/*$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>50){
            $('.navbar').addClass('white-nav-top');
            $('#back-to-top').fadeIn();
        }
        else{
            $('.navbar').removeClass('white-nav-top');
            $('#back-to-top').fadeOut();
        }
    });
});*/

/*$("").on("click", function() {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });*/

/*mobile menu*/
/*$(function(){
$('.navbar-toggler.collapsed').on('click','button',function(){
    $('.navbar').addClass('logo-gone');
});
});*/

// $(function(){
//     $('#logo-mobile').click(function(){
//         alert(hiui);
//         // $(' .navbar-brand ').attr('img').css("display","none");
//     });
// });


/*$(function(){
        $('.navbar-toggler-icon').on('click',function(e){
        $('#img-gone').hide();
        $('#img-gone').css("display","none");
    });    
    $('').on('click',function(e){
        $('#img-gone').show();
        $('#img-gone').css("display","block");
    }); 
});*/


$(function(){
    $('.navbar-toggler-icon').on('click',function(e){
       $('.navbar-toggler-icon') .hide();
       $('.btn-close').show();
       $('#navbarNavDropdown').show();
    }); 
});

$(function(){
    $('.btn-close').on('click',function(e){
        $('.btn-close').hide();
       $('.navbar-toggler-icon') .show();    
       $('#navbarNavDropdown').hide();
    }); 
});

$(function(){
    $('#navbarDropdownMenuLink').on('click',function(e){
        $('.btn-close').hide();
        $('#navbarNavDropdown').hide();
        $('.navbar-toggler-icon') .show();    
    });
});

$(function(){
    $('.nav-link').on('click',function(e){
        $('.btn-close').hide();
        $('#navbarNavDropdown').hide();
        $('.navbar-toggler-icon') .show();    
    });
});