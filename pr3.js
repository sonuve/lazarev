console.log("Welcome to Tic Tac Toe");
let musics=new Audio("gameover.wav");
let turn=new Audio("ting.wav");
let gameover= new Audio("gameover.wav")
let turna="X"
let isgameover=false;
//function to change turn
const chanturn=()=>{
    return turna ==="X"? "0": "X"
}
//function to win
const win=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach((el)=>{
    let boxtext=document.querySelectorAll(".boxtext");
    if((boxtext[el[0]].innerText === boxtext[el[1]].innerText) && (boxtext[el[2]].innerText === boxtext[el[1]].innerText) && (boxtext[el[1]].innerText !=='')){
            document.querySelector('.info').innerText= boxtext[el[0]].innerText + "won"
            isgameover=true;
            // document.querySelector(".imagebox").getElementsByTagName("img").style.width ="56px"
            // console.log("box")
        }
    })

}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach((element) =>{
    let boxtexts=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtexts.innerText===''){
            boxtexts.innerText=turna;
            turna=chanturn();
            turn.play();
            win();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn of" + turna;

            }
        }
    })
})

let reset=document.querySelector("#restar")
restar.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach((el)=>{
        el.innerText="";
    })
})
turna="X";
isgameover=false
document.getElementsByClassName("info")[0].innerText="Turn of"+turna;
