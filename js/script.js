//SLIDER

//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();

$(document).ready(function() {


    /*****************
     BUILD THE SLIDER
    *****************/
    //set width to be 'x' times the number of slides
    $('#slider-wrap ul#slider').width(sliderWidth * totalSlides);

    //next slide 	
    $('#next').click(function() {
        slideRight();
    });

    //previous slide
    $('#previous').click(function() {
        slideLeft();
    });



    /*************************
     //*> OPTIONAL SETTINGS
    ************************/
    //automatic slider
    var autoSlider = setInterval(slideRight, 3000);

    //for each slide 
    $.each($('#slider-wrap ul li'), function() {
        //set its color
        var c = $(this).attr("data-color");
        $(this).css("background", c);

        //create a pagination
        var li = document.createElement('li');
        $('#pagination-wrap ul').append(li);
    });

    //counter
    countSlides();

    //pagination
    pagination();

    //hide/show controls/btns when hover
    //pause automatic slide when hover
    $('#slider-wrap').hover(
        function() {
            $(this).addClass('active');
            clearInterval(autoSlider);
        },
        function() {
            $(this).removeClass('active');
            autoSlider = setInterval(slideRight, 3000);
        }
    );



}); //DOCUMENT READY



/***********
 SLIDE LEFT
************/
function slideLeft() {
    pos--;
    if (pos == -1) { pos = totalSlides - 1; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));

    //*> optional
    countSlides();
    pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight() {
    pos++;
    if (pos == totalSlides) { pos = 0; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));

    //*> optional 
    countSlides();
    pagination();
}

/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides() {
    $('#counter').html(pos + 1 + ' / ' + totalSlides);
}

function pagination() {
    $('#pagination-wrap ul li').removeClass('active');
    $('#pagination-wrap ul li:eq(' + pos + ')').addClass('active');
}

/************************
 //*> Mobile Menu
************************/
var mobile = 0;

$('div.mobile-menu').on('click', function() {

    if (mobile == 0) {
        $('nav.navegacion').hide();
        $('nav.navegacion-blanco').hide();
        console.log(mobile);
        mobile = 1;
    } else if (mobile == 1) {
        $('nav.navegacion').show();
        $('nav.navegacion-blanco').show();
        mobile = 0;
        console.log(mobile);
    }

});


/************************
 //*> Contacto - hover social media
************************/

let typeFacebook = new TypeIt('span.contact-fb', {
    strings: '.com/qrteam.cem',
    cursor: true,
    cursorChar: "|",
});

let typeInsta = new TypeIt('span.contact-ig', {
    strings: '.com/qrteam.cem',
    cursor: true,
});

let typeYt = new TypeIt('span.contact-yt', {
    strings: ': Quantum Robotics',
    cursor: true,
});

let typeIn = new TypeIt('span.contact-in', {
    strings: ': Quantum Robotics',
    cursor: true,
});


//Facebook
$('p.contact-fb-notype').on('mouseenter', function() {
    $('span.contact-fb').show();
    $('span.contact-fb').css({ 'color': '#2e89ff' })
    $(this).css({ 'color': '#2e89ff' })
    typeFacebook.go();
    typeFacebook.reset();
});

$('p.contact-fb-notype').on('mouseleave', function() {
    $('.contact-fb').hide();
    $(this).css({ 'color': '#000000' })
    typeFacebook.reset();
});

//Instagram
$('p.contact-ig-notype').on('mouseenter', function() {
    $('span.contact-ig').show();
    $('span.contact-ig').css({ 'color': '#da2e76' })
    $(this).css({ 'color': '#da2e76' })
    typeInsta.go();
    typeInsta.reset();
});

$('p.contact-ig-notype').on('mouseleave', function() {
    $('.contact-ig').hide();
    $(this).css({ 'color': '#000000' })
    typeInsta.reset();
});


//Email
$('p.contact-email-notype').on('mouseenter', function() {
    $('.contact-email').show();
    $('.contact-email').css({ 'color': '#1fb6db' })
    $(this).css({ 'color': '#1fb6db' })
    typeEmail.go();
    typeEmail.reset();
});

$('.contact-email-notype').on('mouseleave', function() {
    $('.contact-email').hide();
    $(this).css({ 'color': '#000000' })
    typeEmail.reset();
});

//YouTube
$('p.contact-yt-notype').on('mouseenter', function() {
    $('span.contact-yt').show();
    $('span.contact-yt').css({ 'color': '#ff0000' })
    $(this).css({ 'color': '#ff0000' })
    typeYt.go();
    typeYt.reset();
});

$('p.contact-yt-notype').on('mouseleave', function() {
    $('.contact-yt').hide();
    $(this).css({ 'color': '#000000' })
    typeYt.reset();
});

//LinkedIn
$('p.contact-in-notype').on('mouseenter', function() {
    $('span.contact-in').show();
    $('span.contact-in').css({ 'color': '#0072b1' })
    $(this).css({ 'color': '#0072b1' })
    typeIn.go();
    typeIn.reset();
});

$('p.contact-in-notype').on('mouseleave', function() {
    $('.contact-in').hide();
    $(this).css({ 'color': '#000000' })
    typeIn.reset();
});


//Integrantes-hover
$('.integrante').on('mouseenter', function() {
    ('.nombre-integrante').addClass('.hnombre-integrante');
});