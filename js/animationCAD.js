const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

//End section
const section = document.querySelector(".intro-postvideo");
const end = section.querySelector("h2");

//ScrollMagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        duration: 13000,
        triggerElement: intro,
        triggerHook: 0
    })
    .setPin(intro)
    .addTo(controller);

//Text animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

const scene2 = new ScrollMagic.Scene({
        duration: 2500,
        triggerElement: intro,
        triggerHook: 0
    })
    .setTween(textAnim)
    .addTo(controller);



//Video animation
let accel = 0.1; //The ease factor in the video when we stop scrolling
let scrollPs = 0;
let delay = 0;

scene.on("update", e => {
    scrollPs = e.scrollPos / 1000;
    console.log(e);
});

setInterval(() => {
    delay += (scrollPs - delay) * accel;
    console.log(scrollPs, delay);

    video.currentTime = scrollPs;
}, 150);