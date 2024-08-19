let timeLine = gsap.timeline();


timeLine.from(".navBar h2", {
    y:-50,
    delay:0.5,
    opacity: 0,
    duration:0.8,
    stagger:0.3
})
timeLine.from(".heroSec h1", {
    y: 300,
    opacity: 0,
    duration:0.8,
    stagger:0.3
})
timeLine.from(".heroSec img", {
    x:50,
    rotate:45,
    opacity: 0,
    duration:0.3,
    stagger:0.5
})

