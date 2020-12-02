const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const subText = intro.querySelector("h2");

// End Section
const section = document.querySelector("section");
const end = section.querySelector("h1");

// Scroll Magic
const controller = new ScrollMagic.Controller();

// Scenes
let scene = new ScrollMagic.Scene({
    duration: 7000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

// Text Animation
const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0, marginTop: 100})
const textAnim1 = TweenMax.fromTo(subText, 3, {opacity: 0}, {opacity: 1})

let scene2 = new ScrollMagic.Scene({
    duration: 4400,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

let scene1 = new ScrollMagic.Scene({
    duration: 60400,
    triggerElement: intro,
    triggerHook: -1
})
.setTween(textAnim1)
.addTo(controller);



//Video Animation
let accelamount = 0.2;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
}, 21.3);