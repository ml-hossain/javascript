let main = document.querySelector("#main");

main.addEventListener("mousemove", function(det){
    gsap.to("#cursor", {
        x:det.x,
        y:det.y,
        duration:0.2
    })
})