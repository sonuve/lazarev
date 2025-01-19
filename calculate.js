let input=document.querySelector("#inpbox")
let btns=document.querySelectorAll("button")
string="";
btns.forEach(function(ele){
    ele.addEventListener("click",function(event){
        if(event.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1);
            input.value=string
        }else if(event.target.innerHTML=='Ac'){
            string='';
            input.value=string;
        }else if(event.target.innerHTML == '='){
                string= eval(string);
                input.value=string;
        }
        else{
            string +=event.target.innerHTML;
            input.value=string;
        }
      

    })
}) 