function navAnimation(){
    let nav=document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
    let t1=gsap.timeline()
    t1.to(".nav-bottom",{
        height:"21vh"
    })
    t1.to(".nav2 h5",{
        display:"block"
    })
    t1.to(".nav2 h5 span",{
        y:0,
        // duration:0.2,
        stagger:{
            amount:0.1
        }
    })
})

nav.addEventListener("mouseleave",function(){
    let t1=gsap.timeline()
    t1.to(".nav2 h5 span",{
        y:25,
        stagger:{
            amount:0.3
        }
    })
    t1.to(".nav2 h5",{
        display:"none",
        duration:0.2,
    })
    t1.to(".nav-bottom",{
        height:0,
        duration:0.3
    })
})
}
navAnimation();
function page2Animation(){
    let rele=document.querySelectorAll(".right-ele")
rele.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        // console.log(ele.getBoundingClientRect())
        // console.log(ele.childNodes[3])
       gsap.to( ele.childNodes[3],{
            opacity:1,
            scale:1
       })
    })
    ele.addEventListener("mouseleave",function(){
        gsap.to( ele.childNodes[3],{
            opacity:0,
            scale:0
       })
    })
    ele.addEventListener("mousemove",function(dets){
        gsap.to( ele.childNodes[3],{
            x:dets.x -ele.getBoundingClientRect().x-120,
            y:dets.y -ele.getBoundingClientRect().y-120,                             
       })
    })
})
}
page2Animation();
function page3videoAnimation(){
    let center=document.querySelector(".page3-center")
let video=document.querySelector(".page3 video")
center.addEventListener("click",function(){
    video.play();
    gsap.to(video,{
     transform: "scalex(1) scaley(1)",
     opacity:1,
     borderRadiud:0

    })
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform: "scalex(0.7) scaley(0)",
        opacity:0,
        borderRadiud:"30px"
    })
})
}
page3videoAnimation();

function page3_rightvideoAnimation(){
    let sec=document.querySelectorAll(".sec-right")
sec.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
    elem.childNodes[3].style.opacity=1
    elem.childNodes[3].play()


    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity=0
        elem.childNodes[3].load()
    
    
        })
})
}
page3_rightvideoAnimation()

gsap.from(".page7-part2 h4"  ,{
    x:0,
    duration:1.8,
    scrollTrigger:{
        trigger:".page7-part2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})
gsap.from(".page7-part3 h4"  ,{
    x:0,
    duration:1.8,
    scrollTrigger:{
        trigger:".page7-part2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})

gsap.from(".page7-part4 h4"  ,{
    x:0,
    duration:1.8,
    scrollTrigger:{
        trigger:".page7-part2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})

// function page8Animation(){
//     let contant=document.querySelectorAll(".box8-contant");
//     contant.forEach(function(el){
//         el.addEventListener("mouseenter",function(){
//             gsap.to(el),{
                
//             }
//         })
//     })
// }
// page8Animation();