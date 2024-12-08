var path = "M 10 200 Q 650 200 1300 200"
var finalPath = "M 10 200 Q 650 200 1300 200"
var string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets) {
    path=`M 10 200 Q ${dets.x} ${dets.y} 1300 200`
    gsap.to("svg path", {
        attr:{d:path},
        duration:0.2,
        ease:"pawer3.out"
    })
})
string.addEventListener("mouseleave", ()=> {
    gsap.to("svg path", {
        attr:{d:finalPath},
        duration:1.5,
        ease: "elastic.out(1,0.2)"
    })
})
