let random=0;
let nu=0;

function makebubble() {
    var clutter = "";
    for (var i = 1; i <= 160; i++) {
        let random = Math.floor(Math.random() * 10) + 1;
        clutter += `<div class="bubble">${random}</div>`
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}
function  incscore(){
    nu += 10;
    document.querySelector("#score").textContent=nu;
}
function hit(){
    random=Math.floor(Math.random()*10)+1;
    document.querySelector("#hitman").textContent=random;
}
let timer=60;
function runtimer(){
    let stop= setInterval(function(){
       if(timer>>0){
        timer--;
        document.querySelector("#time").textContent=timer;
       }else{
            clearInterval(stop);
            document.querySelector(".pbtm").textContent=`Game Over`;
       }
    },700);
}

let pbotm=document.querySelector(".pbtm");
pbotm.addEventListener("click",function(detail){
   let incre=Number(detail.target.textContent);
   if(incre == random){
        incscore();
        makebubble();
        hit();

   }
   
})
runtimer();
makebubble();
hit();