var menu= document.querySelector("#nav i")
var cros= document.querySelector("#full-nav i")

var tl= gsap.timeline()

tl.to("#full-nav",{
    right:0,
    duration:0.4
})
tl.from("#full-nav h4",{
    x:150,
    opacity:0,
    duration:0.4,
    stagger:0.2
})
tl.from("#full-nav i",{
    opacity:0
})
tl.pause()
menu.addEventListener("click",function(){
    tl.play()
})
cros.addEventListener("click",()=>{
    tl.reverse()
})