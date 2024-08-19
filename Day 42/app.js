var path = `M 10 100 Q 500 100 990 100` ;
var finalPath = `M 10 100 Q 500 100 990 100` ;
let tir = document.querySelector(".abc");

tir.addEventListener('mousemove', function(det){
    path =  `M 10 100 Q ${det.x} ${det.y} 990 100`
gsap.to("svg path", {
    attr:{d:path}
    
})
})
tir.addEventListener("mouseleave", function(){
gsap.to("svg path", {
    attr:{d:finalPath},
    ease: elastic.out(1,0,2)

})
})