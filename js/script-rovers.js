//Controladores
var controllerTitulo = new ScrollMagic.Controller();
var controllerSubtitulo = new ScrollMagic.Controller();
var controllerImgRover = new ScrollMagic.Controller();
var controllerVideoRover = new ScrollMagic.Controller();

$(function() { // wait for document ready
    // init
    var controllerPanels = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: '200%'
                //duration: "0.5%" // this works just fine with duration 0 as well
                // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
                // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    });

    // get all slides
    var slides = document.querySelectorAll(".panel");

    // create scene for every slide
    for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i], { pushFollowers: false })
            //  .addIndicators() // add indicators (requires plugin)
            .addTo(controllerPanels);
    }
});


//Titulo Pag rovers
$(function() {
    // 
    var sceneTitle = new ScrollMagic.Scene({ triggerElement: "#pin1", duration: 2000 })
        .setPin("#tituloRovers")
        // .addIndicators({ name: "1 (duration: 2450)" }) // add indicators (requires plugin)
        .addTo(controllerTitulo);
});

// SUBTITULO
var sceneSubtitle = new ScrollMagic.Scene({
        triggerElement: "#pin2",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element
    })
    .setClassToggle("#subtituloRovers", "visible") // add class to reveal
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controllerSubtitulo);


//IMG ROVER GSAP    
var tweenRover = new TimelineMax()
    .from("#img-rover", 1.5, { scale: 0.5, opacity: 0 })
    .to("#img-rover", 1.5, { scale: 1, opacity: 1, delay: 1 });


// build scene
new ScrollMagic.Scene({
        triggerElement: "#pin1",
        triggerHook: 0.15, // show, when scrolled 10% into view
        duration: "80%", // use full viewport
        offset: 200 // move trigger to center of element
    })
    .setTween(tweenRover)
    // .addIndicators({ name: "GSAP" }) // add indicators (requires plugin)
    .addTo(controllerImgRover);

//VIDEO-INTRO
var videoIntro = document.getElementById('video-intro');

var sceneVideoRover = new ScrollMagic.Scene({
        triggerElement: "#video-intro",
        triggerHook: 0.3,
        duration: 2000,
        reverse: false
    })
    .addTo(controllerVideoRover)
    //.addIndicators()
    .on("enter", function() {
        videoIntro.play();
    })