const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=3000",
    },
});

console.log(1 / (sections.length - 1));

gsap.to(mask, {
    width: "100%",
    scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        scrub: 1,
    },
});

sections.forEach((section) => {
    let text = section.querySelectorAll(".anim");

    if (text.length === 0) return;

    gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
        },
    });
});
gsap.defaults({
    ease: "none",
});
const panels = gsap.utils.toArray(".panel");
const length = panels.length;
panels.forEach((panel, i) => {
    if (i != length - 1) {
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            end: "30%",

            pin: true,
            pinSpacing: false,
        });
    } else {
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            pin: true,
            end: "top",
            pinSpacing: false,
        });
    }
});

gsap.to(".one", {
    trigger: ".orange",
    start: "top top",
    opacity: 0.2,
    duration: 1,
});
