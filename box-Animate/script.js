gsap.from("#box1" ,{
    x:1200,
    duration:1,
    delay:0.5,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    opacity:0.1,
    repeat:-1,
    yoyo:true
})

gsap.from("h1",{
    y:50,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.2,
})

// gsap.to("#a", {
//     x:1000,
//     duration:1.5,
//     delay:1,
// })
// gsap.to("#b", {
//     x:1000,
//     duration:1.5,
//     delay:2.5,
//     rotate:360
// })
// gsap.to("#c", {
//     x:1000,
//     duration:1.5,
//     delay:4,
// })

var tl = gsap.timeline()

tl.to("#a", {
    x:1000,
    duration:1.5,
    delay:1
})
tl.to("#b", {
    x:1000,
    duration:1.5
})
tl.to("#c", {
    x:1000,
    duration:1.5
})