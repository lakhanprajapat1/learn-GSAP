var tl = gsap.timeline()
tl.from("#page1 p", {
    y:300,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.to("#page1 p",{
    y:40,
    duration:0.8,
    repeat:-1,
    yoyo:true
})
gsap.from("#page2 h1", {
    x:-500,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        // markers: true,
        start:"top 80%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from("#page2 h2", {
    x:500,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        // markers: true,
        start:"top 80%",
        end:"top 60%",
        scrub: 1
    }
})

gsap.to("#page3 h3", {
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -200%",
        scrub:1,
        pin:true
    }
})
gsap.from("#page4 h4", {
    opacity:0.1,
    scrollTrigger:{
        trigger:"#page4 h4",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 45%",
        scrub:1,
    }
})