// gsap.to(".box", {
//     x:1000,
//     y:500,
//     duration:2,
//     delay:1,
//     rotate:360
// })
var abc = gsap.timeline()
abc.from(".box", {
    x:1000,
    y:500,
    scale:0.5,
    duration:2,
    // delay:1,
    rotate:360
})
abc.from(".box1", {
    x:1000,
    y:500,
    scale:0.5,
    duration:2,
    // delay:2,
    rotate:360
})
abc.from(".box2", {
    x:1000,
    y:500,
    scale:0.5,
    duration:2,
    // delay:3,
    rotate:360
})