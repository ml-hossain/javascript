gsap.from(".page2 h2", {
    y:100,
    opacity:0,
    duration:2,
    stagger:0.2,
    scrollTrigger:{
        trigger:".page2 h2",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 25%",
        scrub:5
    }
})