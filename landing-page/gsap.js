var tl = gsap.timeline();

tl.from("h2", {
    y:-30,
    opacity:0,
    duration:1,
})
tl.from("h4", {
    y:-30,
    opacity:0,
    duration:0.3,
    // stagger:1
})
tl.from("h1", {
    y:150,
    opacity:0,
    duration:0.5
})